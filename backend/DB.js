const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const Signup = new Schema({
    username : String,
    password : String
})

const Signin = new Schema({
    username : String,
    password : String
})

const SignupModel = mongoose.model("signup" , Signup);
const SigninModel = mongoose.model("signin" , Signin);

module.exports= {
    SignupModel : SignupModel,
    SigninModel : SigninModel
}