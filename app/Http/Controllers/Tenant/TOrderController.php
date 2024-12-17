<?php

namespace App\Http\Controllers\Tenant;

use App\Models\Tenant\TOrder;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

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
        return Inertia::render('Tenant/TOrders/addTOrder', ['order' => $torder]);
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
    public function show(TOrder $tOrder)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TOrder $tOrder)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TOrder $tOrder)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TOrder $tOrder)
    {
        //
    }
}
