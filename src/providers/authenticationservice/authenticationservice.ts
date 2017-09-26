import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Loader } from "../../providers/loader/loader";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
/*
  Generated class for the AuthenticationserviceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthenticationserviceProvider {
  headers = new Headers({ 'Content-Type': 'application/json'});
  username :any;
  usertype :any

  private userloggedIn = new Subject<any>();

  public sendChangedValue(message: any) {
    this.userloggedIn.next(message);
  }

  public getChangedValue(): Observable<any> {
    return this.userloggedIn.asObservable();
  }

  constructor(public http: Http) {
    console.log('Hello AuthenticationserviceProvider Provider');
  }

  public convertResultToJson(result){
    return new Promise((resolve, reject) => {      
      let obj = {};
      let parts = result.split(","); // first separate string from comma and get one object
      if(parts.length >0){
        for (var i = 0; i < parts.length; i++) {
          let object = parts[i];
          let objField = object.split(":"); // separate object for get key and value 

          console.log(objField)
          let key = objField[0];
          let value = objField[1]
          obj[key] = value
        }
        resolve(obj)
      }else{
        resolve(false)
      }
      
    })
  }

  public saveLoggedIn(data){
    this.username = data.username;
    this.usertype = data.type;
    this.sendChangedValue(data.username)
  }
  //action:'login','username':username, 'password':pwd
  //http://192.168.0.183:8080/AquaFirm/JSONRequest?action=login&username=system&password=ok
  // AquaFirm/JSONRequest?action=login&username=system&password=ok
  //"proxyUrl": "http://ec2-18-220-159-231.us-east-2.compute.amazonaws.com:8080/AquaFirm"
  public signInAquafirm(username, pwd):any {
    return new Promise((resolve, reject) => {
      return this.http.
        //post('http://ec2-18-220-159-231.us-east-2.compute.amazonaws.com:8080/AquaFirm/JSONRequest?action=login&username='+username+'&password='+pwd+'', JSON.stringify({}), {headers:this.headers})
        post('/aFirm/JSONRequest?action=login&username='+username+'&password='+pwd+'', JSON.stringify({}), {headers:this.headers})
        .toPromise()
      		.then(response => {
            let res = JSON.stringify(response.json());            
	          if(response.json().result != '-1'){
              //this.convertResultToJson(response.json().result)
	            //resolve(response.json().result)
              this.convertResultToJson(response.json().result).then(
                (res) => {
                  if(res){
                    
                    this.saveLoggedIn(res)
                    resolve(res)
                  }
                },
                    (err) => console.error(err)
                );   
	          }else{
	            resolve(false)
	          }
        })
      .catch();
    })
  }

}
