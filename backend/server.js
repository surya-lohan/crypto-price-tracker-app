const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const{SignupModel , SigninModel} = require("./DB");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ShrishtiWarude:weOHbttnOdQ8wusi@cluster0.8msrjgs.mongodb.net/CRYPTO")

const JWT_SECRET = "CRYPTO!@#$%";
// const users = [];

app.post("/signup" , function (req , res){
    const username = req.body.username;
    const password = req.body.password;

    // users.push({
    //     username : username,
    //     password : password
    // })

    SignupModel.create({
        username : username,
        password : password
    })

    res.json({
        msg : "you're signUP"
    })
});

app.post("/signin" , function (req , res){
    const username = req.body.username;
    const password = req.body.password;

    //const user = users.find(user=> user.username == username && user.password == password);

    const user = SignupModel.findOne({
        username : username,
        password:password
    })

    console.log(user);

    if(user){
        const token = jwt.sign({username : username} , JWT_SECRET);
        user.token = token;
        res.send({
            token : token
        });
    }
    else{
        res.status(403).send({
            msg : "Invalid credentials"
        })
    }
});

// function verifying(req , res , next){
//     const decode = jwt.verify(token , JWT_SECRET);
//     if(decode){
//         next();
//     }
//     else{
//         res.status(404).send({
//             msg : "Not valid"
//         })
//     }
// }

app.listen(3000);