<?php

namespace Tests\Feature;

use App\Models\Product;
use App\Models\User;
use App\Repositories\Contracts\ProductRepositoryInterface;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ProductCrudTest extends TestCase
{
    use RefreshDatabase;

    protected ProductRepositoryInterface $repository;

    protected function setUp(): void
    {
        parent::setUp();
        $this->repository = app(ProductRepositoryInterface::class);
    }

    public function test_public_can_view_products_catalog(): void
    {
        Product::create([
            'name' => 'ELF-3IH',
            'slug' => 'elf-3ih',
            'category' => 'BINOCULAR NIGHT VISION GOGGLES',
            'description' => 'Night vision goggles',
            'is_active' => true,
        ]);

        $response = $this->get('/');

        $response->assertStatus(200);
    }

    public function test_admin_login_direct_url_access(): void
    {
        $user = User::factory()->create([
            'email' => 'admin@perisaicorp.com',
            'password' => bcrypt('password'),
        ]);

        $response = $this->get('/admin/login');
        $response->assertStatus(200);

        $loginResponse = $this->post('/admin/login', [
            'email' => 'admin@perisaicorp.com',
            'password' => 'password',
        ]);

        $loginResponse->assertRedirect(route('admin.products.index'));
        $this->assertAuthenticatedAs($user);
    }

    public function test_repository_can_create_product_with_json_specs_and_highlights(): void
    {
        Storage::fake('public');

        $file = UploadedFile::fake()->create('elf-c.jpg', 100, 'image/jpeg');

        $data = [
            'name' => 'ELF-C',
            'category' => 'CLIP-ON THERMAL IMAGER',
            'description' => 'Test description',
            'image' => $file,
            'highlights' => [
                ['icon' => 'Feather', 'label' => 'LIGHTEST IN THE SERIES'],
            ],
            'specifications' => [
                'Resolution, Pixels' => '640x512',
                'Pixel Pitch, µm' => '12',
            ],
            'is_active' => true,
        ];

        $product = $this->repository->create($data);

        $this->assertInstanceOf(Product::class, $product);
        $this->assertEquals('ELF-C', $product->name);
        $this->assertEquals('elf-c', $product->slug);
        $this->assertEquals('640x512', $product->specifications['Resolution, Pixels']);
        $this->assertEquals('LIGHTEST IN THE SERIES', $product->highlights[0]['label']);
        $this->assertNotNull($product->image_path);
        Storage::disk('public')->assertExists($product->image_path);
    }

    public function test_admin_can_perform_product_crud(): void
    {
        $user = User::factory()->create();

        // 1. Create
        $response = $this->actingAs($user)->post(route('admin.products.store'), [
            'name' => 'ELF-ML',
            'category' => 'MULTI-FUNCTIONAL THERMAL MONOCULAR',
            'description' => 'Description test',
            'highlights' => [
                ['icon' => 'Feather', 'label' => 'LIGHTEST IN THE SERIES'],
            ],
            'specifications' => [
                'Magnification, x' => '1',
            ],
            'is_active' => true,
        ]);

        $response->assertRedirect(route('admin.products.index'));
        $this->assertDatabaseHas('products', ['name' => 'ELF-ML']);

        $product = Product::where('name', 'ELF-ML')->first();

        // 2. Update
        $updateResponse = $this->actingAs($user)->put(route('admin.products.update', $product->id), [
            'name' => 'ELF-ML Updated',
            'category' => 'UPDATED CATEGORY',
            'description' => 'Updated desc',
            'highlights' => [
                ['icon' => 'Shield', 'label' => 'HIGH STRENGTH'],
            ],
            'specifications' => [
                'Magnification, x' => '2',
            ],
            'is_active' => true,
        ]);

        $updateResponse->assertRedirect(route('admin.products.index'));
        $this->assertDatabaseHas('products', ['name' => 'ELF-ML Updated']);

        // 3. Delete
        $deleteResponse = $this->actingAs($user)->delete(route('admin.products.destroy', $product->id));

        $deleteResponse->assertRedirect(route('admin.products.index'));
        $this->assertDatabaseMissing('products', ['id' => $product->id]);
    }
}
