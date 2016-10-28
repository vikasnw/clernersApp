import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class QuoteData {
  public quotationsRef: any;
  public currentUser: any;

  constructor() {
    this.currentUser = firebase.auth().currentUser;
    this.quotationsRef = firebase.database().ref('/quote');

  }

  getOwnerCompanyId(){


    return 1;
  }
  /**
   * get user quotations
   * @returns {firebase.database.Query}
     */
  getUserQuotations(): any {

    return this.quotationsRef.orderByChild("owner_company_id").equalTo(this.getOwnerCompanyId());
  }
}
