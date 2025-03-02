<?php

namespace App\Http\Controllers;

use App\Models\Barcode;
use App\Models\Category;
use App\Models\Color;
use App\Models\Gender;
use App\Models\Group;
use App\Models\Product;
use App\Models\Season;
use App\Models\Size;
use App\Models\Year;
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
        $request->validate([
            'file' => 'required|mimes:json',
        ]);

        $file = $request->file('file');

        $data = collect(File::json($file));

        $data = $data->map(function ($item) {
            foreach ($item as $key => $value) {
                $item[strtolower($key)] = strtolower(trim($value));
            }
            return $item;
        });

        $data->each(function ($item) {

            $barcode = $item['barcode'];

            $arrayBarcode  = array_map('intval', str_split($barcode));

            $yearId = $arrayBarcode[1] . $arrayBarcode[2];
            $seasonId = $arrayBarcode[3];
            $genderId = $arrayBarcode[4];
            $groupId = $arrayBarcode[5];
            $modelId =  $arrayBarcode[6] . $arrayBarcode[7] . $arrayBarcode[8];
            $colorId = $arrayBarcode[9] . $arrayBarcode[10] . $arrayBarcode[11];
            $sizeId = $arrayBarcode[12];

            if (Arr::has($item, 'year')) {
                $year = Year::firstOrCreate(['id' => $yearId,], ['name' => $item['year']]);
            }

            if (Arr::has($item, 'season')) {
                $season = Season::firstOrCreate(['id' => $seasonId], ['name' => $item['season']]);
            }

            if (Arr::has($item, 'gender')) {
                $gender = Gender::firstOrCreate(['id' => $genderId], ['name' => $item['gender']]);
            }

            if (Arr::has($item, 'group')) {
                $group = Group::firstOrCreate(['id' => $groupId], ['name' => $item['group']]);
            }

            if (Arr::has($item, 'category')) {
                $category = Category::firstOrCreate(['name' => $item['category']]);
            }

            if (Arr::has($item, 'color')) {
                $color = Color::firstOrCreate(['id' => $colorId], ['name' => $item['color']]);
            }

            if (Arr::has($item, 'size')) {
                $size = Size::firstOrCreate(['id' => $sizeId], ['name' => $item['size']]);
            }

            if (Arr::has($item, 'code')) {
                $product = Product::firstOrCreate([
                    'code' => $item['code'],

                ], [
                    'name' => $item['name'],
                    'description' => $item['description'] ?? null,
                ]);
            }

            if (Arr::has($item, 'barcode')) {
                Barcode::firstOrCreate([
                    'code' => $item['barcode'],
                ], [
                    'year_id' => $yearId,
                    'season_id' => $seasonId,
                    'gender_id' => $genderId,
                    'group_id' => $groupId,
                    'product_id' => $product->id,
                    'color_id' => $colorId,
                    'size_id' => $sizeId,
                    'category_id' => $category->id,
                ]);
            }
        });

        return to_route('home');
    }
}
