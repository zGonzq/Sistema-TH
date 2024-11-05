import { Router } from "express";
import { calendarioServ } from "../services/calendarioServ";

const router = Router();
const service = new calendarioServ();

router.get('/cal/list', async (req, res) => {
    try {
        const result = await service.getCalendario();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.get('/cal/:id', async (req, res) => {
    try {
        const result = await service.getCalendarioByID(parseInt(req.params.id));
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.post('/cal/add', async (req, res) => {
    try {
        const result = await service.createCalendario(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.put('/cal/update', async (req, res) => {
    try {
        const result = await service.updateCalendario(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.delete('/cal/delete/:id', async (req, res) => {
    try {
        const result = await service.deleteCalendario(parseInt(req.params.id));
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;
