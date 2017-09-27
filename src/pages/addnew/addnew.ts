import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { Headers, Http } from '@angular/http';
import { DataserviceProvider } from '../../providers/dataservice/dataservice';
import { Loader } from "../../providers/loader/loader";

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
  headers = new Headers({ 'Content-Type': 'application/json' });
  planFormBuilder: any; 
  pumpingFormBuilder: any;
  preparationFormBuilder:any; 
  stockingFormBuilder: any;
  action : string;
  myDate: any;

  constructor(public navCtrl: NavController, private loader: Loader, private _DataserviceProvider: DataserviceProvider, private http: Http, public navParams: NavParams, private formBuilder: FormBuilder, public viewCtrl: ViewController) {
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

    let startDate = new Date().toISOString();
    this.planFormBuilder.controls.startDate.setValue(startDate)

    //pumping form builder group
    this.pumpingFormBuilder = this.formBuilder.group({
      pondNo: ['', Validators.required],
      planStarted: ['', Validators.required],
      pumpingStarted: ['', Validators.required],
      pumpingStopped: ['', Validators.required],
      bleaching: ['', Validators.required],
      remark: ['', Validators.required]
    });   

    let planStarted = new Date().toISOString();
    this.pumpingFormBuilder.controls.planStarted.setValue(planStarted)
    let pumpingStartedDate = new Date().toISOString();
    this.pumpingFormBuilder.controls.pumpingStarted.setValue(pumpingStartedDate)
    let pumpingStoppedDate = new Date().toISOString();
    this.pumpingFormBuilder.controls.pumpingStopped.setValue(pumpingStoppedDate)

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

    let stockingDate = new Date().toISOString();
    this.stockingFormBuilder.controls.stockingDate.setValue(stockingDate)
  }

  saveStocking(){
  	let planNo = this.stockingFormBuilder.controls.pondNo.value;   
    let bleaching = this.stockingFormBuilder.controls.bleaching.value;   
    let stockingDate = this.stockingFormBuilder.controls.stockingDate.value;   
    let plType = this.stockingFormBuilder.controls.plType.value;   
    let stockingQty = this.stockingFormBuilder.controls.stockingQty.value;   
    let perBagRecv = this.stockingFormBuilder.controls.perBagRecv.value;  

    let totalPl = this.stockingFormBuilder.controls.totalPl.value;  
    let trayCount = this.stockingFormBuilder.controls.trayCount.value;  
    let happaSurvlOn = this.stockingFormBuilder.controls.happaSurvlOn.value;  
    let survTrayCount = this.stockingFormBuilder.controls.survTrayCount.value;  
    let happaSurvl = this.stockingFormBuilder.controls.happaSurvl.value;  
    let totalSurvl = this.stockingFormBuilder.controls.totalSurvl.value;  
    let density = this.stockingFormBuilder.controls.density.value;  

    const obj = {
      'planNo':planNo,
      'bleaching':bleaching,
      'stockingDate':stockingDate,
      'plType':plType,
      'stockingQty':stockingQty,
      'perBagRecv':perBagRecv,
      'totalPl':totalPl,
      'trayCount':trayCount,
      'happaSurvlOn':happaSurvlOn,
      'survTrayCount':survTrayCount,
      'happaSurvl':happaSurvl,
      'totalSurvl':totalSurvl,
      'density':density
    }

    console.log(obj)
  }

  savePreparation(){
  	alert('preparation')
  }

  savePumping(){
  	let planNo = this.pumpingFormBuilder.controls.pondNo.value;   
    let planStarted = this.pumpingFormBuilder.controls.planStarted.value;   
    let pumpingStarted = this.pumpingFormBuilder.controls.pumpingStarted.value;   
    let pumpingStopped = this.pumpingFormBuilder.controls.pumpingStopped.value;   
    let bleaching = this.pumpingFormBuilder.controls.bleaching.value;   
    let remark = this.pumpingFormBuilder.controls.remark.value;  

    const obj = {
      'planNo':planNo,
      'planStarted':planStarted,
      'pumpingStarted':pumpingStarted,
      'pumpingStopped':pumpingStopped,
      'bleaching':bleaching,
      'remark':remark
    }

    console.log(obj)
  }

  addItem(){

  }

  addStocking(){
  	
  }

  savePlan(){
    this.loader.show('Please Wait');
    
  	let planNo = this.planFormBuilder.controls.pondNo.value;   
    let startDate = this.planFormBuilder.controls.startDate.value;   
    let planId = this.planFormBuilder.controls.planId.value;   
    let serialNo = this.planFormBuilder.controls.serialNo.value;   
    let remark = this.planFormBuilder.controls.remark.value;  

    const obj = {
      'planNo':planNo,
      'startDate':startDate,
      'planId':planId,
      'serialNo':serialNo,
      'remark':remark
    }
    console.log(obj)

    this._DataserviceProvider.addNewPlan(obj).then(
        (res) => {
           if(res){
             this.loader.hide(); 
           }else{
             this.loader.hide(); 
           }
      },
          (err) => console.error(err)
      );   
    
  }

  cancel(){
  	this.viewCtrl.dismiss();
  }

}
