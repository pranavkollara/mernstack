const express = require('express');
const mongoose = require('mongoose');
const jerseysModel = require('./database/models/Jerseys');
const middlewareWrapper = require('./tools/middleware-wrapper');
const database = require('./database');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());



app.listen(4000,() => {
    console.log("listening on port 4000")
})

app.post('/', middlewareWrapper(async function (req, res) {
    const reportedData = req.body;
    console.log(reportedData);
  
    if (reportedData.name) {
      try {
        let usersData = await jerseysModel.insertMany({
          name: reportedData.name,
          version: reportedData.version,
          des:reportedData.des,
          count:reportedData.count,
          price:reportedData.price,
          discount:reportedData.discount,
        });
        res.json(usersData);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
    } else {
      res.status(400).json({ message: 'Email is required' });
    }
  }));

  app.get('/', middlewareWrapper(async function (req, res) {
 
        let usersData = await jerseysModel.find()
      res.json(usersData);
      
    }
   
  
  ))