//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;
var mongooseId = Schema.Types.ObjectId;

var scheduleDutySchema = new Schema({
    empCode : {
        type :Number,
        required : true
    },
    centreName : {
        centreCode :int,
        required : true
    },
    locationName :{
        locationCode : int,
        required : true
    },
    startDuty :{
        type :Date,
        required : true
    },
    endDuty: {
        type :Date,
        required : true
    }
})

module.exports = mongoose.model('scheduleDuty', scheduleDutySchema);