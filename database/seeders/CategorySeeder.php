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
                'description' => 'Sistem optik penglihatan malam dan kamera termal resolusi tinggi untuk operasi taktis.',
            ],
            [
                'name' => 'Armored & Tactical Karoseri',
                'slug' => 'armored-tactical-karoseri',
                'description' => 'Karoseri khusus pertahanan, kendaraan lapis baja, personel carrier (APC), dan taktis militer.',
            ],
            [
                'name' => 'Special Purpose Vehicles',
                'slug' => 'special-purpose-vehicles',
                'description' => 'Kendaraan misi khusus, command center berjalan, ambulans taktis, dan laboratorium lapangan.',
            ],
            [
                'name' => 'Defense Systems & Electronics',
                'slug' => 'defense-systems-electronics',
                'description' => 'Perangkat elektronik pertahanan, komunikasi terintegrasi, dan transmisi gambar nirkabel.',
            ],
        ];

        foreach ($categories as $cat) {
            Category::updateOrCreate(['slug' => $cat['slug']], $cat);
        }
    }
}
