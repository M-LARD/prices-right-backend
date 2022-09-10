'use strict'; 

require('dotenv').config(); 
const express = require('express'); 
const cors = require('cors');
const axios = require('axios');
const mongoose = require('mongoose');



const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.MONGO_CONNECTION);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected');
});

app.get('/', (request, response) => {

  response.status(200).send('PRICES RIGHT?!');

});

app.use((error, request, response, next) => {
  response.status(500).send(`Error occurred in the server! ${error.message}`);
});


app.listen(PORT, () => console.log(`listening on ${PORT}`));