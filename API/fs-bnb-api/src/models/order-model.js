const express = require("express");

const router = express.Router();
var mysqlConn = require("../database/database");

router.get('/api/order', function (req, res) {
    res.send(orders)
});


fs = require('fs');

var Order = function (order) {
    this.name = order.name;
    this.surname = order.surname;
    this.cellPhone = order.cellPhone;
    this.email = order.email;
    this.password = order.password;
    this.role = order.role;
    this.date_created = new Date();
};

Order.removeOrder = (orderId) => {
    return new Promise((resolve, reject) => {

        mysqlConn.query("DELETE FROM order WHERE id = ?", orderId, function (err, res) {
            if (err) {
                console.log("error: ", err);
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
};
Order.updateOrderById = (orderId, order) => {
    return new Promise((resolve, reject) => {

        mysqlConn.query(
            "UPDATE order SET order = ? WHERE id = ?",
            [order, orderId],
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
Order.getOrderById = (orderId) => {
    return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from order where id = ? ", orderId, function (
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

Order.getAllOrders = () => {
    return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from order", function (err, res) {

            if (err) {
                console.log("error: ", err);
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
};
Order.createOrder = (newOrder) => {
    return new Promise((resolve, reject) => {

        mysqlConn.query("INSERT INTO order set ?", newOrder, function (err, res) {
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

module.exports = Order;


