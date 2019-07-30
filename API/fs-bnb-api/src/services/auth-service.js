// import * as bcrypt from 'bcrypt';
// const ValidationService = require("../services/validation-service");
// const validationService = new ValidationService();
const UserService = require('./user-service');

const User = require("../models/user-model");
const userServer = new UserService();
const jwt = require('jsonwebtoken');
const config = require('../config/config');
var fs = require("fs");

module.exports = class AuthService {
    constructor() { }
    login(userInput) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
            User.findUserByEmail(userInput.email).then(res => {
                if (res.length > 0) { // database returns a user or an array larger than length 0
                    let token = jwt.sign({ email: userInput.email },
                        config.secret,
                        {
                            expiresIn: '24h' // expires in 24 hours
                        }
                    );
                    // return the JWT token for the future API calls
                    resolve({
                        success: true,
                        message: 'Authentication successful!',
                        data: token,
                        user:res[0]
                    });
                }
                else {
                    reject("user does not exist");
                }
            }).catch(err => { 
                reject(err); })


        });
    }
    // async hashPassword(password){
    //     var salt = bcrypt.getSalt(10);
    //     return await bcrypt.hash(password,salt);
    // }
    // async login(user){
    //     return new Promise((resolve,reject)=>{

    //         var found = false;

    //         User.getAll((err,dbUsers)=>{
    //             if (err) reject(err);
    //             let dbUser = dbUsers.filter(dbUser =>{
    //                 return dbUser.email ===user.email;
    //             });
    //             if (dbUser.length){
    //                 if(dbUser[0].password!=user.password){
    //                     reject("Incorrect password yo");
    //                 } else{
    //                     resolve(dbUser[0]);
    //                 }
    //             }else{
    //                 reject("User not found yo");

    //             }
    //         })
    //     });

    // }
    register(user) {
        let email = user.email;
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
           User.findExistedEmail(email).then(result=>{
            if (result != "0"){
                resolve("User exists");
            }
            else{
                userServer.create(user).then(userReturned => {
                    let token = jwt.sign({ email: email },
                        config.secret,
                        {
                            expiresIn: '24h' // expires in 24 hours
                        }
                    );
                    // return the JWT token for the future API calls
                    resolve({
                        success: true,
                        message: 'Authentication successful!',
                        data: token
                    });
                }).catch(err => {
                    reject(err); // reject error in promise
                })
            }
            });
        }).catch(error=>{
            reject (error);
        });
    }

    // async register(user){
    //     return new Promise((resolve,reject)=>{
    //         if(!validationService.isValidRegisterBody(user)){
    //             if(!validationService.isValidRegisterBody(user)){
    //                 reject("Invalid payload");
    //             }
    //         }
    //         User.getAll((err,data)=>{
    //             if(err)reject(err);
    //         data.forEach((existUser)=>{
    //             if(existingUser.email ===user.email){
    //                 reject("this email is used");
    //             }
    //         });
    //         // const hashPassword = await this.hashPassword(user.password);

    //         const userObj = {
    //             name: user.name,
    //             surname: user.surname,
    //             cellPhone: user.cellPhone,
    //             email: user.email,
    //             password: hashPassword,
    //             role: roles.USER
    //         };
    //         const newUser = new User(userObj);

    //         User.createUser(newUser,(err,res)=>{
    //             if(err) reject(err);
    //             resolve(res);
    //         }
    //         );

    //         });


    //     });
    // }
    // async getJwtToken(user,rememberUser){
    //     let jwtObject = {};
    //     jwtObject.id = user.id;
    //     jwtObject.name = user.firstname;
    //     jwtObject.surname = user.surname;
    //     jwtObject.cellPhone=user.cellPhone;
    //     jwtObject.email=user.email;
    //     jwtObject.role=user.role;
    //     jwtObject.remember = rememberUser();
    //     return jwt.sign(Object.assign({},jwtObject),"secret key",{
    //         expiresIn: "i"
    //     });

    // }
    // verifyToken(token){
    //     return jwt.verify(token,"secret key")
    // }
};