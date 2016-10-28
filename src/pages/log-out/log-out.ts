import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the LogOut page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-log-out',
  templateUrl: 'log-out.html'
})
export class LogOut {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LogOut Page');
  }

}
