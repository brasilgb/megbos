<?php

namespace App\Http\Controllers\Tenant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class THomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Tenant/TDashboard');
    }
}
