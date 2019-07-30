const express = require("express");
const router = express.Router();
var fs = require("fs");
const listingService = require ("../services/listing-service");
const LISTINGSERVICE = new listingService();





router.get("/listingid/:id", (req, res) => {
    LISTINGSERVICE
    .getListingById(req.params.id)
    .then(result => { 
      //var parseData = JSON.parse(result);
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});
router.post("/", (req, res) => {
  const listing = req.body;
  LISTINGSERVICE
  .create(listing)
  .then(result => { 
    //var parseData = JSON.parse(result);
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});
router.post("/delete/:id", (req, res) => {
  const listing = req.body;
  LISTINGSERVICE
  .remove(listing)
  .then(result => { 
    //var parseData = JSON.parse(result);
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});
router.post("/update/:id", (req, res) => {
  LISTINGSERVICE
  .updateListingById(req.params.id)
  .then(result => { 
    //var parseData = JSON.parse(result);
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});

router.get("/allListings", (req, res) => {
  LISTINGSERVICE
  .getListings()
  .then(result => { 
    //var parseData = JSON.parse(result);
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});
router.get("/listings/:id/imgs", (req, res) => {
    LISTINGSERVICE
    .getImgurl(req.params.id)
    .then(result => { 
      //var parseData = JSON.parse(result);
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
  });
router.get("/listings/:id/reviews", (req, res) => {
    LISTINGSERVICE
    .getReviews(req.params.id)
    .then(result => { 
      //var parseData = JSON.parse(result);
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
  });
module.exports = router;