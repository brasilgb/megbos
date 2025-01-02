<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Models\Tenant\TProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;
use Spatie\Multitenancy\Models\Tenant;

class TProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');
        // $estoque = Estoque::get();
        $query = TProduct::orderBy('id', 'DESC');

        if ($search) {
            $query->where('descricao', 'like', '%' . $search . '%');
        }

        $products = $query->paginate(12);
        return Inertia::render('Tenant/TProducts/index', ["products" => $products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Tenant/TProducts/addTProduct');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'numeric' => 'Digite somente números',
        ];
        $request->validate(
            [
                'descricao' => 'required',
                'valcompra' => 'required|numeric',
                'valvenda' => 'required|numeric',
                'quantidade' => 'required|numeric',
                'unidade' => 'required',
                'estmaximo' => 'required|numeric',
                'estminimo' => 'required|numeric',
                'tipo' => 'required',
            ],
            $messages,
            [
                'descricao' => 'descrição',
                'valcompra' => 'valor da compra',
                'valvenda' => 'valor da venda',
                'estmaximo' => 'estoque máximo',
                'estminimo' => 'estoque mínimo',
            ]
        );
        
        $id = TProduct::latest('id')->first();
        $data['id'] = $id ? $id->id + 1 : 1;
        TProduct::create($data);
        $current = Tenant::current();
        Session::flash('success', 'Produto cadastrado com sucesso!');
        return redirect()->route('produtos.index', $current->name);
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $current = Route::current()->parameters();
        $product = TProduct::where('id', $current['produto'])->first();
        return Inertia::render('Tenant/TProducts/editTProduct', ['product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit()
    {
        $current = Route::current()->parameters();
        return Redirect::route('produtos.show', ['produto' => $current['produto'], 'company' => $current['company']]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $data = $request->all();

        $messages = [
            'required' => 'O campo :attribute deve ser preenchido',
            'numeric' => 'Digite somente números',
        ];
        $request->validate(
            [
                'descricao' => 'required',
                'valcompra' => 'required|numeric',
                'valvenda' => 'required|numeric',
                'quantidade' => 'required|numeric',
                'unidade' => 'required',
                'estmaximo' => 'required|numeric',
                'estminimo' => 'required|numeric',
                'tipo' => 'required',
            ],
            $messages,
            [
                'descricao' => 'descrição',
                'valcompra' => 'valor da compra',
                'valvenda' => 'valor da venda',
                'estmaximo' => 'estoque máximo',
                'estminimo' => 'estoque mínimo',
            ]
        );
        
        $current = Route::current()->parameters();
        DB::table('tproducts')->where('id', $current['produto'])->update($data);
        Session::flash('success', 'Produto alterado com sucesso!');
        return Redirect::route('produtos.show', ['produto' => $current['produto'], 'company' => $current['company']]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        $current = Route::current()->parameters();
        TProduct::where('id', $current['produto'])->delete();
        Session::flash('success', 'Produto deletado com sucesso');
        return Redirect::route('produtos.index', $current['company']);
    }
}
