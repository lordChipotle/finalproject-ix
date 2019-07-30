const express = require("express");

const router = express.Router();
var mysqlConn = require("../database/database");

router.get('/api/listing', function (req, res) {
    res.send(listings)
});


fs = require('fs');

var Listing = function (listing) {
    this.id = listing.id;
    this.name = listing.name;
    this.provider = listing.provider;
    this.location = listing.location;
    this.bio = listing.bio;
    this.pricePerNight = listing.pricePerNight;
    this.date_created = new Date();
    this.imgurl = [];
    this.reviews = [];
    this.orders = [];


};

Listing.removeListing = (listingId) => {
    return new Promise((resolve, reject) => {

        mysqlConn.query("DELETE FROM listing WHERE id = ?", [listingId], function (err, res) {
            if (err) {
                console.log("error: ", err);
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
};
Listing.updateListingById = (listingId, listing) => {
    return new Promise((resolve, reject) => {

        mysqlConn.query(
            "UPDATE listing SET listing = ? WHERE id = ?",
            [listing, listingId],
            function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    reject(err);
                } else {
                    resolve(res);
                }
            })
    })
};
Listing.getListingById = (listingId) => {
    return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from listing where id = ? ", [listingId], function (
            err,
            res
        ) {
            if (err) {
                console.log("error: ", err);
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
};



Listing.getAllListings = () => {
    return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from listing", function (err, res) {

            if (err) {
                console.log("error: ", err);
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
};
Listing.createListing = (newListing) => {
    return new Promise((resolve, reject) => {

        mysqlConn.query("INSERT INTO listing set ?", [newListing], function (err, res) {
            if (err) {
                console.log("error: ", err);
                reject(err);
            } else {
                console.log(res.insertId);
                resolve(res.insertId);
            }
        })
    })
};
Listing.getImgurl = (listingId) =>{
    return new Promise((resolve, reject) => {

        mysqlConn.query("SELECT * from mapping WHERE mappingID = ?", [listingId], function (err, res) {
            if (err) {
                console.log("error: ", err);
                reject(err);
            } else {
                console.log(res);
                this.imgurl = res;
                resolve(res);
            }
        })
    })
};
Listing.getReviews = (listingId) =>{
    return new Promise((resolve,reject)=>{
        mysqlConn.query("SELECT * from listingReviews WHERE listingId = ?", [listingId], function (err, res) {
            if (err) {
                console.log("error: ", err);
                reject(err);
            } else {
                console.log(res);
                this.reviews = res;
                resolve(res);
            }
        })
    })
}


module.exports = Listing;



/* module.exports = class User {
    constructor(newId,newFName,newLName,newRole,newEmail,newPassword){
        this.id = newId
        this.firstname = newFName
        this.lastname = newLName
        this.role = newRole
        this.email = newEmail
        this.password = newPassword
    }
    getUsers(){
            return new Promise((resolve,reject)=>{
                fs.readFile('../data/data.json',(err,data)=>{
                if (err){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        })
    }

    createUser(user){
        return new Promise((resolve,reject)=>{
            fs.readFile("./src/data/data.json",(err,data)=>{
            if (err){
                reject(err);

            }else{
                var users =JSON.parse(data);
                users.push(user);
                console.log(users);
                fs.writeFile(
                    "./src/data/data.json",
                    JSON.stringify(users),
                    (err,data)=>{
                        if(err){
                            reject(err);
                        }else{
                            resolve(data);
                        }
                    }
                );
            }
        });

    });
}
} */
