//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    empCode:{
        type :Number,
        required : true,
        unique : true
    },
    empName: {
        type : String,
        required : true
    },
    Contact : {
        type :Number,
        required : true
    },
    password : {
        type : String,
        required: true
    },
    isImage : {
        type : Boolean,
        required : true
    }
});

module.exports = mongoose.model('employee', employeeSchema);