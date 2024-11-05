import { usuarioRepo } from "../context/usuariosDB";
import { Usuarios } from "../models/usuarios";

export class usuariosServ {

    db: usuarioRepo = new usuarioRepo();

    async getUsuarios() {
        return await this.db.getUsuarios();
    }

    async getUsuarioByID(id: number) {
        return await this.db.getUsuarioByID(id);
    }

    async createUsuario(usuario: Usuarios) {
        return await this.db.createUsuario(usuario);
    }

    async updateUsuario(usuario: Usuarios) {
        return await this.db.updateUsuario(usuario);
    }

    async deleteUsuario(id: number) {
        return await this.db.deleteUsuario(id);
    }
}