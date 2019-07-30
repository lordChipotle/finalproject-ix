var Listing = require("../models/listing-model");

module.exports = class ListingService {
  constructor() { }

  
  getListings() {
    return new Promise((resolve, reject) => {
      Listing.getAllListings().then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })


    });
  }
  
  getListingById(id) {
    return new Promise((resolve, reject) => {
      Listing.getListingById(id).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })


    });
  }
  
  create(u) {
    return new Promise((resolve, reject) => {
      Listing.createListing(u).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })


    });
  }
  updateListingById(u) {
    return new Promise((resolve, reject) => {
      Listing.updateListingById(u).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })


    });
  }
  remove(u) {
    return new Promise((resolve, reject) => {
      Listing.removeListing(u).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })


    });
  }
  getImgurl(listing){
    return new Promise((resolve, reject) => {
        Listing.getImgurl(listing).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        })
  
  
      });
  }
  getReviews(listing){
    return new Promise((resolve, reject) => {
        Listing.getReviews(listing).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        })
  
  
      });
  }
  
  

}