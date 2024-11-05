import { Request, Response } from 'express';
import axios from 'axios';
import { API_URL } from '../config';

export class ConfiguracionController {

    async getConfiguracion(req: Request, res: Response): Promise<void> {
        try {
            const response = await axios.get(`${API_URL}/api/cfg/list`);
            const configuracion = response.data;
            res.render('configuracion/list', { configuracion });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener la configuración: ' + error);
        }
    }

    async getConfiguracionById(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const response = await axios.get(`${API_URL}/api/cfg/${id}`);
            const config = response.data;
            res.render('configuracion/detail', { config });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener la configuración: ' + error);
        }
    }

    async createConfiguracion(req: Request, res: Response): Promise<void> {
        try {
            const configuracion = req.body;
            await axios.post(`${API_URL}/api/cfg/add`, configuracion);
            res.redirect('/configuracion');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear la configuración: ' + error);
        }
    }

    async updateConfiguracion(req: Request, res: Response): Promise<void> {
        try {
            const configuracion = { ...req.body, id: req.params.id };
            await axios.put(`${API_URL}/api/cfg/update`, configuracion);
            res.redirect(`/configuracion/${configuracion.id}`);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al actualizar la configuración: ' + error);
        }
    }

    async deleteConfiguracion(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            await axios.delete(`${API_URL}/api/cfg/delete/${id}`);
            res.redirect('/configuracion');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al eliminar la configuración: ' + error);
        }
    }
}
