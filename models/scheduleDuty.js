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
    dutyDate : {
        type : Date,
        default : Date.now,
        required : true,
    },
    centreName : {
        type :String,
        required : true
    },
    startTime :{
        type :Number,
        required : true
    },
    endTime: {
        type :Number,
        required : true
    },
    locations: [{
        type: mongooseId,
        ref: 'location',
        required: true
    }]
});

module.exports = mongoose.model('scheduleDuty', scheduleDutySchema);