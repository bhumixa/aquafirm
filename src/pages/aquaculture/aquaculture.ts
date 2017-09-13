import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SheetDetailsPage } from '../../pages/sheet-details/sheet-details';
/**
 * Generated class for the AquaculturePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-aquaculture',
  templateUrl: 'aquaculture.html',
})
export class AquaculturePage {
	cardList : any;
  	constructor(public navCtrl: NavController, public navParams: NavParams) {
  		this.cardList = [
  			//'Plan', 'Pumping', 'Preparation', 'Stocking'
  			{'name':'Plan', 'icon':'clipboard'},
  			{'name':'Pumping', 'icon':'water'},
  			{'name':'Preparation', 'icon':'list-box'},
  			{'name':'Stocking', 'icon':'analytics'}
  		]
  	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad AquaculturePage');
  	}

  	openSheet(sheetName){
  		this.navCtrl.push(SheetDetailsPage, {
	      action: sheetName
	    });
  	}

}
