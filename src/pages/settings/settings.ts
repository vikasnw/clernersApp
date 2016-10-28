import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class Settings {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('Hello Settings Page');
  }

  saveSetting(){
    let toast = this.toastCtrl.create({
      message: 'Setting was successfully updated',
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }
}
