<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Http\JsonResponse;
use Illuminate\Pagination\Paginator;

use App\Models\User;
use App\Models\Post;

class PostController extends Controller {
    
	public function myPost(Request $request) {
		$currentPage = $request->has('page') ? $request->input('page') : 1;
		Paginator::currentPageResolver(function() use ($currentPage) {
			return $currentPage;
		});
		return new JsonResponse([
            'message' => 'my_posts',
            'data' => JWTAuth::parseToken()->authenticate()->posts()->orderBy('updated_at', 'desc')->paginate(20)
        ]);
	}

	public function allPost(Request $request) {
		$currentPage = $request->has('page') ? $request->input('page') : 1;
		Paginator::currentPageResolver(function() use ($currentPage) {
			return $currentPage;
		});
		return new JsonResponse([
            'message' => 'my_posts',
            'data' => Post::where('is_published',1)->orderBy('updated_at', 'desc')->paginate(6)
        ]);
	}
}
