<?php

namespace App\Helpers;

use Config;
use GuzzleHttp;

class GoogleLogin
{
    protected $client;

	public function __construct(){

		$this->client = new GuzzleHttp\Client();

	}

    public function get_email($_request)
    {

        $params = [
            'code' => $_request['oauthData']['code'],
            'client_id' => $_request['authorizationData']['client_id'],
            'client_secret' => Config::get('google.client_secret'),
            'redirect_uri' => $_request['authorizationData']['redirect_uri'],
            'grant_type' => 'authorization_code',
        ];
    	
        $accessTokenResponse = $this->client->request('POST', 'https://accounts.google.com/o/oauth2/token', [
            'form_params' => $params
        ]);

        $accessToken = json_decode($accessTokenResponse->getBody(), true);

        if(isset($accessToken['error'])){
            return false;
        }

        $profileResponse = $this->client->request(
            'GET','https://www.googleapis.com/plus/v1/people/me/openIdConnect', 
            [
                'headers' => [
                    'Authorization' => 'Bearer ' . $accessToken['access_token']
                ]
            ]
        );

        $profile = json_decode($profileResponse->getBody(),true);

        return $profile;

    }

}
