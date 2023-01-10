const mongoose = require('mongoose');

const  schema = new mongoose.Schema({
     name:String ,
     age:Number,
     email:String,
     password:String,
     celular:Number,
     principal:String,

});

const Model = mongoose.model('customers',schema)

module.exports =  Model