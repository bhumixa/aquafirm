import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { BaseComponent } from '../../components/base/base';
import { AuthenticationserviceProvider } from '../../providers/authenticationservice/authenticationservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BaseComponent{
	username : any;
	usertype :any;

  	constructor(public navCtrl: NavController, public navParams: NavParams,_AuthenticationserviceProvider: AuthenticationserviceProvider) {
  		super(_AuthenticationserviceProvider);
  		this.username =  _AuthenticationserviceProvider.username;
  		this.usertype = _AuthenticationserviceProvider.usertype;
  	}

}
