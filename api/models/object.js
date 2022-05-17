const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title : {
    type : String ,
    required : [true]
  },
  description : {
    type : String ,
    required : [false]
  },
  completed : {
    type : Boolean ,
    default : [false]
  },
  priority :{
    type : Number ,
    required : [true]
  },
  date :{
    type : Date,
    required : [false]
  }
});

const Task = mongoose.model('task' , TaskSchema);
module.exports = Task;
