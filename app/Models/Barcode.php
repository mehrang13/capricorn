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
        'factory_model_id',
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

    public function factoryModel()
    {
        return $this->belongsTo(FactoryModel::class);
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
}
