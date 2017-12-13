import { 
	Component,
	DoCheck } from '@angular/core';

import { 
	AuthService,
	StorageService } from 'ng2-ui-auth';

import { Router } from '@angular/router';

@Component({
    selector: 'blog-app',
    template: require('./app.component.html'),
    styles: [`${require('./app.component.scss')}`]
})

export class AppComponent implements DoCheck { 

	isAuth: boolean = false;
	name: string;

	constructor( 
		private auth: AuthService, 
		private storage: StorageService,
		private router: Router ) {}

	ngDoCheck(): void {
		if(this.auth.isAuthenticated()) {
			this.isAuth = true;
			this.name = this.storage.get('name');
		}else{
			this.isAuth = false;
			this.name = "";
		}
	}

	logout() {
		if(this.auth.isAuthenticated()) {
			this.auth.logout();
			this.router.navigateByUrl('/');
			this.storage.remove('name');
			this.storage.remove('blog_token');
		}
	}
}