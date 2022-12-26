const mongoose = require("mongoose")
mongoose.set('strictQuery', false);

const movies = mongoose.Schema({
     
     movie_name : {type:String,require:true,unique:true},
     year : {type:String,require:true},
     plot : {type:String,require:true},
     poster : {type:String,require:true},
     actor :{type:String,require:true},
     actor_dob :{type:String,require:true},
     actor_gender :{type:String,require:true},
     actor_bio :{type:String,require:true},
     producer:{type:String,require:true},
     producer_dob :{type:String,require:true},
     producer_gender :{type:String,require:true},
     producer_bio :{type:String,require:true},


});

module.exports = mongoose.model("moviedata",movies);