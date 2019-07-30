import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { LoginPage } from '../login/login.page';
import { ForgetpasswordPage } from '../forgetpasswordpage/forgetpasswordpage.page';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private modalController: ModalController,
    private authService: AuthService,
    private navCtrl: NavController,
    private alertService: AlertService,
  ) { }
  ngOnInit() {
  }
  dismissregister() {
    this.modalController.dismiss();
  }
  dismissAll(){
    this.dismissregister();
  }

  async loginModal() {
    this.dismissregister();
    const loginModal = await this.modalController.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }
  async presentAlert(msg) {
   this.alertService.presentToast(msg);
  }
  register(form: NgForm) {
    this.authService.register(form.value.firstname, form.value.surname, form.value.cellPhone, form.value.email, form.value.password, form.value.role).subscribe(
      data => {
        this.authService.login(form.value.email, form.value.password).subscribe(
          data => {
            this.dismissregister();
            localStorage.setItem('loggedIn',"true");

            this.navCtrl.navigateRoot('/tabs/tab6');
          },
          error => {
            debugger;
            console.log(error);
            console.log("bruh")
            this.presentAlert(error);
          },
          () => {
            console.log("done");
          }
        );
        this.alertService.presentToast(data['message']);
      },
      error => {
        debugger; 
        console.log(error);
        this.presentAlert(error);

      },
      () => {
        
      }
    );
  }
}