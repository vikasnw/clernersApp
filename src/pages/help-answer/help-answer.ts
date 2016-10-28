import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Help } from '../help/help';
/*
  Generated class for the HelpAnswer page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-help-answer',
  templateUrl: 'help-answer.html'
})
export class HelpAnswer {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello HelpAnswer Page');
  }
  /**
   * back to Help page
   */
  goBack(){
    this.navCtrl.setRoot(Help);
  }
}
