
const express = require('express');
const router = express.Router();
var fs = require("fs");

const User = require("../models/user-model");
const authService = require("../services/auth-service")

/* router.post("/login", (req, res) => {
    //get users
    //loop thru users
    //validate password
    //  ..success/fail

    User.getAllUsers()
        .then(users => {
            const dbUser = users.filter(user => {
                console.log('user email', user);
                return user.email == req.body.email;
            });
            console.log('dbuser', dbUser);
            if (dbUser) {
                if (dbUser[0].password == req.body.password) {
                    res.send(dbUser[0]);
                } else {
                    res.status(400).send("yo u got an error")
                }
            }
            else {
                res.status(400).send("user not found")
            }

        })
        .catch(err => {
            res.status(400).send("Error")
        });
}); */

// router.post("/register",(req,res)=>{
//   authService
//   .register(req.body)
//   .then(user=>{
//     res.json(user);
//   })
//   .catch(err=>{
//     res.status(400).json({msg:err});
//   });
// });

router.post('/login', (req,res) => {
    // asynchronous function call structure 
    authService.prototype.login(req.body).then(token => {
        res.json(token);
    }).catch(err => {
        res.json({
            success: false,
            message: err});
    });
});
router.post('/register', (req,res) => {
  // asynchronous function call structure 
  authService.prototype.register(req.body).then(user => {
    if (user ==="User exists"){
      res.json({
        success: false,
        message: "User exists"});
    }
    else{
      res.json(user);
    }
      
  }).catch(err => {
      res.json({
          success: false,
          message: err});
  });
});

module.exports = router;

/* const user = req.body;
fs.readFile("./src/data/data.json", function(err, data) {
  var error = false;
  var errMsg = "you have an error boi";
  validation = false;
  if (err) {
    error = true;
    
    throw err;
  } else {
    var count = 0;
 
    if (data.length > 0) {
      var parseData = JSON.parse(data);
      parseData.users.forEach(existingUser => {
        if (existingUser.email === user.email) {
          if(existingUser.password===user.password){
            validation = true;
          }
          
        }else{
            error = true;
            count++;

            
        }
        
      });
    } else {
      error = true;
    return validation;
    }
 
 
 
   
 
  if (error) {
    res.status(400).json({ msg: errMsg });
  } else {
    res.json(user);
  }
});
});

}
*/

//3 models =user, listings, orders
//each model: get all, getbyID, create, update, delete