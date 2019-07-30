import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})
export class DashboardPage {

  constructor(private navCtrl: NavController) {
  }
  ionViewWillEnter() {
    this.checkIfLoggedIn();

  }
  // ngDoCheck(){
  //   this.checkIfLoggedIn();

  // }
  checkIfLoggedIn(){
    var loggedIn = false;
    if (localStorage.getItem("loggedIn")==="true"){
      loggedIn = true;
    }
    if (!loggedIn){
      this.navCtrl.navigateRoot('/tabs/login')
      
    }
    else {
      this.navCtrl.navigateRoot('/tabs/dashboard')
    }
  }
  logout(){
    localStorage.setItem("loggedIn","false");
    this.navCtrl.navigateRoot('/tabs/login')
  }
}
