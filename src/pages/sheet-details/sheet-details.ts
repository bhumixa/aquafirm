import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddnewPage } from '../../pages/addnew/addnew';

/**
 * Generated class for the SheetDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sheet-details',
  templateUrl: 'sheet-details.html',
})
export class SheetDetailsPage {
  action : string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.action = this.navParams.get('action'); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SheetDetailsPage');
  }

  onLoad(){
    
  	
  }

  addNew(){
    this.navCtrl.push(AddnewPage, {
        action: this.action
    });
  }

  ngOnInit(){
    
  }

}
