const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

connectDB();

app.get('/', (req, res) => {
  res.send('Hello from the College Management System backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});