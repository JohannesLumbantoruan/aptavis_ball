<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [\App\Http\Controllers\ClubController::class, 'index']);
Route::get('/clubs', [\App\Http\Controllers\ClubController::class, 'index']);
Route::get('/clubs/create', [\App\Http\Controllers\ClubController::class, 'create']);
Route::post('/clubs', [\App\Http\Controllers\ClubController::class, 'store']);