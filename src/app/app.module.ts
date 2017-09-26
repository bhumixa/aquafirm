import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { AquaculturePage } from '../pages/aquaculture/aquaculture';
import { AddnewPage } from '../pages/addnew/addnew';
import { SheetDetailsPage } from '../pages/sheet-details/sheet-details';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationserviceProvider } from '../providers/authenticationservice/authenticationservice';
import { Loader } from '../providers/loader/loader';
import { OpenmenuComponent } from '../components/openmenu/openmenu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AccountPage,
    AddnewPage,
    AquaculturePage,
    SheetDetailsPage,
    OpenmenuComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AccountPage,
    AddnewPage,
    AquaculturePage,
    SheetDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationserviceProvider,
    Loader
  ]
})
export class AppModule {}
