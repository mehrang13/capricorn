<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ColorController;
use App\Http\Controllers\GenderController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\ModelController;
use App\Http\Controllers\SeasonController;
use App\Http\Controllers\SizeController;
use App\Http\Controllers\YearController;
use App\Models\Category;
use App\Models\Color;
use App\Models\FactoryModel;
use App\Models\Gender;
use App\Models\Group;
use App\Models\Season;
use App\Models\Size;
use App\Models\Year;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home', [
        'models' => FactoryModel::all(),
        'years' => Year::all(),
        'colors' => Color::all(),
        'seasons' => Season::all(),
        'sizes' => Size::all(),
        'genders' => Gender::all(),
        'groups' => Group::all(),
        'categories' => Category::all(),
    ]);
})->name('home');


Route::resource('models', ModelController::class);
Route::resource('years', YearController::class);
Route::resource('colors', ColorController::class);
Route::resource('seasons', SeasonController::class);
Route::resource('sizes', SizeController::class);
Route::resource('genders', GenderController::class);
Route::resource('groups', GroupController::class);
Route::resource('categories', CategoryController::class);
