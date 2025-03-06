<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Barcode extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'id',
        'year_id',
        'season_id',
        'gender_id',
        'group_id',
        'product_id',
        'color_id',
        'size_id',
        'category_id',
        'code',
    ];

    public function year()
    {
        return $this->belongsTo(Year::class);
    }

    public function season()
    {
        return $this->belongsTo(Season::class);
    }

    public function gender()
    {
        return $this->belongsTo(Gender::class);
    }

    public function group()
    {
        return $this->belongsTo(Group::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function color()
    {
        return $this->belongsTo(Color::class);
    }

    public function size()
    {
        return $this->belongsTo(Size::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public static function encode($manufacturer, $year, $season, $gender, $group, $product, $color, $size): string
    {
        $manufacturer = strtolower($manufacturer);
        $year = strtolower($year);
        $season = strtolower($season);
        $gender = strtolower($gender);
        $group = strtolower($group);
        $product = strtolower($product);
        $color = strtolower($color);

        $size = strtolower($size);

        if ($size == 'no size') {
            $size = 'no size';
        }
        if ($size == '2xs' || $size == 30 || $size == "30") {
            $size = '2xs';
        }
        if ($size == 'xs' || $size == 31 || $size == "31") {
            $size = 'xs';
        }
        if ($size == 's' || $size == 's-m' || $size == 32 || $size == "32") {
            $size = 's';
        }
        if ($size == 'm' || $size == 'm-l' || $size == 33 || $size == "33") {
            $size = 'm';
        }
        if ($size == 'l' || $size == 'l-xl' || $size == 34 || $size == "34") {
            $size = 'l';
        }
        if ($size == 'xl' || $size == 'xl-2xl' || $size == 36 || $size == "36") {
            $size = 'xl';
        }
        if ($size == '2xl' || $size == '2xl-3xl' || $size == 38 || $size == "38") {
            $size = '2xl';
        }
        if ($size == '3xl' || $size == 40 || $size == "40") {
            $size = '3xl';
        }

        $year = Year::where('name', $year)->first()?->id;
        $season = Season::where('name', $season)->first()->id;
        $gender = Gender::where('name', $gender)->first()->id;
        $group = Group::where('name', $group)->first()->id;
        $product = Product::where('code', $product)->first()->id;
        $color = Color::where('name', $color)->first()->id;
        $size = Size::where('name', $size)->first()->id;

        $product = intval($product) + 99;
        $product = str_pad($product, 3, '0', STR_PAD_LEFT);
        $year = str_pad($year, 2, '0', STR_PAD_LEFT);
        $color = str_pad($color, 3, '0', STR_PAD_LEFT);

        return $manufacturer  . $year  . $season  . $gender  . $group  . $product  . $color  . $size;
    }

    public static function decode($value): array
    {
        $data  = array_map('intval', str_split($value));

        $manufacturerId = $data[0];
        $yearId = $data[1] . $data[2];
        $seasonId = $data[3];
        $genderId = $data[4];
        $groupId = $data[5];
        $productId =  $data[6] . $data[7] . $data[8];
        $colorId = $data[9] . $data[10] . $data[11];
        $sizeId = $data[12];

        return [
            'manufacturerId' => $manufacturerId,
            'yearId' => $yearId,
            'seasonId' => $seasonId,
            'genderId' => $genderId,
            'groupId' => $groupId,
            'productId' => $productId,
            'colorId' => $colorId,
            'sizeId' => $sizeId,
        ];
    }
}
