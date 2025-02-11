<?php

namespace App\Http\Controllers\Tenant;

use App\Models\Tenant\TOrder;
use App\Http\Controllers\Controller;
use App\Models\Tenant\TCustomer;
use App\Models\Tenant\TProduct;
use App\Models\Tenant\TUser;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Spatie\Multitenancy\Models\Tenant;

class TOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');
        $oc = $request->get('oc');

        $query = TOrder::with('cliente')->orderBy('id', 'DESC');

        if ($search) {
            $query->where('id', 'like', '%' . $search . '%');
        }

        if ($oc) {
            $query->where('cliente_id', $oc);
        }

        $orders = $query->paginate(10)->withQueryString();
        // $whats = Whats::orderBy('id', 'DESC')->first();
        // $printers = Impressao::orderBy('id', 'DESC')->first();
        return Inertia::render('Tenant/TOrders/index', ["orders" => $orders]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $torder = TOrder::latest('id')->first();
        $tcustomers = TCustomer::get();
        return Inertia::render('Tenant/TOrders/addTOrder', ['order' => $torder, 'customers' => $tcustomers]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        // dd($data);
        $messages = [
            'required' => 'O campo :attribute deve ser preenchido'
        ];
        $request->validate(
            [
                'cliente_id' => 'required',
                'equipamento' => 'required',
                'defeito' => 'required',
            ],
            $messages,
            [
                'equipamento' => 'equipamento',
                'senha' => 'senha',
                'cliente_id' => 'cliente',
            ]
        );
        $data['status'] = $request->status ? $request->status : '1';
        TOrder::create($data);
        $current = Tenant::current();
        Session::flash('success', 'Ordem de serviço cadastrada com sucesso!');
        return redirect()->route('ordens.index', $current->name);
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $current = Route::current()->parameters();
        $torder = TOrder::where('id', $current['ordem'])->first();
        $tcustomers = TCustomer::get();
        $tecnicos = TUser::get();
        $parts = TProduct::get();
        return Inertia::render('Tenant/TOrders/editTOrder', ['order' => $torder, 'customers' => $tcustomers, 'tecnicos' => $tecnicos, 'parts' => $parts]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        $current = Route::current()->parameters();
        return Redirect::route('ordens.show', ['ordem' => $current['ordem'], 'company' => $current['company']]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $data = $request->all();
        $messages = [
            'required' => 'O campo :attribute deve ser preenchido'
        ];
        $request->validate(
            [
                'equipamento' => 'required',
                'defeito' => 'required',
                'tecnico' => 'required'
            ],
            $messages,
            [
                'equipamento' => 'equipamento',
                'senha' => 'senha',
            ]
        );
        $current = Route::current()->parameters();
        $dtformat = Carbon::now();
        $data['dtentrega'] = $request->status == '8' ? $dtformat->toDateTimeString() : null;
        $data['pecas'] = is_array($request->pecas) ? '' : $request->pecas;

        if (is_array($request->pecas)) {
            foreach ($request->pecas as $peca) {
                $pec[] = [
                    'ordem_id' => $current['ordem'],
                    'produto_id' => $peca,
                    'quantidade' => 1,
                    'valorvenda' =>  $request->valorvenda
                ];
            }
            dd($pec);
            $ord = TOrder::find($current['ordem']);
            $ord->produtos()->sync($pec);
        } 
        // else {
        //     $ord = TOrder::find($current['ordem']);
        //     $ord->produtos()->sync([]);
        // }

        DB::table('torders')->where('id', $current['ordem'])->update($data);
        Session::flash('success', 'Ordem de serviço editada com sucesso!');
        return Redirect::route('ordens.show', ['ordem' => $current['ordem'], 'company' => $current['company']]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        $current = Route::current()->parameters();
        TOrder::where('id', $current['ordem'])->delete();
        Session::flash('success', 'Ordem de serviço deletada com sucesso');
        return Redirect::route('ordens.index', $current['company']);
    }
}
