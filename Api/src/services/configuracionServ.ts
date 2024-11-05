import { Configuracion } from "../models/configuracion";
import { configuracionRepo } from "../context/configuracionDB";

export class configuracionServ {

    db: configuracionRepo = new configuracionRepo();

    async getConfiguracion() {
        return await this.db.getConfiguracion();
    }

    async getConfiguracionByID(id: number) {
        return await this.db.getConfiguracionByID(id);
    }

    async createConfiguracion(configuracion: Configuracion) {
        return await this.db.createConfiguracion(configuracion);
    }

    async updateConfiguracion(configuracion: Configuracion) {
        return await this.db.updateConfiguracion(configuracion);
    }

    async deleteConfiguracion(id: number) {
        return await this.db.deleteConfiguracion(id);
    }
}