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
			.finally(
				() => {
					setTimeout( () => {
						if(this.auth.isAuthenticated()) {
							this.router.navigateByUrl('dashboard');
						}
					});
				}
			)
            .subscribe(
            	(response) => {
            		if(response.message == "token_generated"){
            			let date = new Date();
            			this.storage.set('name',response.data.name, date.toString());
            		}
		    	}, 
		    	(err: any) => console.log(err)
		    );
    }

}