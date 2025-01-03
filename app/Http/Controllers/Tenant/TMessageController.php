<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use App\Models\Tenant\TMessage;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TMessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');
        $logged = Auth::user()->id;
        $admin = !!User::Where('roles', 'admin')->where('id', $logged)->first();
        if ($admin) {
            $query = TMessage::orderBy('id', 'DESC');
        } else {
            $query = TMessage::where('destinatario', $logged)->orderBy('id', 'DESC');
        }
        if ($search) {
            $query->where('remetente', 'like', '%' . $search . '%');
        }
        $messages = $query->paginate(12);
        $users = User::where('status', 1)->get();
        return Inertia::render('Tenant/TMessages/index', ['messages' => $messages, 'users' => $users]);
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
