import { Injectable } from '@angular/core';
import { AuthService } from 'ng2-ui-auth';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiProvider {

	constructor(
		public _http: Http,
		private auth: AuthService ) {

	}

	get( url: string ) {
		let headers = new Headers({ 'Authorization': 'Bearer ' + this.auth.getToken() });
        let options = new RequestOptions({ headers: headers });

		return this._http.get(url, options);
	}

	post( url: string, data ) {
		let headers = new Headers({ 'Authorization': 'Bearer ' + this.auth.getToken() });
        let options = new RequestOptions({ headers: headers });

		return this._http.post(url, data, options);
	}

}