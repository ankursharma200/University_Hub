const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();


const Admin = require('./models/admin.model');


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected for seeding...');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const importData = async () => {
  await connectDB();
  try {
  
    await Admin.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('123456', salt);

   
    const newAdmin = new Admin({
      username: 'admin',
      password: hashedPassword,
    });

    await newAdmin.save();

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
};

importData();