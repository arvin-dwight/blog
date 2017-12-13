import { Routes, RouterModule } from '@angular/router';

import {
	LoginComponent,
	DashboardComponent,
	HomeComponent,
} from './pages/index';

import { 
	RouteGuardProvider,
	CanAccessLoginProvider 
} from './providers/index';

const appRoutes: Routes = [
	{ path: 'login', component: LoginComponent, canActivate: [CanAccessLoginProvider] },
	{ path: 'google-login', component: LoginComponent },
	{ path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuardProvider] },
	{ path: '**', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
