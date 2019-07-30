import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { RegisterPage } from '../register/register.page';
import { UserModel } from '../../../models/user-model';
import { NgForm } from '@angular/forms';
import {ForgetpasswordPage} from '../forgetpasswordpage/forgetpasswordpage.page';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
  
  constructor(private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService
    /* ,public user = new UserModel() */){}
  

  
    ionViewWillEnter() {
      this.authService.getToken().then(() => {
        if(this.authService.isLoggedIn) {
          this.navCtrl.navigateRoot('/tabs/tab6');
        }
      });
    }

ngOnInit() {
}
async fPassModal() {
  const fPassModal = await this.modalController.create({
    component: ForgetpasswordPage
  });
  return await fPassModal.present();
}
async registerModal() {
  const registerModal = await this.modalController.create({
    component: RegisterPage
  });
  return await registerModal.present();
}
login(form: NgForm) {
  this.authService.login(form.value.email, form.value.password).subscribe(
    data => {
      
      this.alertService.presentToast("Logged In");
      localStorage.setItem('loggedIn',"true");
      this.navCtrl.navigateRoot('/tabs/dashboard');
    },
    error => {
      console.log(error);
    },
    () => {
      
    }
  );
}
}