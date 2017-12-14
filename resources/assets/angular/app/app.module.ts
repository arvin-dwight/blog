import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';

import { routing, appRoutingProviders } from './app.routing';

import { Ng2UiAuthModule } from 'ng2-ui-auth';
import { MarkdownModule } from 'angular2-markdown';

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
	AddComponent
} from './pages/index';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        routing,
        Ng2UiAuthModule.forRoot(AUTH_CONFIG),
        MarkdownModule.forRoot()
    ],
    declarations: [
        AppComponent,

        LoginComponent,
		DashboardComponent,
		HomeComponent,
		PostComponent,
		AddComponent
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