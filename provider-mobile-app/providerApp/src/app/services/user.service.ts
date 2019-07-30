import { Injectable } from '@angular/core';
import {UserModel} from '../models/user-model'
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: UserModel = new UserModel();

  constructor(
    private http:HttpClient,
    private navCtrl:NavController
  ){}

  createUser(user:UserModel,cb:Function){
    this.http.post(environment.BaseURL+'/api',user)
    .subscribe(
      (res)=>{
        return cb(null,res);
      },(err)=>{
        return cb(err,null);
      }
    );
  }
  
  getAllUsers(){
    return new Promise((resolve,reject)=>{
    this.http.get(environment.BaseURL+'/api/user/users')
    .subscribe(
      (res)=>{
        resolve(res);
      },(err)=>{
        console.log(err);
        reject(err.msg);
      }
    );
  });
}
  getUserById(id,cb:Function){
    this.http.get(environment.BaseURL+'/api/user/:id',id)
    .subscribe(
      (res)=>{
        return cb(null,res);
      },(err)=>{
        return cb(err,null);
      }
    );
  }
  deleteUserById(id,cb:Function){
    this.http.post(environment.BaseURL+'/api/user/delete/:id',id)
    .subscribe(
      (res)=>{
        return cb(null,res);
      },(err)=>{
        return cb(err,null);
      }
    );
  }
  updateUserById(id,cb:Function){
    this.http.post(environment.BaseURL+'/api/user/update/:id',id)
    .subscribe(
      (res)=>{
        return cb(null,res);
      },(err)=>{
        return cb(err,null);
      }
    );
  }
  
}
