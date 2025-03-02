<?php

namespace App\Http\Controllers;

use App\Models\FactoryModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ModelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('models/index', [
            'models' => FactoryModel::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('models/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'code' => 'required|string|max:255',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:255',
        ]);

        dd($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(FactoryModel $model)
    {
        $model->load(['barcodes' => [
            'year',
            'season',
            'gender',
            'group',
            'color',
            'size',
            'category',
        ]]);

        return Inertia::render('models/show', [
            'model' => $model
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FactoryModel $model)
    {
        return Inertia::render('models/edit', [
            'model' => $model
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, FactoryModel $model)
    {
        $model->update($request->all());

        return redirect()->route('models.show', $model);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FactoryModel $model)
    {
        $model->delete();

        return redirect()->route('models.index');
    }
}
