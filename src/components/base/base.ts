import { AuthenticationserviceProvider } from '../../providers/authenticationservice/authenticationservice';
import { Component} from '@angular/core';


@Component({
  template: ''
})
export abstract class BaseComponent {
  loggedInuser: string;
  userType: string 
 

  constructor(public _AuthenticationserviceProvider: AuthenticationserviceProvider) {
  	
  }

  onLoad(){};

}