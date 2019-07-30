var User = require("../models/user-model");

module.exports = class UserService {
  constructor() { }

  
  getUsers() {
    return new Promise((resolve, reject) => {
      User.getAllUsers().then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })


    });
  }
  
  getUserById(id) {
    return new Promise((resolve, reject) => {
      User.getUserById(id).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })


    });
  }
  
  create(u) {
    return new Promise((resolve, reject) => {
      User.createUser(u).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })


    });
  }
  updateUserById(u) {
    return new Promise((resolve, reject) => {
      User.updateUserById(u).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })


    });
  }
  remove(u) {
    return new Promise((resolve, reject) => {
      User.removeUser(u).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })


    });
  }
  

  
  

}