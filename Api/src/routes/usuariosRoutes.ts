import { Router } from "express";
import { usuariosServ } from "../services/usuariosServ";
import { Usuarios } from "../models/usuarios";

const router = Router();
const service = new usuariosServ();

router.get('/usr/list', async (req, res) => {
    try {
        const result = await service.getUsuarios();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.get('/usr/:id', async (req, res) => {
    try {
        const result = await service.getUsuarioByID(parseInt(req.params.id));
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.post('/usr/add', async (req, res) => {
    try {
        const result = await service.createUsuario(req.body as Usuarios);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.put('/usr/update', async (req, res) => {
    try {
        const result = await service.updateUsuario(req.body as Usuarios);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.delete('/usr/delete/:id', async (req, res) => {
    try {
        const result = await service.deleteUsuario(parseInt(req.params.id));
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;