import { Request, Response } from 'express';
import axios from 'axios';
import { API_URL } from '../config';

export class UsuarioController {
    

    async getUsuarios(req: Request, res: Response): Promise<void> {
        try {
            const response = await axios.get(`${API_URL}/api/usr`);
            const usuarios = response.data;
            res.render('usuarios/list', { usuarios });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener usuarios: ' + error);
        }
    }

    async getUsuarioById(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            const response = await axios.get(`${API_URL}/api/usr/${id}`);
            const usuario = response.data;
            res.render('usuarios/detail', { usuario });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener el usuario: ' + error);
        }
    }

    async createUsuario(req: Request, res: Response): Promise<void> {
        try {
            const usuario = req.body;
            await axios.post(`${API_URL}/api/usr/add`, usuario);
            res.redirect('/usuarios');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al crear el usuario: ' + error);
        }
    }


    async updateUsuario(req: Request, res: Response): Promise<void> {
        try {
            const usuario = { ...req.body, id: req.params.id };
            await axios.put(`${API_URL}/api/usr/update${usuario.id}`, usuario);
            res.redirect(`/usuarios/${usuario.id}`);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al actualizar el usuario: ' + error);
        }
    }


    async deleteUsuario(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;
            await axios.delete(`${API_URL}/api/usr/delete${id}`);
            res.redirect('/usuarios');
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al eliminar el usuario: ' + error);
        }
    }
}
