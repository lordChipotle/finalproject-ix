import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { Tab1Page } from '../tab1/tab1.page';
import { ForgetpasswordPage } from '../forgetpassword/forgetpassword.page';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  animations: [
    // animation triggers go here
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]

  
})
export class OpenCloseComponent {
  isOpen = true;
  constructor(){
   }
  toggle() {
    this.isOpen = !this.isOpen;
  }

}

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
  dismissAll() {
    this.dismissregister();
  }

  async loginModal() {
    this.dismissregister();
    const loginModal = await this.modalController.create({
      component: Tab1Page,
    });
    return await loginModal.present();
  }
  async presentAlert(msg) {
    this.alertService.presentToast(msg);
  }
  register(form: NgForm) {
    this.authService.register(form.value.firstname, form.value.surname, form.value.cellPhone, form.value.email, form.value.password, form.value.role).subscribe(

      data => {


        if (data["message"] === "User exists") {
          this.alertService.presentToast(data['message']);
        }
        else {
          this.authService.login(form.value.email, form.value.password).subscribe(
            data => {
              this.dismissregister(); 
              let newData = JSON.parse(JSON.stringify(data));
              this.alertService.presentToast("Logged In");
              localStorage.setItem('loggedIn', "true");
              localStorage.setItem('userId', newData.user.id)
              this.navCtrl.navigateRoot('/tabs/tab6');
            },
            error => {
              console.log(error);
              console.log("bruh")
              this.presentAlert(error);
            },
            () => {
              console.log("done");
            }
          );
          this.alertService.presentToast(data['message']);
        }

      },
      error => {
        console.log(error);
        this.presentAlert(error);

      },
      () => {

      }
    );
  }
}