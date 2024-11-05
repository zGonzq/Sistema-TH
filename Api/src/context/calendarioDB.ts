import mysql from "mysql2/promise";
import { ICalendario } from "../interface/iCalendario";
import { connect } from "../connect";

export class calendarioRepo {
    private connection: connect;
    constructor() {
        this.connection = new connect();
    }

    async getCalendario(): Promise<ICalendario[]> {
        const conn = await this.connection.connect();
        const [rows] = await conn.execute("SELECT * FROM Calendario");
        return rows as ICalendario[];
    }

    async getCalendarioByID(id: number): Promise<mysql.RowDataPacket> {
        const conn = await this.connection.connect();
        const [rows] = await conn.execute("SELECT * FROM Calendario WHERE id = ?", [id]);
        return rows as mysql.RowDataPacket;
    }

    async createCalendario(calendario: ICalendario): Promise<void> {
        const conn = await this.connection.connect();
        await conn.execute("INSERT INTO Calendario (fecha, riego, orquidea, usuario_id) VALUES (?, ?, ?, ?)", [calendario.fecha, calendario.riego, calendario.orquidea, calendario.usuario_id]);
    }

    async updateCalendario(calendario: ICalendario): Promise<void> {
        const conn = await this.connection.connect();
        await conn.execute("UPDATE Calendario SET fecha = ?, riego = ?, orquidea = ?, usuario_id = ? WHERE id = ?", [calendario.fecha, calendario.riego, calendario.orquidea, calendario.usuario_id, calendario.id]);
    }

    async deleteCalendario(id: number): Promise<void> {
        const conn = await this.connection.connect();
        await conn.execute("DELETE FROM Calendario WHERE id = ?", [id]);
    }
}