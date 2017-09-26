import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationserviceProvider } from '../providers/authenticationservice/authenticationservice';

import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { AquaculturePage } from '../pages/aquaculture/aquaculture';
import { AddnewPage } from '../pages/addnew/addnew';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  username:any;
  rootPage: any =  LoginPage;
  showLevel1 = null;
  showLevel2 = null;
  pages:  any ; //Array<{title: string, component: any}>;
  component : any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public _AuthenticationserviceProvider: AuthenticationserviceProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Account', component: AccountPage }
    ];

    this.pages = [
    {
      "category":"Home",
    },
    {
      "category":"Account",
      "subs": [
        {
          "subcategory":"Purchase"
        },
        {
          "subcategory":"Sale"
        },
        {
          "subcategory":"Opening"
        },
        {
          "subcategory":"Physical Stock"
        }
      ]
    },
    {
      "category":"Production",
      "subs": [
        {
          "subcategory":"Aquaculture"          
        }
      ]
    }

  ]

    this._AuthenticationserviceProvider.getChangedValue().subscribe(uname => { 
      this.username = uname;
    }); 
  }

  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  };

  toggleLevel2(idx) {
    if (this.isLevel2Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
    } else {
      this.showLevel1 = idx;
      this.showLevel2 = idx;
    }
  };

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };

  isLevel2Shown(idx) {
    return this.showLevel2 === idx;
  };

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    
    if(page == 'Home'){
      this.component = HomePage
    }else if(page == 'Account'){
      this.component = AccountPage
    }else if(page == 'Aquaculture'){
      this.component = AquaculturePage    
    }else{
      this.component = HomePage
    }
    this.nav.setRoot(this.component);
  }
}
