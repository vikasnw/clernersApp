import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TermsOfUse} from '../terms-of-use/terms-of-use';
import {Acknowledgements} from '../acknowledgements/acknowledgements';

/*
  Generated class for the About page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class About {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello About Page');
  }

  /**
   * redirect to terms of use page
   */
  goTermPage(){
    this.navCtrl.setRoot(TermsOfUse);
  }

  /**
   * redirect to Acknowledgements page
   */
  goAckPage(){
    this.navCtrl.setRoot(Acknowledgements);
  }

  /**
   * redirect to website unsubscription page
   */
  goWebsiteUrl(){
    console.log('move to website page');
  }
}
