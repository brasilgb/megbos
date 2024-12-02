<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class AUserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $search = $request->get('q');

        $query = User::orderBy('id', 'DESC');

        if ($search) {
            $query->where('name', 'like', '%' . $search . '%');
        }

        $ausers = $query->paginate(12);

        return Inertia::render('Admin/AUsers/index', ["ausers" => $ausers]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/AUsers/addUser');
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
            "unique" => 'E-mail já cadastrado',
            'confirmed' => 'As senhas não correspondem',
            'min' => 'As senha deve ter no mínimo :min caracteres',
        ];
        $request->validate(
            [
                'name' => 'required',
                'email' => 'required|nullable|email|unique:users',
                'roles' => 'required',
                'status' => 'required',
                'password' => ['required', 'min:6', 'confirmed', Rules\Password::defaults()],
                'password_confirmation' => ['required', 'min:6'],
            ],
            $messages,
            [
                'name' => 'nome',
                'password' => 'senha',
                'password_confirmation' => 'confirme a senha',
                'email' => 'e-mail',
                'roles' => 'função',
            ]
        );
        $data['password'] = Hash::make($request->password);
        User::create($data);
        Session::flash('success', 'Usuário cadastrado com sucesso!');
        return redirect()->route('users.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        return Inertia::render('Admin/AUsers/editUser', ['users' => $user]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        return Redirect::route('users.show', ['user' => $user->id]);
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
