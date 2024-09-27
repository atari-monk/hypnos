"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateUser_1 = require("./../middleware/validateUser");
const User_1 = require("../entities/User");
const data_source_1 = require("../data_source");
const router = (0, express_1.Router)();
router.get('/', async (req, res) => {
    try {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
        const users = await userRepository.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to retrieve users', error });
    }
});
router.post('/', validateUser_1.validateUser, validateUser_1.checkValidationResult, async (req, res) => {
    try {
        const newUser = req.body; // Enforce User interface
        // Get the repository and create a new user instance
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
        const userEntity = userRepository.create(newUser);
        // Save the user to the database
        const savedUser = await userRepository.save(userEntity);
        res.status(201).json({ message: 'User created', user: savedUser });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create user', error });
    }
});
exports.default = router;
