const Task = require('../models/object');

module.exports.get_task = (req , res) => {
    Task.findOne({_id : req.params.id}).then(function(task){
        res.send(task);
    }).catch(e => console.log(`Error occured ${e}`));
}

module.exports.get_tasklist = (req , res) => {

    Task.find({}).sort({priority : 'desc'}).then(function(task){
        res.send(task);
    }).catch(e => console.log(`Error occured ${e}`));
}

module.exports.post_task = (req , res) => {
    console.log(req.body);
    Task.create(req.body).then(function(task){
        res.send(task);
    }).catch(e => {
        res.send(e);
        console.log(e);
    });
}

module.exports.put_task = (req , res) => {
    Task.findByIdAndUpdate(req.params.id , {completed : true , priority : 0})
        .then(function(){
            Task.findOne({_id: req.params.id}).then(function(task){
                res.send(task);
            });
        }).catch(e => console.log(`Error occured ${e}`));
}

module.exports.delete_task = (req , res) => {
    Task.findByIdAndDelete(req.params.id).then(function(task){
        res.send(task);
    }).catch(e => console.log(`Error occured ${e}`));
}

