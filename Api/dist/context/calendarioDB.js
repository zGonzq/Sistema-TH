"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calendarioRepo = void 0;
const connect_1 = require("../connect");
class calendarioRepo {
    constructor() {
        this.connection = new connect_1.connect();
    }
    getCalendario() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.execute("SELECT * FROM Calendario");
            return rows;
        });
    }
    getCalendarioByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.execute("SELECT * FROM Calendario WHERE id = ?", [id]);
            return rows;
        });
    }
    createCalendario(calendario) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            yield conn.execute("INSERT INTO Calendario (fecha, riego, orquidea, usuario_id) VALUES (?, ?, ?, ?)", [calendario.fecha, calendario.riego, calendario.orquidea, calendario.usuario_id]);
        });
    }
    updateCalendario(calendario) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            yield conn.execute("UPDATE Calendario SET fecha = ?, riego = ?, orquidea = ?, usuario_id = ? WHERE id = ?", [calendario.fecha, calendario.riego, calendario.orquidea, calendario.usuario_id, calendario.id]);
        });
    }
    deleteCalendario(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            yield conn.execute("DELETE FROM Calendario WHERE id = ?", [id]);
        });
    }
}
exports.calendarioRepo = calendarioRepo;
