const express = require("express");

const router = express.Router();
var mysqlConn = require("../database/database");

router.get('/api/user', function (req, res) {
    res.send(users)
});


fs = require('fs');
const roles = {
    ADMIN: "admin",
    PROVIDER: "provider",
    USER: "user"
}
var User = function (user) {
    this.id = user.id;
    this.firstname = user.firstname;
    this.surname = user.surname;
    this.cellPhone = user.cellPhone;
    this.email = user.email;
    this.password = user.password;
    this.role = user.role;
    this.date_created = new Date();
};

// User.getAllUsers = function (result) {
//     mysqlConn.query("Select * from user", function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(err, null);
//         } else {
//             console.log("Users : ", res);
//             result(null, res);
//         }
//     });
// };
User.removeUser = (userId) => {
    return new Promise((resolve, reject) => {

        mysqlConn.query("DELETE FROM user WHERE id = ?", userId, function (err, res) {
            if (err) {
                console.log("error: ", err);
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
};
User.updateUserById = (userId, user) => {
    return new Promise((resolve, reject) => {

        mysqlConn.query(
            "UPDATE user SET user = ? WHERE id = ?",
            [user, userId],
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
User.getUserById = (userId) => {
    return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from user where id = ?", [userId], function (
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

User.getAllUsers = () => {
    return new Promise((resolve, reject) => {
        mysqlConn.query("Select * from user", function (err, res) {

            if (err) {
                console.log("error: ", err);
                reject(err);
            } else {
                resolve(res);
            }
        })
    })
};
User.createUser = (newUser) => {
    return new Promise((resolve, reject) => {

        mysqlConn.query("INSERT INTO user set ?", newUser, function (err, res) {
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
User.findUserByEmail = (email)=>{
    return new Promise((resolve,reject)=>{
        mysqlConn.query("SELECT * from user WHERE email = ? ", [email], function (err, res) {
            if (err) {
                console.log("error: ", err);
                reject(err);
            } else {
                console.log(res);
                resolve(res);
            }
        })
    })
};
User.findExistedEmail = (email)=>{
    return new Promise((resolve,reject)=>{
        mysqlConn.query("SELECT CASE WHEN COUNT(1) > 0 THEN 1 ELSE 0 END AS emailbool FROM user WHERE email = ?", [email],function(err,res){
            if(err){
                console.log("error: ",err);
                reject(err);
            }

            else{
                res = res[0];
                console.log(res.emailbool);
                resolve(res.emailbool);
            }
        })
    })
};
module.exports = User;



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
