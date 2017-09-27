import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataserviceProvider {
	headers = new Headers({ 'Content-Type': 'application/json'});

  	constructor(public http: Http) {
    	console.log('Hello DataserviceProvider Provider');
  	}

  	public addNewPlan(data):any {
  		console.log(data)
  		console.log('--->>>>')
  		return new Promise((resolve, reject) => {
  			resolve(true)
	      /*return this.http.
	        post('http://login2.atisundar.com/getSingleOrders', JSON.stringify(data), {headers: this.headers})
	        .toPromise()
	        .then(response => {   
	            resolve(response.json())                   
	        })
	        .catch();*/
	    })
  	}
}
