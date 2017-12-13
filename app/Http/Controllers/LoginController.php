<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller {
    
    public function google(Request $request) {

    	$_request = $request->all();
    	$google = new \App\Helpers\GoogleLogin();

    	if($profile = $google->get_email($_request)) {
    		echo trim($profile['email']);
    	}
    }

}