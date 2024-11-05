import express, { json } from "express";
import dotenv from "dotenv";

import configuracionRoutes from "./routes/configuracionRoutes";
import usuariosRoutes from "./routes/usuariosRoutes";
import historicoRoutes from "./routes/historicoRoutes";
import calendarioRoutes from "./routes/calendarioRoutes";

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api', configuracionRoutes); // /api/cfg
app.use('/api', usuariosRoutes); // /api/usr
app.use('/api', historicoRoutes); // /api/hist
app.use('/api', calendarioRoutes); // /api/cal

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor Web Iniciado en http://localhost:' + PORT + '/api');
})

