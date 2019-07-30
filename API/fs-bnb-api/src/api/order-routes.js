const express = require("express");
const router = express.Router();
var fs = require("fs");
const orderService = require ("../services/order-service");
const ORDERSERVICE = new orderService();





router.get("/:id", (req, res) => {
    ORDERSERVICE
    .getOrderById(req.params.id)
    .then(result => { 
      //var parseData = JSON.parse(result);
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ msg: err.message });
    });
});
router.post("/", (req, res) => {
  const order = req.body;
  ORDERSERVICE
  .create(order)
  .then(result => { 
    //var parseData = JSON.parse(result);
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});
router.post("/delete/:id", (req, res) => {
  const order = req.body;
  ORDERSERVICE
  .remove(order)
  .then(result => { 
    //var parseData = JSON.parse(result);
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});
router.post("/update/:id", (req, res) => {
  ORDERSERVICE
  .updateOrderById(req.params.id)
  .then(result => { 
    //var parseData = JSON.parse(result);
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});

router.get("/orders", (req, res) => {
  ORDERSERVICE
  .getOrders()
  .then(result => { 
    //var parseData = JSON.parse(result);
    res.send(result);
  })
  .catch(err => {
    res.status(400).json({ msg: err.message });
  });
});
module.exports = router;