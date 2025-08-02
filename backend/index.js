const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;
const adminRoutes = require('./routes/admin.route.js');

app.use(cors());
app.use(express.json()); 

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
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the College Management System backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});