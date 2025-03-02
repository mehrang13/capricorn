<?php

use App\Http\Controllers\BarcodeController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\GenderController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\ImportController;
use App\Http\Controllers\ModelController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SeasonController;
use App\Http\Controllers\SizeController;
use App\Http\Controllers\YearController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('import', [ImportController::class, 'create'])->name('import.create');
Route::post('import', [ImportController::class, 'store'])->name('import.store');

Route::resource('products', ProductController::class);
Route::resource('years', YearController::class);
Route::resource('colors', ColorController::class);
Route::resource('seasons', SeasonController::class);
Route::resource('sizes', SizeController::class);
Route::resource('genders', GenderController::class);
Route::resource('groups', GroupController::class);
Route::resource('categories', CategoryController::class);

Route::resource('barcodes', BarcodeController::class);
