import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Invoices page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-invoices',
  templateUrl: 'invoices.html'
})
export class Invoices {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Invoices Page');
  }

}
