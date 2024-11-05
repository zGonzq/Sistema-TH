import { IConfiguracion } from "../interface/iConfiguracion";
import { connect } from "../connect";
import mysql from "mysql2/promise";

export class configuracionRepo {
    private connection: connect;
    constructor() {
        this.connection = new connect();
    }

    async getConfiguracion(): Promise<IConfiguracion[]> {
        const conn = await this.connection.connect();
        const [rows] = await conn.execute("SELECT * FROM Configuracion");
        return rows as IConfiguracion[];
    }

    async getConfiguracionByID(id: number): Promise<mysql.RowDataPacket> {
        const conn = await this.connection.connect();
        const [rows] = await conn.execute("SELECT * FROM Configuracion WHERE id = ?", [id]);
        return rows as mysql.RowDataPacket;
    }

    async createConfiguracion(configuracion: IConfiguracion): Promise<void> {
        const conn = await this.connection.connect();
        await conn.execute("INSERT INTO Configuracion (usuario_id, frecuencia_registro) VALUES (?, ?)", [configuracion.usuario_id, configuracion.frecuencia_registro]);
    }

    async updateConfiguracion(configuracion: IConfiguracion): Promise<void> {
        const conn = await this.connection.connect();
        await conn.execute("UPDATE Configuracion SET usuario_id = ?, frecuencia_registro = ? WHERE id = ?", [configuracion.usuario_id, configuracion.frecuencia_registro, configuracion.id]);
    }

    async deleteConfiguracion(id: number): Promise<void> {
        const conn = await this.connection.connect();
        await conn.execute("DELETE FROM Configuracion WHERE id = ?", [id]);
    }
}