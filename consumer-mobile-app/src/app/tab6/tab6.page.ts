import { Component, OnInit} from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user-model'
@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})
export class Tab6Page {
  public user: UserModel = new UserModel(); 
  constructor(
    private navCtrl: NavController,
    private userService :UserService
    ) {
  }
  ionViewWillEnter() {
    this.checkIfLoggedIn();
    this.userService.getUserById(localStorage.getItem('userId'),(err,res)=>{
      if(err){
        alert(err);
      }else{
        
        this.user = res[0];
      }
    })
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
      this.navCtrl.navigateRoot('/tabs/tab1')
      
    }
    else {
      this.navCtrl.navigateRoot('/tabs/tab6')
    }
  }
  logout(){
    localStorage.setItem("loggedIn","false");
    this.navCtrl.navigateRoot('/tabs/tab1')
  }
}
