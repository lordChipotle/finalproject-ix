import { Injectable } from '@angular/core';
import {ListingModel} from '../models/listing-model'
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  public listing: ListingModel = new ListingModel();

  constructor(
    private http:HttpClient,
    private navCtrl:NavController
  ){}

  createListing(listing:ListingModel,cb:Function){
    this.http.post(environment.BaseURL+'/api',listing)
    .subscribe(
      (res)=>{
        return cb(null,res);
      },(err)=>{
        return cb(err,null);
      }
    );
  }
  
  getAllListings(){
    return new Promise((resolve,reject)=>{
    this.http.get(environment.BaseURL+'/api/listing/allListings')
    .subscribe(
      (res)=>{

        resolve(res);
        debugger;
      },(err)=>{
        console.log(err);
        reject(err.msg);
        debugger;
      }
    );
  });
}
  getListingById(id,cb:Function){
    this.http.get(environment.BaseURL+'/api/listing/listingid/'+id)
    .subscribe(
      (res)=>{
        return cb(null,res);
      },(err)=>{
        return cb(err,null);
      }
    );
  }
  deleteListingById(id,cb:Function){
    this.http.post(environment.BaseURL+'/api/listing/delete/',id)
    .subscribe(
      (res)=>{
        return cb(null,res);
      },(err)=>{
        return cb(err,null);
      }
    );
  }
  updateListingById(id,cb:Function){
    this.http.post(environment.BaseURL+'/api/listing/update/', id)
    .subscribe(
      (res)=>{
        return cb(null,res);
      },(err)=>{
        return cb(err,null);
      }
    );
  }
  
}
