import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactUs } from '../contact-us/contact-us';
import { HelpAnswer } from '../help-answer/help-answer';

/*
  Generated class for the Help page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-help',
  templateUrl: 'help.html'
})
export class Help {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Help Page');
  }

  /**
   * redirect to contact us page
   */
  contactUs(){
    this.navCtrl.setRoot(ContactUs);
  }

  /**
   * redirect to help answeer details page
   */
  answerDetails(){
    this.navCtrl.setRoot(HelpAnswer);
  }
}
