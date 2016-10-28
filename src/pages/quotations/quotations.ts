import { Component } from '@angular/core';
import { NavController,AlertController,ToastController,LoadingController } from 'ionic-angular';
import { QuoteData } from '../../providers/quote-data';
/*
  Generated class for the Quotations page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quotations',
  templateUrl: 'quotations.html'
})
export class Quotations {

  public quotations: any;
  status :Array<{id: number, name: string,color:string}>;
  loading: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public toastCtrl: ToastController, public quoteData: QuoteData,public loadingCtrl: LoadingController) {

    this.getQuoteList();
    this.status = [
      {id:1,name:'quoted',color:"secondary"},
      {id:1,name:'failed',color:"danger"},
      {id:1,name:'approved',color:"primary"},
    ];
  }

  /**
   * get quotations
   */
  getQuoteList(){
    this.loading = this.loadingCtrl.create({
      dismissOnPageChange: true,
      content: "Please wait..."
    });
    this.loading.present();
    this.quoteData.getUserQuotations().on('value', (data) => {
      let quoteList = [];
      data.forEach( quo => {
        quoteList.push({
          keyId: quo.key,
          id: quo.val().id,
          companyName: quo.val().company,
          status: quo.val().status
        });
      });
      this.quotations = quoteList;
      this.loading.dismiss();
    });
  }
  /**
   * delete particular quote
   * @param id
   */
  deleteQuot(e){
    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'Do you want to delete quote "'+e.id+'"?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            this.quoteData.quotationsRef.child(e.keyId).remove();
            this.getQuoteList();
          }
        }
      ]
    });
    confirm.present();
  }

  /**
   * update quotation status
   * @param e
   * @param status
     */
  updateStatus(e,status){
    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'Do you want to update quote "'+e.Id+'" to "'+status+'"?',
      buttons: [
        {
          text: 'No',
          handler: () => {
          }
        },
        {
          text: 'Confirm',
          handler: () => {
            /*update status*/
            this.quoteData.quotationsRef.child(e.keyId).update({
              status: status
            });
            let toast = this.toastCtrl.create({
              message: 'Quote Status was successfully updated',
              duration: 1000,
              position: 'bottom'
            });
            toast.present();

            this.getQuoteList();
          }
        }
      ]
    });
    confirm.present();
  }
}
