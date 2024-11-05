import { connect } from "../connect";
import { IUsuarios } from "../interface/iUsuarios";
import mysql from "mysql2/promise";

export class usuarioRepo {
    private connection: connect;
    constructor() {
        this.connection = new connect();
    }

    async getUsuarios(): Promise<IUsuarios[]> {
        const conn = await this.connection.connect();
        const [rows] = await conn.execute("SELECT * FROM Usuarios");
        return rows as IUsuarios[];
    }

    async getUsuarioByID(id: number): Promise<mysql.RowDataPacket> {
        const conn = await this.connection.connect();
        const [rows] = await conn.execute("SELECT * FROM Usuarios WHERE id = ?", [id]);
        return rows as mysql.RowDataPacket;
    }

    async createUsuario(usuario: IUsuarios): Promise<void> {
        const conn = await this.connection.connect();
        await conn.execute("INSERT INTO Usuarios (nombre, correo, rut, password) VALUES (?, ?, ?, ?)", [usuario.nombre, usuario.correo, usuario.rut, usuario.password]);
    }

    async updateUsuario(usuario: IUsuarios): Promise<void> {
        const conn = await this.connection.connect();
        await conn.execute("UPDATE Usuarios SET nombre = ?, correo = ?, rut = ?, password = ? WHERE id = ?", [usuario.nombre, usuario.correo, usuario.rut, usuario.password, usuario.id]);
    }

    async deleteUsuario(id: number): Promise<void> {
        const conn = await this.connection.connect();
        await conn.execute("DELETE FROM Usuarios WHERE id = ?", [id]);
    }
}