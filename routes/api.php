<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$api = app('Dingo\Api\Routing\Router');
$api->version('v1', function ($api) {
	$api->post('auth/google', 'App\Http\Controllers\LoginController@google');
	$api->post('all-posts', 'App\Http\Controllers\PostController@allPost');

	$api->group(['middleware' => 'api.auth'], function ($api) {
        $api->post('my-posts', 'App\Http\Controllers\PostController@myPost');
        $api->post('post', 'App\Http\Controllers\PostController@post');
        $api->post('add-post', 'App\Http\Controllers\PostController@addPost');
        $api->post('delete-posts', 'App\Http\Controllers\PostController@deletePost');
    });
});
