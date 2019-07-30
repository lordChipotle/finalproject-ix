var Order = require("../models/order-model");

module.exports = class OrderService {
  constructor() { }

  
  getOrders() {
    return new Promise((resolve, reject) => {
      Order.getAllOrders().then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })


    });
  }
  
  getOrderById(id) {
    return new Promise((resolve, reject) => {
      Order.getOrderById(id).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })


    });
  }
  
  create(u) {
    return new Promise((resolve, reject) => {
      Order.createOrder(u).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })


    });
  }
  updateOrderById(u) {
    return new Promise((resolve, reject) => {
      Order.updateOrderById(u).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })


    });
  }
  remove(u) {
    return new Promise((resolve, reject) => {
      Order.removeOrder(u).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })


    });
  }
  
  

}