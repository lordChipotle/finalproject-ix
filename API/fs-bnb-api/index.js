const express = require('express');

const app = express();

const users = require("./src/api/user-routes");
const auth = require("./src/api/auth-routes");
const listings = require("./src/api/listing-routes");
const orders = require("./src/api/order-routes");
const cors = require("cors");
const crossOrigin = require("./src/utilities/middleware/cross-origin");
const router = express.Router();
// const middleware = require('./src/middleware/middleware');
const jwtVerify = require('./src/utilities/middleware/jwt-verify');  // jwt token middleware 

app.use(cors());
//app.use(crossOrigin);

//Body Parser Middlware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/user", users);
app.use("/api/auth", auth);
app.use("/api/listing", listings);
app.use("/api/order", orders);

app.use("/api/auth", auth);
app.use("/api/users", jwtVerify.checkToken, users);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

var fs = require("fs");

// router.get("/api/users", (req, res) => {
//   //res.send('<h1>Hello World!</h1>');
//   fs.readFile("./src/data/data.json", function(err, data) {
//     if (err) throw err;
//     var parseData = JSON.parse(data);
//     res.json(parseData.users);
//   });
// });


//Middleware function:
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

//Middleware execue:
app.use(logger)
//cors


// app.get("api/users/:id", (req, res) => {
//     fs.readFile("./src/data/data.json", function (err, data) {
//         if (err) throw err;
//         var parseData = JSON.parse(data);
//         const found = parseData.users.some(user => user.id === req.params.id);
//         if (found) {
//             res.json(users.filter(user => user.id === req.params.id));
//         } else {
//             res.status(400).json({ msg: "User not found" });
//         }
//     });
// });


