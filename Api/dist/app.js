"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const configuracionRoutes_1 = __importDefault(require("./routes/configuracionRoutes"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const historicoRoutes_1 = __importDefault(require("./routes/historicoRoutes"));
const calendarioRoutes_1 = __importDefault(require("./routes/calendarioRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', configuracionRoutes_1.default); // /api/cfg
app.use('/api', usuariosRoutes_1.default); // /api/usr
app.use('/api', historicoRoutes_1.default); // /api/hist
app.use('/api', calendarioRoutes_1.default); // /api/cal
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor Web Iniciado en http://localhost:' + PORT + '/api');
});
