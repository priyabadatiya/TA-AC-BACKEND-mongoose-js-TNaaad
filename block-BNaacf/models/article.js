var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema= new Schema({
    favourites:["Reading","Sleeping","Reading"],
    marks:[1,2,3,4,45],
    village:{type:String},
    city:{type:String},
    state:{type:String},
    pin:{type:Number},
    user:Schema.Types.ObjectId
})