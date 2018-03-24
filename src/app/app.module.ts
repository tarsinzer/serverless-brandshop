import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { appRouting } from './app.routes';
import { HomeModule } from './home/home.module';
import { ShopModule } from './shop/shop.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthComponent } from './components/auth/auth.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
	declarations: [AppComponent, HeaderComponent, AuthComponent],
	imports: [
		BrowserModule.withServerTransition({ appId: 'app-root' }),
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		RouterModule,
		FormsModule,
		SharedModule,
		appRouting,
		HomeModule,
		ShopModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {
}
