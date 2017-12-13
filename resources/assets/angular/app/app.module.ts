import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

import { routing, appRoutingProviders } from './app.routing';

import { Ng2UiAuthModule } from 'ng2-ui-auth';

import { 
  AUTH_CONFIG,
} from './config/index';

import { 
	RouteGuardProvider,
	CanAccessLoginProvider,
	ApiProvider
} from './providers/index';

import {
	LoginComponent,
	DashboardComponent,
	HomeComponent,
	PostComponent,
} from './pages/index';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        BrowserAnimationsModule,
        MaterialModule,
        routing,
        Ng2UiAuthModule.forRoot(AUTH_CONFIG),
    ],
    declarations: [
        AppComponent,

        LoginComponent,
		DashboardComponent,
		HomeComponent,
		PostComponent
    ],
    entryComponents: [
    	PostComponent
    ],
    providers: [
    	appRoutingProviders,
    	RouteGuardProvider,
		CanAccessLoginProvider,
		ApiProvider
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }