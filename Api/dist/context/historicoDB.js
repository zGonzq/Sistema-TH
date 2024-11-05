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
exports.historicoRepo = void 0;
const connect_1 = require("../connect");
class historicoRepo {
    constructor() {
        this.connection = new connect_1.connect();
    }
    getHistorico() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.execute("SELECT * FROM Historico");
            return rows;
        });
    }
    getHistoricoByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.execute("SELECT * FROM Historico WHERE id = ?", [id]);
            return rows;
        });
    }
    createHistorico(historico) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            yield conn.execute("INSERT INTO Historico (fecha, humedad, temperatura, orquidea, configuracion_id) VALUES (?, ?, ?, ?, ?)", [historico.fecha, historico.humedad, historico.temperatura, historico.orquidea, historico.configuracion_id]);
        });
    }
    updateHistorico(historico) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            yield conn.execute("UPDATE Historico SET fecha = ?, humedad = ?, temperatura = ?, orquidea = ?, configuracion_id = ? WHERE id = ?", [historico.fecha, historico.humedad, historico.temperatura, historico.orquidea, historico.configuracion_id, historico.id]);
        });
    }
    deleteHistorico(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            yield conn.execute("DELETE FROM Historico WHERE id = ?", [id]);
        });
    }
}
exports.historicoRepo = historicoRepo;
