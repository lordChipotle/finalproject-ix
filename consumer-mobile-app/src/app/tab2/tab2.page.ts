import { Component, OnInit } from '@angular/core';
import { ListingPage } from '../listing/listing.page';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { AlertService } from '../services/alert.service';
import { ListingService } from '../services/listing.service';
import {ListingModel} from '../models/listing-model'
import { Source } from 'webpack-sources';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public listings: ListingModel[];
  public listingCOUNT: number;

  constructor(private modalController: ModalController,
    private navCtrl: NavController,
    private alertService: AlertService,
    private alertCtrl: AlertController,
    public LISTINGSERVICE: ListingService) {}

  ngOnInit(){
    // var data = this.LISTINGSERVICE.getAllListings();
    // debugger;
    // var json_data = JSON.parse(JSON.stringify(data))
    // console.log(data);
    // console.log(json_data);
    // for(var i in json_data)
    // this.listings.push(i);

    // console.log(this.listings);
    // debugger;
    this.getAll();
    this.listingCOUNT = this.listings.length - 1;
  }
  search(){

  }
  clickIntoListing(data,index){
    debugger;
    localStorage.setItem('listingId',data[index].id)

  }
  
  async listingModal() {
    debugger;
    this.clickIntoListing(this.listings,this.listingCOUNT);

    const listingModal = await this.modalController.create({
      component: ListingPage
    });
    return await listingModal.present();
  }
  async presentAlert(src,err){
    const alert = await this.alertCtrl.create({
    header:"ALERT",
    subHeader:'problem with'+src,
    message:err,
    buttons:['Aye']

  });}
  
  
  
  getAll(){
    this.LISTINGSERVICE.getAllListings()
    .then((res:ListingModel[])=>{
      console.log(res)
      this.listings = res;
    })
    .catch(
      err=> this.presentAlert("Explore Page", err.console.error()
      )
    )
  }
}
