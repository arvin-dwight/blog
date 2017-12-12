import { Injectable } from '@angular/core';
import {
	CanActivate, 
	Router
} from '@angular/router';
//import { AuthService } from 'ng2-ui-auth';

@Injectable()
export class RouteGuardProvider implements CanActivate {

	constructor( ) {}

	canActivate(): boolean {
		return false;
	}
}

@Injectable()
export class CanAccessLoginProvider implements CanActivate {

	constructor(  ) {}

	canActivate(): boolean {
		return false;
	}
}