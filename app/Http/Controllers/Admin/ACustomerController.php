<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rule;
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
            'cpfcnpj' => ':attribute inválido',
            'unique' => ':attribute já está em uso',
        ];
        $request->validate(
            [
                'name' => 'required',
                'domain' => 'required|unique:tenants',
                'database' => 'required|unique:tenants',
                'customer' => 'required',
                'cpfcnpj' => 'required|cpf_ou_cnpj|unique:tenants',
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
        // php artisan tenants:artisan "migrate --path=database/migrations/tenant --database=tenant"
        // $datab = $request->name;
        DB::statement("CREATE DATABASE IF NOT EXISTS $request->name");
        Customer::create($data);
        Artisan::call('tenants:artisan', [
            "artisanCommand" => 'migrate --path=database/migrations/tenant --database=tenant',
        ]);
        Session::flash('success', 'Cliente cadastrado com sucesso!');
        return redirect()->route('customers.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Customer $customer)
    {
        return Inertia::render('Admin/Customers/editCustomer', ['customer' => $customer]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Customer $customer)
    {
        return Redirect::route('customers.show', ['customer' => $customer->id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Customer $customer)
    {
        $data = $request->all();
        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'cpfcnpj' => ':attribute inválido',
            'unique' => ':attribute já está em uso',
        ];
        $request->validate(
            [
                'name' => 'required',
                'domain' => ['required', Rule::unique('tenants')->ignore($customer->id)],
                'database' => ['required', Rule::unique('tenants')->ignore($customer->id)],
                'customer' => 'required',
                'cpfcnpj' => ['required', Rule::unique('tenants')->ignore($customer->id), 'cpf_ou_cnpj'],
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
        $customer->update($data);
        Session::flash('success', 'Cliente editado com sucesso!');
        return redirect()->route('customers.show', ['customer' => $customer->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Customer $customer)
    {
        DB::statement("DROP DATABASE $customer->name");
        $customer->delete();
        Session::flash('success', 'Cliente deletado com sucesso');
        return Redirect::route('customers.index');
    }
}
