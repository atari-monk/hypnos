"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const data_source_1 = require("./data_source");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/users', userRoutes_1.default);
app.get('/', (req, res) => {
    res.send('Hello, TypeScript API!');
});
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
})
    .catch((error) => {
    console.error('Error during Data Source initialization:', error);
});
