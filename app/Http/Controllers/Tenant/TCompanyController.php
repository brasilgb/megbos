<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Models\Tenant\TCompany;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class TCompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (!TCompany::exists()) {
            TCompany::firstOrCreate(['empresa' => '']);
        }
        $company = TCompany::first();
        return Inertia::render('Tenant/TCompany/index', ['company' => $company]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        $tcompany = TCompany::first();
        $data = $request->except(['_method' ]);
        $storePath = public_path('images');
        if (!File::exists($storePath)) {
            File::makeDirectory($storePath, 0777, true);
        };
        if ($request->hasfile('logo')) {
            $fileName = time() . '.' . $request->logo->extension();
            $request->logo->move($storePath, $fileName);
            if (File::exists($storePath . DIRECTORY_SEPARATOR . $tcompany->logo)) {
                unlink($storePath . DIRECTORY_SEPARATOR . $tcompany->logo);
            }
        }
        $data['logo'] = $request->hasfile('logo') ? $fileName : $tcompany->logo;
        $current = Route::current()->parameters();
        DB::table('tcompanies')->where('id', $current['empresa'])->update($data);
        Session::flash('success', 'Dados da empresa editado com sucesso!');
        return Redirect::route('empresa.index', ['company' => $current['company']]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
