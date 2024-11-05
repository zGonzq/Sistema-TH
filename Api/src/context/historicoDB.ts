import { connect } from "../connect";
import { IHistorico } from "../interface/iHistorico";
import mysql from "mysql2/promise";


export class historicoRepo {
    private connection: connect;
    constructor() {
        this.connection = new connect();
    }

    async getHistorico(): Promise<IHistorico[]> {
        const conn = await this.connection.connect();
        const [rows] = await conn.execute("SELECT * FROM Historico");
        return rows as IHistorico[];
    }

    async getHistoricoByID(id: number): Promise<mysql.RowDataPacket> {
        const conn = await this.connection.connect();
        const [rows] = await conn.execute("SELECT * FROM Historico WHERE id = ?", [id]);
        return rows as mysql.RowDataPacket;
    }

    async createHistorico(historico: IHistorico): Promise<void> {
        const conn = await this.connection.connect();
        await conn.execute("INSERT INTO Historico (fecha, humedad, temperatura, orquidea, configuracion_id) VALUES (?, ?, ?, ?, ?)", [historico.fecha, historico.humedad, historico.temperatura, historico.orquidea, historico.configuracion_id]);
    }

    async updateHistorico(historico: IHistorico): Promise<void> {
        const conn = await this.connection.connect();
        await conn.execute("UPDATE Historico SET fecha = ?, humedad = ?, temperatura = ?, orquidea = ?, configuracion_id = ? WHERE id = ?", [historico.fecha, historico.humedad, historico.temperatura, historico.orquidea, historico.configuracion_id, historico.id]);
    }

    async deleteHistorico(id: number): Promise<void> {
        const conn = await this.connection.connect();
        await conn.execute("DELETE FROM Historico WHERE id = ?", [id]);
    }
}