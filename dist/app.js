"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello, TypeScript API!');
});
app.post('/users', (req, res) => {
    const newUser = req.body;
    console.log('New user:', newUser);
    res.status(201).json({ message: 'User created', user: newUser });
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
