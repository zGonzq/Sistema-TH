import { Request, Response } from 'express';
import axios from 'axios';
import { API_URL } from '../config';

export class CalendarioController {

    async getCalendario(req: Request, res: Response): Promise<void> {
        try {
            const response = await axios.get(`${API_URL}/api/cal/list`);
            const calendario = response.data;
            res.render('calendario/list', { calendario });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener el calendario: ' + error);
        }
    }

    async getCalendarioById(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const response = await axios.get(`${API_URL}/api/cal/${id}`);
            const eventoCalendario = response.data;
            res.render('calendario/detail', { eventoCalendario });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener el evento del calendario: ' + error);
        }
    }

    async createCalendario(req: Request, res: Response): Promise<void> {
        try {
            const calendario = req.body;
            await axios.post(`${API_URL}/api/cal/add`, calendario);
            res.redirect('/calendario');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear el evento del calendario: ' + error);
        }
    }

    async updateCalendario(req: Request, res: Response): Promise<void> {
        try {
            const calendario = { ...req.body, id: req.params.id };
            await axios.put(`${API_URL}/api/cal/update`, calendario);
            res.redirect(`/calendario/${calendario.id}`);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al actualizar el evento del calendario: ' + error);
        }
    }

    async deleteCalendario(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            await axios.delete(`${API_URL}/api/cal/delete/${id}`);
            res.redirect('/calendario');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al eliminar el evento del calendario: ' + error);
        }
    }
}
