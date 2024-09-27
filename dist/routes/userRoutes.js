"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateUser_1 = require("./../middleware/validateUser");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('User route');
});
router.post('/', validateUser_1.validateUser, validateUser_1.checkValidationResult, (req, res) => {
    const newUser = req.body;
    console.log('New user:', newUser);
    res.status(201).json({ message: 'User created', user: newUser });
});
exports.default = router;
