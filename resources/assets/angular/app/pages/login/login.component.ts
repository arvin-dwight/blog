import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, StorageService } from 'ng2-ui-auth';

@Component({
    template: require('./login.component.html'),
    styles: [`${require('./login.component.scss')}`]
})

export class LoginComponent {

	constructor( 
		private auth: AuthService,
		private router: Router,
		private storage: StorageService ) {}

	loginWithGoogle(): void {
        this.auth.authenticate('google')
			.map(
				(response) => response.json()
			)
			.finally(
				() => console.log('success')
			)
            .subscribe(
            	(response) => {
            		console.log(response);
		    	}, 
		    	(err: any) => console.log(err)
		    );
    }

}