import { Component, OnInit } from '@angular/core';
import { ListingPage } from '../listing/listing.page';
import { ModalController, NavController } from '@ionic/angular';
import { AlertService } from '../services/alert.service';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public listings: Array<any>=[];
  

  constructor(private modalController: ModalController,
    private navCtrl: NavController,
    private alertService: AlertService,
    public LISTINGSERVICE: ListingService) {}

  ngOnInit(){
    var data = this.LISTINGSERVICE.getAllListings();
    debugger;
    var json_data = JSON.parse(JSON.stringify(data))
    console.log(data);
    console.log(json_data);
    for(var i in json_data)
    this.listings.push(i);

    console.log(this.listings);
    debugger;
  }
  search(){

  }
  clickIntoListing(data){
    localStorage.setItem('listingId',data.listing.id)

  }
  async listingModal() {
    this.clickIntoListing(this.listings);

    const listingModal = await this.modalController.create({
      component: ListingPage
    });
    return await listingModal.present();
  }
}
