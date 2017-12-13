<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		factory(App\Models\User::class, 10)
            ->create()
            ->each(function(App\Models\User $user) {
                factory(App\Models\Post::class, 1000)
                    ->create([
                        'user_id' => $user->id,
                    ]);
            });
    }
}
