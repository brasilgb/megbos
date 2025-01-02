<?php

use App\Http\Controllers\Admin\AHomeController;
use App\Http\Controllers\Admin\ACustomerController;
use App\Http\Controllers\Admin\AUserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Site\HomeController;
use App\Http\Controllers\Tenant\TCustomerController;
use App\Http\Controllers\Tenant\THomeController;
use App\Http\Controllers\Tenant\TOrderController;
use App\Http\Controllers\Tenant\TProductController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;




Route::middleware('tenant')->domain('{company}.megbos.test')->group(function () {
    Route::get('/', [THomeController::class, 'index'])->name('tdashboard');
    Route::resource('/clientes', TCustomerController::class);
    Route::resource('/ordens', TOrderController::class)->parameters(['ordens' => 'ordem']);
    Route::resource('/produtos', TProductController::class)->parameters(['ordens' => 'ordem']);
    Route::resource('/mensagens', TProductController::class)->parameters(['mensagens' => 'mensagem']);
    Route::resource('/agendamentos', TProductController::class)->parameters(['agendamentos' => 'agendamento']);
});

Route::domain('megbos.test')->group(function () {
    Route::get('/', [HomeController::class, 'index']);
});

Route::middleware(['auth', 'verified'])->domain('megbos.test')->group(function () {
    Route::get('/dashboard', [AHomeController::class, 'index'])->name('dashboard');
    Route::resource('/customers', ACustomerController::class);
    Route::resource('/users', AUserController::class);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';