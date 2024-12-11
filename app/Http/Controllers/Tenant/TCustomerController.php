<?php

namespace App\Http\Controllers\Tenant;

use App\Models\Tenant\TCustomer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Spatie\Multitenancy\Models\Tenant;

class TCustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');

        $query = TCustomer::orderBy('id', 'DESC');

        if ($search) {
            $query->where('nome', 'like', '%' . $search . '%')
                ->orWhere('cpf', 'like', '%' . $search . '%');
        }

        $tcustomers = $query->paginate(12)->withQueryString();

        return Inertia::render('Tenant/TCustomers/index', ['customers' => $tcustomers]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $tcustomer = TCustomer::latest('id')->first();
        return Inertia::render('Tenant/TCustomers/addTCustomer', ['customer' => $tcustomer]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'email' => 'Endereço de e-mail inválido',
            'cpf_ou_cnpj' => 'CPF ou CNPJ inválido',
            'unique' => 'CPF ou CNPJ já está em uso',
        ];
        $request->validate(
            [
                'nome' => 'required',
                // 'cpf' => 'required|cpf_ou_cnpj|unique:tcustomers',
                'email' => 'nullable|email|unique:tcustomers',
                'telefone' => 'required'
            ],
            $messages,
            [
                'nome' => 'nome',
                'email' => 'e-mail',
                'cpf' => 'CPF/CNPJ',
            ]
        );

        TCustomer::create($data);
        $current = Tenant::current();
        Session::flash('success', 'Cliente cadastrado com sucesso!');
        return Redirect::route('clientes.index', $current->name);
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $current = Route::current()->parameters();
        $cliente = TCustomer::where('id', $current['cliente'])->first();

        return Inertia::render('Tenant/TCustomers/editTCustomer', ['cliente' => $cliente]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        $current = Route::current()->parameters();
        return Redirect::route('clientes.show', ['cliente' => $current['cliente'], 'company' => $current['company']]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'email' => 'Endereço de e-mail inválido',
            'cpf_ou_cnpj' => 'CPF ou CNPJ inválido',
            'unique' => 'CPF ou CNPJ já está em uso',
        ];
        $request->validate(
            [
                'nome' => 'required',
                'cpf' => 'nullable|cpf_ou_cnpj|unique:tcustomers,cpf,' . $request->id,
                'email' => 'nullable|email|unique:tcustomers,' . $request->id,
                'telefone' => 'required'
            ],
            $messages,
            [
                'nome' => 'nome',
                'email' => 'e-mail',
                'cpf' => 'CPF/CNPJ',
            ]
        );

        $current = Route::current()->parameters();
        DB::table('tcustomers')->where('id', $request->id)->update($data);
        Session::flash('success', 'Cliente editado com sucesso!');
        return Redirect::route('clientes.show', ['cliente' => $current['cliente'], 'company' => $current['company']]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        $current = Route::current()->parameters();
        TCustomer::where('id', $current['cliente'])->delete();
        Session::flash('success', 'Cliente deletado com sucesso');
        return Redirect::route('clientes.index', $current['company']);
    }
}
