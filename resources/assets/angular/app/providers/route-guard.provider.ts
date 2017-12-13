import { Injectable } from '@angular/core';
import {
	CanActivate, 
	Router
} from '@angular/router';
import { AuthService } from 'ng2-ui-auth';

@Injectable()
export class RouteGuardProvider implements CanActivate {

	constructor( private auth: AuthService, private router: Router ) {}

	canActivate(): boolean {
		if (this.auth.isAuthenticated()) { return true; }
		this.router.navigateByUrl('login');
		return false;
	}
}

@Injectable()
export class CanAccessLoginProvider implements CanActivate {

	constructor( private auth: AuthService, private router: Router ) {}

	canActivate(): boolean {
		if (!this.auth.isAuthenticated()) { return true; }
		this.router.navigateByUrl('');
		return false;
	}
}