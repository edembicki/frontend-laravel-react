<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ExampleController;
use App\Http\Controllers\FeedsController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/feeds', [FeedsController::class, 'index']);
Route::post('/feeds', [FeedsController::class, 'store']);
Route::put('/feeds/{id}', [FeedsController::class, 'update']);
Route::delete('/feeds/{id}', [FeedsController::class, 'destroy']);