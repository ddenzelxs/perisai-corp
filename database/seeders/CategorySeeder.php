<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Night Vision & Thermal Optics',
                'slug' => 'night-vision-thermal-optics',
                'description' => 'Night vision optical systems and high-resolution thermal cameras for tactical operations.',
            ],
            [
                'name' => 'Armored & Tactical Bodywork',
                'slug' => 'armored-tactical-bodywork',
                'description' => 'Specialized defense bodywork, armored vehicles, armored personnel carriers (APC), and military tactical vehicles.',
            ],
            [
                'name' => 'Defense Systems & Electronics',
                'slug' => 'defense-systems-electronics',
                'description' => 'Defense electronic devices, integrated communications, and wireless image transmission systems.',
            ],
        ];

        foreach ($categories as $cat) {
            Category::updateOrCreate(['slug' => $cat['slug']], $cat);
        }
    }
}

