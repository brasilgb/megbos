<?php

namespace App\Http\Controllers\Tenant;

use App\Models\Tenant\TOrder;
use App\Http\Controllers\Controller;
use App\Models\Tenant\TCustomer;
use App\Models\Tenant\TPart;
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

        $orders = $query->paginate(12)->withQueryString();
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
        $parts = TPart::get();
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
        $dtformat = Carbon::now();
        $data['dtentrega'] = $request->status == '8' ? $dtformat->toDateTimeString() : null;

        // if (!empty($request->produtos)) {
        //     foreach ($request->produtos as $peca) {
        //         $pec[] = [
        //             'ordem_id' => $ordem->id,
        //             'produto_id' => $peca,
        //             'quantidade' => 1
        //         ];
        //     }
        //     $ord = Ordem::find($ordem->id);
        //     $ord->produtos()->sync($pec);
        // } else {
        //     $ord = Ordem::find($ordem->id);
        //     $ord->produtos()->sync([]);
        // }

        $current = Route::current()->parameters();
        DB::table('tcustomers')->where('id', $request->id)->update($data);
        Session::flash('success', 'Ordem de serviço editada com sucesso!');
        return Redirect::route('clientes.show', ['cliente' => $current['cliente'], 'company' => $current['company']]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TOrder $tOrder)
    {
        //
    }
}
