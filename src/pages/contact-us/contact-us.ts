import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { Help } from '../help/help';
/*
  Generated class for the ContactUs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html'
})
export class ContactUs {

  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('Hello ContactUs Page');
  }

  /**
   * back to Help page
   */
  goBack(){
    this.navCtrl.setRoot(Help);
  }

  /**
   * send mail to app admin
   */
  sendMail(){
    let toast = this.toastCtrl.create({
      message: 'Mail was successfully sent',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      this.navCtrl.setRoot(Help);
    });
    toast.present();
  }
}
