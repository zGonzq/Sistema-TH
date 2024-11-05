"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const IndexRoutes_1 = __importDefault(require("./Routes/IndexRoutes"));
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressEjsLayouts);
app.set('layout', 'layout/layout');
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use('/', IndexRoutes_1.default);
const port = process.env.PORT || 3100;
app.listen(port, () => {
    console.log(`Sistema iniciado en http://localhost:${port}/`);
});
