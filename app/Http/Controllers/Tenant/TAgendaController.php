<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Models\Tenant\TAgenda;
use App\Models\Tenant\TCustomer;
use App\Models\Tenant\TUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Spatie\Multitenancy\Models\Tenant;

class TAgendaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');
        $ac = $request->get('ac');
        $query = TAgenda::with('cliente')->orderBy('id', 'DESC');

        if ($search) {
            $query->whereDate('datahora', $search);
        }

        if ($ac) {
            $query->where('cliente_id', $ac);
        }

        $agendas = $query->paginate(12);
        return Inertia::render('Tenant/TAgendas/index', ["agendas" => $agendas]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $customers = TCustomer::get();
        $tecnicos = TUser::get();
        return Inertia::render('Tenant/TAgendas/addTAgenda', ['tecnicos' => $tecnicos, 'customers' => $customers]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
        ];
        $request->validate(
            [
                'cliente_id' => 'required',
                'datahora' => 'required',
                'servico' => 'required',
                'detalhes' => 'required',
                'tecnico' => 'required',
                'status' => 'required',
            ],
            $messages,
            [
                // 'nome' => 'nome',
                // 'email' => 'e-mail',
            ]
        );

        TAgenda::create($data);
        $current = Tenant::current();
        Session::flash('success', 'Agendamento cadastrado com sucesso!');
        return redirect()->route('agendamentos.index', $current->name);
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $customers = TCustomer::get();
        $tecnicos = TUser::get();
        $current = Route::current()->parameters();
        $agendamento = TAgenda::where('id', $current['agendamento'])->first();
        return Inertia::render('Tenant/TAgendas/editTAgenda', ['agendamento' => $agendamento, 'tecnicos' => $tecnicos, 'customers' => $customers]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $current = Route::current()->parameters();
        return Redirect::route('agendamentos.show', ['agendamento' => $current['agendamento'], 'company' => $current['company']]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
