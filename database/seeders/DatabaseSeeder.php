<?php

namespace Database\Seeders;

use App\Models\Barcode;
use App\Models\Category;
use App\Models\Color;
use App\Models\Gender;
use App\Models\Group;
use App\Models\Product;
use App\Models\Season;
use App\Models\Size;
use App\Models\User;
use App\Models\Year;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $data = File::json(database_path('barcodes.json'));
        $data = collect($data);
        $data = $data->map(function ($item) {
            foreach ($item as $key => $value) {
                $item[strtolower($key)] = strtolower(trim($value));
            }
            return $item;
        });

        $data->each(function ($item) {

            $barcode = $item['barcode'];
            $barcode = Barcode::decode($barcode);

            $year = Year::firstOrCreate(['id' => $barcode['yearId']], ['name' => $item['year']]);
            $season = Season::firstOrCreate(['id' => $barcode['seasonId']], ['name' => $item['season']]);
            $gender = Gender::firstOrCreate(['id' => $barcode['genderId']], ['name' => $item['gender']]);
            $group = Group::firstOrCreate(['id' => $barcode['groupId']], ['name' => $item['group']]);
            $product = Product::firstOrCreate(['code' => $item['code']], ['name' => $item['name']]);
            $color = Color::firstOrCreate(['id' => $barcode['colorId']], ['name' => $item['color']]);
            $size = Size::firstOrCreate(['id' => $barcode['sizeId']], ['name' => $item['size']]);
            $category = Category::firstOrCreate(['name' => $item['category']]);

            Barcode::firstOrCreate([
                    'code' => $item['barcode'],
                ], [
                    'year_id' => $barcode['yearId'],
                    'season_id' => $barcode['seasonId'],
                    'gender_id' => $barcode['genderId'],
                    'group_id' => $barcode['groupId'],
                    'product_id' => $product->id,
                    'color_id' => $barcode['colorId'],
                    'size_id' => $barcode['sizeId'],
                    'category_id' => $category->id,
                ]);
        });

        Size::create(['id'=> '1','name' => '2xs']);
        Size::create(['id'=> '2','name' => 'xs']);
    }
}
