var centres = require('../models/centre');
//var con = require('../connection');
//var db = con.db;
exports.centre_detail = function(req,res,next){
    //console.log('something');
    centres.find({'centreCode' : req.params.centreCode}).then((Centre)=>{
        res.send(Centre);
    },(e)=>{
        res.status.send(e);
    });
}

exports.centre_list = function(req,res,next){
   console.log("Inside centres list function");
   centres.find({},{centreCode :1, centreName : 1, _id :0}).then((Centres) => {
    res.send({Centres});
   }, (e) => {
       res.status(400).send(e);
   });
//    centres.find({},{centreCode :1, centreName : 1, _id :0}).toArray(function(err,result){
//        if(err)
//        throw err;
//        console.log(result);
//        res.send(result);
//    });
};

exports.centre_create_get = function(req,res,next){
    
   
};


exports.centre_create_post = function(req,res,next){
   console.log('Inside create centre');
   var centres_instance = new centres({
        centreCode: req.body.centreCode,
        centreName: req.body.centreName,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        locations: []
    });
    console.log('Before saving');
    centres_instance.save(function(e,doc){
        if(e){
            console.log("Centre instance could not be saved !!");
            throw e;
        }
        else{
            res.send(doc); 
        } 
    })
};

exports.centre_delete_get = function(req,res,next){
    
  
};

exports.centre_delete_post = function(req,res,next){
    
   
};

exports.centre_update_get = function(req,res,next){
    
    
};
    
exports.centre_update_post = function(req,res,next){
      
    
};

