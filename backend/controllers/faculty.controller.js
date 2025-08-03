const Faculty = require('../models/faculty.model.js');
const bcrypt = require('bcryptjs');

const registerFaculty = async (req, res) => {
    const { name, email, password, department } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please provide all required fields.' });
    }
    try {
        const existingFaculty = await Faculty.findOne({ email });
        if (existingFaculty) {
            return res.status(400).json({ message: 'A faculty member with this email already exists.' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newFaculty = new Faculty({ name, email, password: hashedPassword, department });
        await newFaculty.save();
        res.status(201).json({ message: 'Faculty registered successfully!', facultyId: newFaculty._id });
    } catch (error) {
        res.status(500).json({ message: 'Server error during registration.' });
    }
};

const loginFaculty = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }
    try {
        const faculty = await Faculty.findOne({ email });
        if (!faculty) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }
        const isMatch = await bcrypt.compare(password, faculty.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }
        res.status(200).json({ message: 'Faculty login successful', facultyId: faculty._id });
    } catch (error) {
        res.status(500).json({ message: 'Server error during login.' });
    }
};

module.exports = { registerFaculty, loginFaculty };