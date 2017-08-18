import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Loader } from "../../providers/loader/loader";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
/*
  Generated class for the AuthenticationserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthenticationserviceProvider {
  headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(public http: Http) {
    console.log('Hello AuthenticationserviceProvider Provider');
  }

  public convertResultToJson(result){
    alert()
  }
  //action:'login','username':username, 'password':pwd
  //http://192.168.0.183:8080/AquaFirm/JSONRequest?action=login&username=system&password=ok
  // AquaFirm/JSONRequest?action=login&username=system&password=ok
  //"proxyUrl": "http://ec2-18-220-159-231.us-east-2.compute.amazonaws.com:8080/AquaFirm"
  public signInAquafirm(username, pwd):any {
    return new Promise((resolve, reject) => {
      return this.http.
        post('AquaFirm/JSONRequest?action=login&username='+username+'&password='+pwd+'', JSON.stringify({}), {headers:this.headers})
        .toPromise()
      		.then(response => {
            let res = JSON.stringify(response.json());            
	          if(response.json().result != '-1'){
              //this.convertResultToJson(response.json().result)
	            resolve(response.json().result)
	          }else{
	            resolve(false)
	          }
        })
      .catch();
    })
  }

}
