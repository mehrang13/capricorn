<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Color;
use App\Models\FactoryModel;
use App\Models\Gender;
use App\Models\Group;
use App\Models\Season;
use App\Models\Size;
use App\Models\Year;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ImportController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('import');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:json',
        ]);

        $file = $request->file('file');

        $data = collect(File::json($file));

        $data = $data->map(function ($item) {
            return array_change_key_case($item, CASE_LOWER);
        });

        $data->each(function ($item) {

            if (Arr::has($item, 'year')) {
                Year::firstOrCreate(['name' => $item['year']]);
            }

            if (Arr::has($item, 'season')) {
                Season::firstOrCreate(['name' => $item['season']]);
            }

            if (Arr::has($item, 'gender')) {
                Gender::firstOrCreate(['name' => $item['gender']]);
            }

            if (Arr::has($item, 'group')) {
                Group::firstOrCreate(['name' => $item['group']]);
            }

            if (Arr::has($item, 'category')) {
                Category::firstOrCreate(['name' => $item['category']]);
            }

            if (Arr::has($item, 'color')) {
                Color::firstOrCreate(['name' => $item['color']]);
            }

            if (Arr::has($item, 'size')) {
                Size::firstOrCreate(['name' => $item['size']]);
            }

            if (Arr::has($item, 'code')) {
                FactoryModel::firstOrCreate([
                    'code' => $item['code'],

                ], [
                    'name' => $item['name'],
                    'description' => $item['description'] ?? null,
                ]);
            }
        });
    }
}
