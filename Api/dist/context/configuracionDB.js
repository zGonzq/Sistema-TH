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
exports.configuracionRepo = void 0;
const connect_1 = require("../connect");
class configuracionRepo {
    constructor() {
        this.connection = new connect_1.connect();
    }
    getConfiguracion() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.execute("SELECT * FROM Configuracion");
            return rows;
        });
    }
    getConfiguracionByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.execute("SELECT * FROM Configuracion WHERE id = ?", [id]);
            return rows;
        });
    }
    createConfiguracion(configuracion) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            yield conn.execute("INSERT INTO Configuracion (usuario_id, frecuencia_registro) VALUES (?, ?)", [configuracion.usuario_id, configuracion.frecuencia_registro]);
        });
    }
    updateConfiguracion(configuracion) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            yield conn.execute("UPDATE Configuracion SET usuario_id = ?, frecuencia_registro = ? WHERE id = ?", [configuracion.usuario_id, configuracion.frecuencia_registro, configuracion.id]);
        });
    }
    deleteConfiguracion(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            yield conn.execute("DELETE FROM Configuracion WHERE id = ?", [id]);
        });
    }
}
exports.configuracionRepo = configuracionRepo;
