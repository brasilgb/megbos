<?php

namespace App\Http\Controllers\Tenant;

use App\Models\Tenant\TCustomer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TCustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Tenant/TCustomers/index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Tenant/TCustomers/addTCustomer');
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
        //
    }
}
