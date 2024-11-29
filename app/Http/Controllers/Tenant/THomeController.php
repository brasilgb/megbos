<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Spatie\Multitenancy\Models\Tenant;

class THomeController extends Controller
{
    public function index()
    {
        if(!Auth::user()) {
            return Redirect()->route('login');
        }
        return Inertia::render('Tenant/TDashboard');
    }
}
