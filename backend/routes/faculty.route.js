const express = require('express');
const { registerFaculty, loginFaculty } = require('../controllers/faculty.controller.js');
const router = express.Router();

router.post('/register', registerFaculty);
router.post('/login', loginFaculty);

module.exports = router;