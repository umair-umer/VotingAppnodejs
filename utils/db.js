const mongoose = require('mongoose')
require('dotenv').config();
const Mongo_uri=process.env.Mongo_uri
const connectDB = async () => {
    try {
      await mongoose.connect(Mongo_uri);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('MongoDB connection error:', error);
      process.exit(1); // Exit process with failure
    }
  };

module.exports=connectDB;