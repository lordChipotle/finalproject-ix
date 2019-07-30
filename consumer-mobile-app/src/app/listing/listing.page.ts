import { Component, OnInit} from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import {ListingService} from '../services/listing.service'
import { ListingModel } from '../models/listing-model';
import { AlertService } from '../services/alert.service';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  public listing: ListingModel = new ListingModel(); 

  
  constructor(
    private listingService :ListingService,
    private imgurl: Array<any>,
    private modalController: ModalController,
    private navCtrl: NavController,
    private alertService: AlertService

    )
  { 
    
  }

  ngOnInit() {
    this.listingService.getListingById(localStorage.getItem('listingId'),(err,res)=>{
      if(err){
        alert(err);
      }else{
        
        this.listing = res[0];
      }
    });
  }
  showInputText(){

  }
  dismissListing() {
    this.modalController.dismiss();
  }
  async presentAlert(msg) {
    this.alertService.presentToast(msg);
  }

}
