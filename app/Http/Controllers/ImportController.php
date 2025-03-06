<?php

namespace App\Http\Controllers;

use App\Models\Barcode;
use App\Models\Color;
use App\Models\Product;
use App\Models\Size;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
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
        ini_set('max_execution_time', '300');

        $request->validate([
            'file' => 'required|mimes:json',
        ]);

        $file = $request->file('file');

        $data = collect(File::json($file));

        $data->each(function ($item) {

            if (Arr::has($item, 'code')) {
                Product::firstOrCreate(['code' => strtolower($item['code'])], ['name' => $item['name']]);
            }

            if (Arr::has($item, 'color')) {
                Color::firstOrCreate(['name' => $item['color']]);
            }
        });

        $data = $data->map(function ($item, $key) {
            if (count($item) == 10) {
                $item['barcode'] = Barcode::encode(
                    7,
                    $item['year'],
                    $item['season'],
                    $item['gender'],
                    $item['group'],
                    $item['code'],
                    $item['color'],
                    $item['size']
                );
            }
            return  $item;
        });



        return response()->json($data, 200);

        return to_route('home');
    }
}
