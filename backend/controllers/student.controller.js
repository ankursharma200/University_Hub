
const Student = require('../models/student.model.js');
const bcrypt = require('bcryptjs');


const registerStudent = async (req, res) => {
    const { name, email, password } = req.body;

 
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    try {
       
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: 'A student with this email already exists.' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

       
        const newStudent = new Student({
            name,
            email,
            password: hashedPassword,
        });

        await newStudent.save();

        res.status(201).json({ message: 'Student registered successfully!', studentId: newStudent._id });

    } catch (error) {
        res.status(500).json({ message: 'Server error during registration.', error: error.message });
    }
};


module.exports = { registerStudent };