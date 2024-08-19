"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const route_1 = __importDefault(require("./route/route"));
const app = (0, express_1.default)();
// const express=require('express');
// const app=express()
// const router=require('./route')
// const path=require('path')
app.set('view engine', 'ejs');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/static', express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/', route_1.default);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('something wrong');
});
app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});
