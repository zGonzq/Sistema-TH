import { Request, Response } from 'express';
import axios from 'axios';
import { API_URL } from '../config';

export class HistoricoController {
    

    async getHistorico(req: Request, res: Response): Promise<void> {
        try {
            const response = await axios.get(`${API_URL}/api/hist/list`);
            const historico = response.data;
            res.render('historico/list', { historico });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener histórico: ' + error);
        }
    }


    async getHistoricoById(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const response = await axios.get(`${API_URL}/api/hist/${id}`);
            const registroHistorico = response.data;
            res.render('historico/detail', { registroHistorico });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener el registro histórico: ' + error);
        }
    }


    async createHistorico(req: Request, res: Response): Promise<void> {
        try {
            const historico = req.body;
            await axios.post(`${API_URL}/api/hist/add`, historico);
            res.redirect('/historico');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear el registro histórico: ' + error);
        }
    }

    async updateHistorico(req: Request, res: Response): Promise<void> {
        try {
            const historico = { ...req.body, id: req.params.id };
            await axios.put(`${API_URL}/api/hist/update/${historico.id}`, historico);
            res.redirect(`/historico/${historico.id}`);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al actualizar el registro histórico: ' + error);
        }
    }

    async deleteHistorico(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            await axios.delete(`${API_URL}/api/hist/delete/ ${id}`);
            res.redirect('/historico');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al eliminar el registro histórico: ' + error);
        }
    }
}
