import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController,ToastController } from 'ionic-angular';
import { ChangePassword } from '../change-password/change-password';
import { ProfileData } from '../../providers/profile-data';
/*
  Generated class for the MyAccount page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html'
})
export class MyAccount {

  public accountForm;
  firsNameChanged: boolean = false;
  lastNameChanged: boolean = false;
  companyChanged: boolean = false;
  phoneChanged: boolean = false;
  genderChanged: boolean = false;
  dobChanged: boolean = false;
  submitAttempt: boolean = false;
  loading: any;
  userProfile: any;
  userInfoKey:any;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController, public formBuilder: FormBuilder,public profileData: ProfileData) {

    this.accountForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      company: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      dob: ['', Validators.compose([Validators.required])],
    });

    this.profileData.getUserProfile().on('value', (data) => {
      for( var key in data.val() ) {
        this.userInfoKey = key;
      }
      this.userProfile = data.val()[this.userInfoKey];
      this.accountForm.patchValue({firstName: this.userProfile.first_name});
      this.accountForm.patchValue({lastName: this.userProfile.last_name});
      this.accountForm.patchValue({company: this.userProfile.company});
      this.accountForm.patchValue({phone: this.userProfile.phone});
      this.accountForm.patchValue({gender: this.userProfile.gender});
      this.accountForm.patchValue({dob: this.userProfile.dob});
    });
  }

  /**
   * Receives an input field and sets the corresponding fieldChanged property to 'true' to help with the styles.
   */
  elementChanged(input){
    let field = input.inputControl.name;
    this[field + "Changed"] = true;
  }

  /**
   * save user info
   */
  saveAccount(){
    this.submitAttempt = true;
    if (!this.accountForm.valid){
      console.log(this.accountForm.value);
    }else{
      this.profileData.updateProfile(this.userInfoKey,this.accountForm.value);
      let toast = this.toastCtrl.create({
        message: 'Profile was successfully updated',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
    }
  }
  /**
   * redirect to reset password
   */
  resetPassword(){
    this.navCtrl.push(ChangePassword);
  }
}
