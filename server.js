const express = require('express')
const app = express()
require('dotenv').config();
const User=require('./routes/auth/auth')
const bodyParser = require('body-parser');
const connectDB=require('./utils/db')
const passport = require("passport");
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(bodyParser.json());
connectDB();
const Port = process.env.PORT ||3000;
app.listen(Port, () => {
  console.log(`Server running on http://localhost:${Port}`);
}) 

const MIddlewWareAuth=passport.authenticate('local', {session:false})
app.use('/auth',User)