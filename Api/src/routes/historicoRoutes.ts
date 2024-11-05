import { Router } from "express";
import { historicoServ } from "../services/historicoServ";

const router = Router();
const service = new historicoServ();

router.get('/hist/list', async (req, res) => {
    try {
        const result = await service.getHistorico();
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.get('/hist/:id', async (req, res) => {
    try {
        const result = await service.getHistoricoByID(parseInt(req.params.id));
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.post('/hist/add', async (req, res) => {
    try {
        const result = await service.createHistorico(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.put('/hist/update', async (req, res) => {
    try {
        const result = await service.updateHistorico(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.delete('/hist/delete/:id', async (req, res) => {
    try {
        const result = await service.deleteHistorico(parseInt(req.params.id));
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;