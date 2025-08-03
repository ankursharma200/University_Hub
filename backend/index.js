const express = require('express');
const app = express();
const mongoose = require('mongoose'); 
const cors = require('cors');
require('dotenv').config();


const PORT = process.env.PORT || 5000;
const adminRoutes = require('./routes/admin.route.js');
const studentRoutes = require('./routes/student.route.js')
const facultyRoutes = require('./routes/faculty.route.js');




app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true,
}));

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
app.use('/api/student', studentRoutes);
app.use('/api/faculty', facultyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
