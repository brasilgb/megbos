<?php

namespace App\Http\Controllers\Tenant;

use App\Models\Tenant\TCustomer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
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
        
        $customers = $query->paginate(12)->withQueryString();

        return Inertia::render('Tenant/TCustomers/index',['customers' => $customers]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $customer = TCustomer::latest('id')->first();
        return Inertia::render('Tenant/TCustomers/addTCustomer', ['customer' => $customer]);
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
        return redirect()->route('tcustomers.index', $current->name);
    }

    /**
     * Display the specified resource.
     */
    public function show(TCustomer $customer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TCustomer $customer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TCustomer $customer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TCustomer $customer)
    {
        $current = Tenant::current();
        $customer->delete();
        Session::flash('success', 'Cliente deletado com sucesso');
        return Redirect::route('customers.index', $current->name);
    }
}
