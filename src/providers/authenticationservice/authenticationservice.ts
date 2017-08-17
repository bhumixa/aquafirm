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
  headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(public http: Http) {
    console.log('Hello AuthenticationserviceProvider Provider');
  }

  public signInAquafirm(username, pwd):any {
    return new Promise((resolve, reject) => {
    	resolve(false)
      return this.http.
        post('http://localhost:8080/AquaFirm/JSONRequest', JSON.stringify({action:'login','username':username, 'password':pwd}), {headers:this.headers})
        .toPromise()
      		.then(response => {
	          if(response.json().token){
	            resolve(response.json().token)
	          }else{
	            resolve(false)
	          }
        })
      .catch();
    })
  }

}
