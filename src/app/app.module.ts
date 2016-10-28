import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { Dashboard } from '../pages/dashboard/dashboard';
import { Login} from '../pages/login/login';
import { MyAccount} from '../pages/my-account/my-account';
import { Invoices} from '../pages/invoices/invoices';
import { About} from '../pages/about/about';
import { Help} from '../pages/help/help';
import { LogOut} from '../pages/log-out/log-out';
import { Settings} from '../pages/settings/settings';
import { ForgotPassword } from '../pages/forgot-password/forgot-password';
import { ChangePassword } from '../pages/change-password/change-password';
import { TermsOfUse } from '../pages/terms-of-use/terms-of-use';
import { Acknowledgements } from '../pages/acknowledgements/acknowledgements';
import { ContactUs } from '../pages/contact-us/contact-us';
import { HelpAnswer } from '../pages/help-answer/help-answer';

import { AuthData } from '../providers/auth-data';
import { EventData } from '../providers/event-data';
import { QuoteData } from '../providers/quote-data';
import { ProfileData } from '../providers/profile-data';
import { Quotations } from '../pages/quotations/quotations';
import { SignupPage } from '../pages/signup/signup';

@NgModule({
  declarations: [
    MyApp,
    Dashboard,
    Login,
    ForgotPassword,
    MyAccount,
    Invoices,
    About,
    Help,
    LogOut,
    Settings,
    TermsOfUse,
    HelpAnswer,
    Acknowledgements,
    ContactUs,
    ChangePassword,
    SignupPage,
    Quotations
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Dashboard,
    Login,
    ForgotPassword,
    MyAccount,
    Invoices,
    About,
    Help,
    LogOut,
    Settings,
    TermsOfUse,
    HelpAnswer,
    Acknowledgements,
    ContactUs,
    ChangePassword,
    SignupPage,
    Quotations
  ],
  providers: [
    AuthData,
    EventData,
    ProfileData,
    QuoteData
  ]
})
export class AppModule {}
