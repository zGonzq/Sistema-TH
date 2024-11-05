import { historicoRepo } from "../context/historicoDB";
import { Historico } from "../models/historico";

export class historicoServ {

    db: historicoRepo = new historicoRepo();

    async getHistorico() {
        return await this.db.getHistorico();
    }

    async getHistoricoByID(id: number) {
        return await this.db.getHistoricoByID(id);
    }

    async createHistorico(historico: Historico) {
        return await this.db.createHistorico(historico);
    }

    async updateHistorico(historico: Historico) {
        return await this.db.updateHistorico(historico);
    }

    async deleteHistorico(id: number) {
        return await this.db.deleteHistorico(id);
    }
}