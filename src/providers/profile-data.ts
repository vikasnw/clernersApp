import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class ProfileData {
  public userProfile: any;
  public currentUser: any;
  public fireAuth: any;

  constructor() {
    this.fireAuth = firebase.auth();
    this.currentUser = firebase.auth().currentUser;
    this.userProfile = firebase.database().ref('/user_info');

  }

  /**
   * get user profile info
   * @returns {firebase.database.Query}
     */
  getUserProfile(): any {
    
    return this.userProfile.orderByChild("user_id").equalTo(this.currentUser.uid);
  }

  /**
   * update user profile info
   * @param key
   * @param FormValue
     */
  updateProfile(key:string,FormValue:any): any {
    this.userProfile.child(key).update({
      first_name: FormValue.firstName,
      last_name: FormValue.lastName,
      company: FormValue.company,
      dob: FormValue.dob,
      gender: FormValue.gender,
      phone: FormValue.phone
    });
  }
}
