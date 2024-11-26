<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Spatie\Multitenancy\Models\Tenant;

class ACustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $customers = Customer::get();
        return Inertia::render('Admin/Customers/index', ['customers' => $customers]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Customers/addCustomer');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'cpfcnpj' => 'CPF/CNPJ inválido',
            'unique' => 'CPF/CNPJ já está em uso',
        ];
        $request->validate(
            [
                'name' => 'required',
                'domain' => 'required',
                'database' => 'required',
                'customer' => 'required',
                // 'cpfcnpj' => 'required|cnpj|unique:tenants',
                'cep' => 'required',
                'state' => 'required',
                'city' => 'required',
                'district' => 'required',
                'street' => 'required',
                'number' => 'required',
                'complement' => 'required',
                'email' => 'required',
                'telephone' => 'required',
                'whatsapp' => 'required',
                'status' => 'required',
                'payment' => 'required',
            ],
            $messages,
            [
                'name' => 'nome',
                'domain' => 'domínio',
                'database' => 'banco de dados',
                'customer' => 'cliente',
                'cpfcnpj' => 'CPF/CNPJ',
                'cep' => 'CEP',
                'state' => 'estado',
                'city' => 'cidade',
                'district' => 'bairro',
                'street' => 'logradouro',
                'number' => 'numero',
                'complement' => 'complemento',
                'email' => 'e-mail',
                'telephone' => 'telefone',
                'payment' => 'pagamento',
            ]
        );
        Customer::create($data);
        Session::flash('success', 'Cliente cadastrado com sucesso!');
        return redirect()->route('clientes.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $cliente)
    {
        return Inertia::render('Admin/Customer/editCustomer', ['customer' => $cliente]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Customer $customer)
    {
        return Redirect::route('clientes.show', ['cliente' => $customer->id]);
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
