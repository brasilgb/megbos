<?php

use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Tenant\THomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->domain('megbos.test')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('dashboard');
});

Route::middleware('tenant')->domain('{company}.megbos.test')->group(function () {
    Route::get('/', [THomeController::class, 'index']);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
