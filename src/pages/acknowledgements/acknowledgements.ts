import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { About } from '../about/about';

/*
  Generated class for the Acknowledgements page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-acknowledgements',
  templateUrl: 'acknowledgements.html'
})
export class Acknowledgements {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Acknowledgements Page');
  }

  /**
   * redirect to about page
   */
  goBack(){
    this.navCtrl.setRoot(About);
  }
}
