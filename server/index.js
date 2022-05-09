const express = require('express');
const http = require('http');
const bodyParser = require('body-parser')
const cors = require('cors');
//const Moralis  = require('moralis/node');


const app = express();

const fns = require('./routes/Routes.js') 
const mongoose = require('mongoose');

const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(bodyParser.json({limit: '100mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use('/uploads', express.static('uploads'))
app.use(fns)




// SERVER CONFIG
const PORT = process.env.PORT || 8000
const server = http.createServer(app);

//START MORALIS SERVER
const serverUrl = "https://dbewnkrxpwxq.usemoralis.com:2053/server";
const appId = "rIMQDAmn2gwNXagAcwY5bci5GH0qcIBGQYn6EX8C";
//Moralis.start({ serverUrl, appId });

//CONNECTING DATABASE
 DATABASE_URL = 'mongodb+srv://roland:rolandmario123@cluster0.xjuuu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

 mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
   .then(console.log(`KyptoJobList is listening at http://localhost:${PORT}`))
   .catch(err=>{console.log(err.message)})

server.listen(PORT, () => console.log(`Listening on ${ PORT }`))



    