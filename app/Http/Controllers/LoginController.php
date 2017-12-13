<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;

class LoginController extends Controller {
    
    public function google(Request $request) {

    	$_request = $request->all();
    	$google = new \App\Helpers\GoogleLogin();

    	if($profile = $google->get_email($_request)) {

			if($user = User::where('email',trim($profile['email']))->first()) {

				$token = JWTAuth::fromUser($user);
				
				return new JsonResponse([
		            'message' => 'token_generated',
		            'data' => [
		                'token' => $token,
		                'name' => $user->name
		            ]
		        ]);
			}
    	}

        return new JsonResponse([
            'message' => 'invalid_credentials'
        ], Response::HTTP_UNAUTHORIZED);
    }

}