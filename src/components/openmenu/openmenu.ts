import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
/**
 * Generated class for the OpenmenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'openmenu',
  templateUrl: 'openmenu.html'
})

export class OpenmenuComponent {

  text: string;

  constructor(public menuCtrl: MenuController) {
    console.log('Hello OpenmenuComponent Component');
    this.text = 'Hello World';
  }

  openMenu(){
  	this.menuCtrl.open();
  }

}
