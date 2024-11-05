import { Router } from "express";
import { configuracionRepo } from "../context/configuracionDB";

const router = Router();
const db = new configuracionRepo();

router.get('/cfg/list', async (req, res) => {
    try {
        const result = await db.getConfiguracion();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.get('/cfg/:id', async (req, res) => {
    try {
        const result = await db.getConfiguracionByID(parseInt(req.params.id));
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.post('/cfg/add', async (req, res) => {
    try {
        await db.createConfiguracion(req.body);
        res.json({ message: 'Configuracion created' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.put('/cfg/update', async (req, res) => {
    try {
        await db.updateConfiguracion(req.body);
        res.json({ message: 'Configuracion updated' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.delete('/cfg/delete/:id', async (req, res) => {
    try {
        await db.deleteConfiguracion(parseInt(req.params.id));
        res.json({ message: 'Configuracion deleted' });
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;