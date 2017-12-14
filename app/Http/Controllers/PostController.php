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
            'message' => 'all_posts',
            'data' => Post::where('is_published',1)->orderBy('updated_at', 'desc')->paginate(6)
        ]);
	}

	public function post(Request $request) {

		if($request->has('id')){
			$id = $request->input('id');
			return new JsonResponse([
	            'message' => 'posts',
	            'data' => JWTAuth::parseToken()->authenticate()->posts()->where('id', $id)->first()
	        ]);
		}

		return new JsonResponse([
            'message' => 'error'
        ]);
	}

	public function addPost(Request $request) {

		if($request->has('id')){
			$id = $request->input('id');
			if( !$post = JWTAuth::parseToken()->authenticate()->posts()->where('id', $id)->first() ){
				$user = JWTAuth::parseToken()->authenticate();
				$post = new Post;
				$post->user_id = $user->id;
			}

			$post->title = $request->input('title');
			$post->content = $request->input('content');
			$post->is_published = $request->input('status');

			if($post->save()){
				return new JsonResponse(['message' => 'success']);
			}
		}

		return new JsonResponse(['message' => 'error']);
	}

	public function deletePost(Request $request) {

		$id = $request->input('id');

		if($request->has('id')){
			$id = $request->input('id');
			JWTAuth::parseToken()->authenticate()->posts()->where('id', $id)->delete();
		}
	}
}
