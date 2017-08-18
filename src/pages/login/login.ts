import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomePage } from '../../pages/home/home';
import { AuthenticationserviceProvider } from '../../providers/authenticationservice/authenticationservice';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	loginForm: FormGroup;
	error:any;
	backgrounds = [
	    "assets/images/background/1.jpg",
	    "assets/images/background/2.jpg",
	    "assets/images/background/3.jpg",
	    "assets/images/background/4.jpg",
	    "assets/images/background/6.jpg"
	  ]
  	constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private _AuthenticationserviceProvider: AuthenticationserviceProvider) {
  		
  	}

  	ionViewWillLoad() {
	    this.loginForm = this.formBuilder.group({
	      username: ['', Validators.required],
	      password: ['', Validators.required]
	    });
	    //this.userFormBuilder.controls.country.value = '91'
	}

	login(){ 
		this.error = '';
		const username = this.loginForm.controls.username.value; 
		const password = this.loginForm.controls.password.value; 
		this._AuthenticationserviceProvider.signInAquafirm(username, password).then(
      	(res) => {
       		if(res){
       			this.navCtrl.push(HomePage)
       			//this.navCtrl.push(HomePage,{ 'username':res.username , 'usertype':res.type});  
       		}else{
       			this.error = 'Please Check Username and Password.'
       		}
    	},
      		(err) => console.error(err)
    	); 	
	}
}
