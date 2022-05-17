const express = require('express');
const routes = require('./routes/api');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

mongoose
  .connect('mongodb://localhost/tutodo')
  .then(connection => console.log('DB Connected'))
  .catch(e => console.log(`Error occured ${e}`));

mongoose.Promise = global.Promise ;
const app = express();
app.use(cors({credentials:true}));
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use('/api' , routes);
app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({error: err.message});
});


app.listen(process.env.port || 4000 , function(){
  console.log("server is up");
})
