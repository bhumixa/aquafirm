import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
/**
 * Generated class for the AddnewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-addnew',
  templateUrl: 'addnew.html',
})
export class AddnewPage {
  planFormBuilder: any; 
  pumpingFormBuilder: any;
  preparationFormBuilder:any; 
  stockingFormBuilder: any;
  action : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public viewCtrl: ViewController) {
  	this.action =  this.navParams.get('action'); 
  }

  ionViewWillLoad() {
  	//plan form builder group
    this.planFormBuilder = this.formBuilder.group({
      pondNo: ['', Validators.required],
      startDate: ['', Validators.required],
      planId: ['', Validators.required],
      serialNo: ['', Validators.required],
      remark: ['', Validators.required]
    });    

    //pumping form builder group
    this.pumpingFormBuilder = this.formBuilder.group({
      pondNo: ['', Validators.required],
      planStarted: ['', Validators.required],
      pumpingStarted: ['', Validators.required],
      pumpingStopped: ['', Validators.required],
      bleaching: ['', Validators.required],
      remark: ['', Validators.required]
    });    

    //preparation form builder group
    this.preparationFormBuilder = this.formBuilder.group({
      pondNo: ['', Validators.required],
      bleaching: ['', Validators.required]
    });  

    //stocking form builder group
    this.stockingFormBuilder = this.formBuilder.group({
      pondNo: ['', Validators.required],
      bleaching: ['', Validators.required],
      stockingDate: ['', Validators.required],
      plType: ['', Validators.required],
      stockingQty: ['', Validators.required],
      perBagRecv: ['', Validators.required],
      totalPl: ['', Validators.required],
      trayCount: ['', Validators.required],
      happaSurvlOn: ['', Validators.required],
      survTrayCount: ['', Validators.required],
      happaSurvl: ['', Validators.required],
      totalSurvl: ['', Validators.required],
      density: ['', Validators.required],
    }); 
  }

  saveStocking(){
  	alert('stocking')
  }

  savePreparation(){
  	alert('preparation')
  }

  savePumping(){
  	alert('pumping')
  }

  addItem(){

  }

  addStocking(){
  	
  }

  savePlan(){
  	alert('Plan')
  }

  cancel(){
  	this.viewCtrl.dismiss();
  }

}
