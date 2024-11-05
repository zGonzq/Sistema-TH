import mysql from "mysql2/promise";

export class connect {
  public async connect(): Promise<mysql.Connection> {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "gonza123",
      database: "orquideas",
    });
    return connection;
  }
}