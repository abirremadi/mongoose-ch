const express = require('express');
const app = express();
require('dotenv').config({ path: './config.env' })
// routes
app.use('/Persons', require('./Routers/PersonRouter'))

// connect database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
     useUnifiedTopology: true
    }).then(res => console.log('database connected'))
    .catch(err => console.log(err));
// create server
const PORT= process.env.PORT || 5000;
app.listen(PORT,(err)=>err?console.log(err):console.log('server is running on port',PORT))