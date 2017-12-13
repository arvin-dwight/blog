export const GOOGLE_CLIENT_ID = '701216490011-0d3lulvk0h93e18ii5ntd61nkro90ss1.apps.googleusercontent.com';
export const AUTH_CONFIG = {
    providers: {
        google: {
            clientId: GOOGLE_CLIENT_ID,
            url: 'api/auth/google',
            redirectUri: window.location.origin + '/google-login'
        }
    }
}