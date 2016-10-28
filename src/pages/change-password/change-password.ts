import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController,ToastController, LoadingController, AlertController } from 'ionic-angular';
import { Login } from '../login/login';
import firebase from 'firebase';
import { AuthData } from '../../providers/auth-data';



/*
  Generated class for the ChangePassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html'
})
export class ChangePassword {

  public changePasswordForm;
  oldPasswordChanged: boolean = false;
  newPasswordChanged: boolean = false;
  confirmNewPasswordChanged: boolean = false;
  isNotMatch: boolean = false;
  submitAttempt: boolean = false;
  loading: any;
  public fireAuth: any;

  constructor(public navCtrl: NavController,public toastCtrl: ToastController,public alertCtrl: AlertController,public formBuilder: FormBuilder,public authData: AuthData,public loadingCtrl: LoadingController) {
    this.fireAuth = firebase.auth();
    this.changePasswordForm = formBuilder.group({
      oldPassword: ['', Validators.compose([Validators.required])],
      newPassword: ['', Validators.compose([Validators.minLength(6), Validators.required])],
      confirmNewPassword: ['', Validators.compose([Validators.required])]
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
   * update user password and redirect to my account page
   */
  updatePassword(){
    this.submitAttempt = true;
    this.isNotMatch = false;
    if (!this.changePasswordForm.valid){
    }else {
      if(this.changePasswordForm.value.newPassword == this.changePasswordForm.value.confirmNewPassword){
        this.loading = this.loadingCtrl.create({
          dismissOnPageChange: true,
          content: "Please wait..."
        });
        this.loading.present();
        this.fireAuth.signInWithEmailAndPassword(this.fireAuth.currentUser.email,this.changePasswordForm.value.oldPassword).then( authData => {
          this.fireAuth.currentUser.updatePassword(this.changePasswordForm.value.newPassword).then(() => {
            this.loading.dismiss();
            let toast = this.toastCtrl.create({
              message: 'Password was successfully updated',
              duration: 3000,
              position: 'bottom'
            });
            toast.onDidDismiss(() => {
              this.authData.logoutUser();
              this.navCtrl.setRoot(Login);
            });
            toast.present();
          }, (error) => {
          });
        }, error => {
          this.loading.dismiss().then( () => {
            let alert = this.alertCtrl.create({
              message: 'old password not correct',
              buttons: [
                {
                  text: "Ok",
                  role: 'cancel'
                }
              ]
            });
            alert.present();
          });
        });
      }else{
        this.isNotMatch = true;
      }
    }
  }

}
