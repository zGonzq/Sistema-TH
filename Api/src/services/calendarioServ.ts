import { calendarioRepo } from "../context/calendarioDB";
import { Calendario } from "../models/calendario";

export class calendarioServ {

    db: calendarioRepo = new calendarioRepo();

    async getCalendario() {
        return await this.db.getCalendario();
    }

    async getCalendarioByID(id: number) {
        return await this.db.getCalendarioByID(id);
    }

    async createCalendario(calendario: Calendario) {
        return await this.db.createCalendario(calendario);
    }

    async updateCalendario(calendario: Calendario) {
        return await this.db.updateCalendario(calendario);
    }

    async deleteCalendario(id: number) {
        return await this.db.deleteCalendario(id);
    }
}