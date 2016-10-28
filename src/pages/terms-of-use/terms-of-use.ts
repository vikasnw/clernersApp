import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { About } from '../about/about';

/*
  Generated class for the TermsOfUse page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-terms-of-use',
  templateUrl: 'terms-of-use.html'
})
export class TermsOfUse {

  constructor(public navCtrl: NavController) {}

  /**
   * back to about page
   */
  goBack(){
    this.navCtrl.setRoot(About);
  }
}
