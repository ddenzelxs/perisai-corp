<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $opticsCat = Category::where('slug', 'night-vision-thermal-optics')->first();
        $karoseriCat = Category::where('slug', 'armored-tactical-karoseri')->first();
        $specialCat = Category::where('slug', 'special-purpose-vehicles')->first();

        $products = [
            // --- OPTICS ---
            [
                'name' => 'ELF-3IH',
                'slug' => 'elf-3ih',
                'category_id' => $opticsCat?->id,
                'category' => 'BINOCULAR NIGHT VISION GOGGLES',
                'description' => 'The ELF-3IH Binocular Night Vision Goggles feature a modular design and standard interfaces. Adjustments can be made to the diopter and IPD. The lightweight housing is crafted from lightweight PEEK composite material, providing comfort and ease of wear.',
                'image_path' => 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
                'highlights' => [
                    ['icon' => 'Feather', 'label' => 'LIGHTWEIGHT AND PORTABLE'],
                    ['icon' => 'Zap', 'label' => 'HIGH-PERFORMANCE OPTICS'],
                    ['icon' => 'Sliders', 'label' => 'MANUAL GAIN'],
                    ['icon' => 'Power', 'label' => 'POWER-OFF BY SIDE-TURNING'],
                    ['icon' => 'Droplets', 'label' => '20M WATER RESISTANCE'],
                ],
                'specifications' => [
                    'Magnification, x' => '1',
                    'Exit Pupil Distance, mm' => '25',
                    'Adjustment, D' => '-6~+2',
                    'IF Resolution, lp/mm' => '64',
                    'SNR' => '≥30 (Standard Gate Control)',
                    'FOV, °' => '40±2',
                    'Lens System, mm' => '27',
                    'Range of Focus, m' => '250 ~ ∞',
                    'Battery Life, h' => '20',
                    'Weight, g' => '550',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'ELF-C',
                'slug' => 'elf-c',
                'category_id' => $opticsCat?->id,
                'category' => 'CLIP-ON THERMAL IMAGER',
                'description' => 'The ELF-C is a clip-on thermal imaging enhancement attachment designed for night vision and minimum illumination in extreme environmental conditions. It facilitates rapid enhancement of existing devices.',
                'image_path' => 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
                'highlights' => [
                    ['icon' => 'Feather', 'label' => 'LIGHTEST IN THE SERIES'],
                    ['icon' => 'Monitor', 'label' => 'MULTI-MODE DISPLAY'],
                    ['icon' => 'BatteryCharging', 'label' => 'MULTI-SOURCE POWER SUPPLY'],
                    ['icon' => 'Download', 'label' => 'INSTALL AND PLAY'],
                ],
                'specifications' => [
                    'Magnification, x' => '1',
                    'Resolution, Pixels' => '640×512',
                    'Pixel Pitch, µm' => '12',
                    'NETD, mk' => '≤25',
                    'Frame Rate, Hz' => '50',
                    'Lens System, mm' => '18.5 F1.0',
                    'Immersion' => 'IP67',
                    'Weight, g' => '95 (w/o Battery)',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'ELF-ML',
                'slug' => 'elf-ml',
                'category_id' => $opticsCat?->id,
                'category' => 'MULTI-FUNCTIONAL THERMAL MONOCULAR',
                'description' => 'The ELF-ML features 12µm thermal imaging technology and a high-sensitivity infrared detector, delivering exceptional outdoor night vision performance in a compact PEEK composite housing.',
                'image_path' => 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80',
                'highlights' => [
                    ['icon' => 'Feather', 'label' => 'LIGHTEST IN THE SERIES'],
                    ['icon' => 'Settings', 'label' => 'VARIOUS FUNCTIONS'],
                    ['icon' => 'Shield', 'label' => 'HIGH-STRENGTH PEEK MATERIAL'],
                    ['icon' => 'Droplets', 'label' => 'IP67 WATERPROOF'],
                ],
                'specifications' => [
                    'Magnification, x' => '1',
                    'Adjustment, D' => '-5~5',
                    'Resolution, Pixels' => '384×288/640×512',
                    'Pixel Pitch, µm' => '12',
                    'Frame Rate, Hz' => '50',
                    'Display Resolution' => '1024×768',
                    'Weight, g' => '200',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'ELF-MU',
                'slug' => 'elf-mu',
                'category_id' => $opticsCat?->id,
                'category' => 'MULTI-FUNCTIONAL THERMAL MONOCULAR',
                'description' => 'The ELF-MU Four-in-One Versatile Thermal Camera is equipped with a high-performance 640×512 infrared detector with handheld, head-mounted, thermal sight, and clip-on capabilities.',
                'image_path' => 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
                'highlights' => [
                    ['icon' => 'ShieldAlert', 'label' => 'WITHSTANDING 1,000G IMPACT'],
                    ['icon' => 'BatteryCharging', 'label' => 'ULTRA-LONG BATTERY LIFE'],
                    ['icon' => 'Camera', 'label' => 'PHOTO VIDEO 64G'],
                    ['icon' => 'Wifi', 'label' => 'WIRELESS TRANSMISSION'],
                ],
                'specifications' => [
                    'Magnification, x' => '1',
                    'Resolution, Pixels' => '640×512',
                    'Pixel Pitch, µm' => '12',
                    'NETD, mK' => '< 25',
                    'Lens System' => '26.7 F1.0',
                    'Immersion' => 'IP67',
                    'Weight, g' => '270',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'ELF-FB',
                'slug' => 'elf-fb',
                'category_id' => $opticsCat?->id,
                'category' => 'ENHANCED NIGHT VISION BINOCULAR GOGGLES',
                'description' => 'The ELF-FB features advanced binocular night vision technology with a high-performance design for superior situational awareness and multi-mode fusion in demanding operational environments.',
                'image_path' => 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
                'highlights' => [
                    ['icon' => 'Eye', 'label' => 'BINOCULAR 3D VISION'],
                    ['icon' => 'Target', 'label' => 'RAPID TARGET RECOGNITION'],
                    ['icon' => 'Layers', 'label' => 'MULTI-MODE FUSION'],
                    ['icon' => 'Feather', 'label' => 'LIGHTWEIGHT AND PORTABLE'],
                ],
                'specifications' => [
                    'Magnification, x' => '1',
                    'Exit Pupil Distance, mm' => '20',
                    'FOV, °' => '40',
                    'Resolution, Pixels' => '640×512',
                    'Display Resolution' => '800×600 (OLED)',
                    'Immersion' => 'IP67',
                    'Weight, g' => '575',
                ],
                'is_active' => true,
            ],

            // --- TACTICAL KAROSERI & ARMORED VEHICLES ---
            [
                'name' => 'PERISAI APC-4X4',
                'slug' => 'perisai-apc-4x4',
                'category_id' => $karoseriCat?->id,
                'category' => 'ARMORED PERSONNEL CARRIER',
                'description' => 'Rancang bangun karoseri kendaraan lapis baja 4x4 untuk personel militer dan kepolisian. Dilengkapi pelindung balistik standar STANAG 4569 Level 2, dinding baja anti-penetrasi, kaca tahan peluru, serta suspensi heavy-duty untuk medan ekstrem.',
                'image_path' => 'https://images.unsplash.com/photo-1541447271487-09612b3f49f7?auto=format&fit=crop&w=800&q=80',
                'highlights' => [
                    ['icon' => 'ShieldAlert', 'label' => 'STANAG LEVEL 2 BALISTIC'],
                    ['icon' => 'Shield', 'label' => 'HEAVY-DUTY CHASSIS'],
                    ['icon' => 'Target', 'label' => 'TURRET SYSTEM READY'],
                    ['icon' => 'Settings', 'label' => 'CUSTOM KAROSERI SPEC'],
                ],
                'specifications' => [
                    'Kapasitas Personel' => '10 Personel (2 Crew + 8 Troops)',
                    'Proteksi Balistik' => 'STANAG 4569 Level 2 / NIJ IV',
                    'Proteksi Ledakan' => 'Lantai Anti-Ranjau V-Shape Hull',
                    'Mesin Base Chassis' => 'Turbo Diesel Intercooler 6.7L V8',
                    'Daya Maksimum' => '330 HP / 2.600 RPM',
                    'Transmisi' => '6-Speed Otomatis 4WD High/Low Range',
                    'Kaca Balistik' => '72mm Multi-layer Polycarbonate Glass',
                    'Kecepatan Maks' => '110 km/jam',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'PERISAI RIV-TACTICAL',
                'slug' => 'perisai-riv-tactical',
                'category_id' => $karoseriCat?->id,
                'category' => 'RAPID INTERVENTION VEHICLE',
                'description' => 'Kendaraan karoseri respon cepat untuk operasi anti-teror dan pasukan khusus. Struktur bodi modular berbahan komposit baja ringan berdaya tahan tinggi, dirancang untuk penetrasi urban serta mobilitas tinggi.',
                'image_path' => 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
                'highlights' => [
                    ['icon' => 'Zap', 'label' => 'RAPID RESPONSE DESIGN'],
                    ['icon' => 'ShieldCheck', 'label' => 'BALISTIC CREW PROTECTION'],
                    ['icon' => 'Wifi', 'label' => 'TACTICAL COMM RACK'],
                    ['icon' => 'Sliders', 'label' => 'MODULAR ROOF RACK'],
                ],
                'specifications' => [
                    'Tipe Karoseri' => 'Tactical Rapid Attack Craft',
                    'Kapasitas Crew' => '5 Pasukan Taktis',
                    'Proteksi Cab' => 'B4+ Armored Steel Capsule',
                    'Ground Clearance' => '320 mm',
                    'Perlengkapan Spesial' => 'Winch 12,000 lbs, Roof Ladder Mount',
                    'Tangki BBM' => '140 L Dual Fuel Tank',
                ],
                'is_active' => true,
            ],
            [
                'name' => 'PERISAI MOBILE COMMAND CENTER',
                'slug' => 'perisai-mobile-command-center',
                'category_id' => $specialCat?->id,
                'category' => 'SPECIAL PURPOSE COMMAND VEHICLE',
                'description' => 'Karoseri bus/truk komunikasi terintegrasi yang didesain sebagai pusat kendali lapangan untuk komandan operasi. Dilengkapi workstation multi-monitor, genset kedap suara, antena satelit pneumatik, serta sistem HVAC khusus.',
                'image_path' => 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
                'highlights' => [
                    ['icon' => 'Monitor', 'label' => 'INTEGRATED COMMAND WALL'],
                    ['icon' => 'Wifi', 'label' => 'SATELLITE & MESH COMM'],
                    ['icon' => 'Power', 'label' => 'DUAL GENERATOR POWER'],
                    ['icon' => 'Shield', 'label' => 'EXPANDABLE CABIN BOX'],
                ],
                'specifications' => [
                    'Panjang Karoseri' => '8.5 Meter Heavy Truck Chassis',
                    'Ruang Operasi' => '6 Operator Workstation + Briefing Room',
                    'Sistem Daya' => 'Genset Silent 15 kVA + UPS Hybrid System',
                    'Komunikasi' => 'Satelit VSAT, Radio HF/VHF, LTE Encryption',
                    'AC / Klimate' => 'Dual Roof Heavy-Duty Air Conditioner',
                ],
                'is_active' => true,
            ],
        ];

        foreach ($products as $data) {
            Product::updateOrCreate(['slug' => $data['slug']], $data);
        }
    }
}
