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
exports.usuarioRepo = void 0;
const connect_1 = require("../connect");
class usuarioRepo {
    constructor() {
        this.connection = new connect_1.connect();
    }
    getUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.execute("SELECT * FROM Usuarios");
            return rows;
        });
    }
    getUsuarioByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            const [rows] = yield conn.execute("SELECT * FROM Usuarios WHERE id = ?", [id]);
            return rows;
        });
    }
    createUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            yield conn.execute("INSERT INTO Usuarios (nombre, correo, rut, password) VALUES (?, ?, ?, ?)", [usuario.nombre, usuario.correo, usuario.rut, usuario.password]);
        });
    }
    updateUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            yield conn.execute("UPDATE Usuarios SET nombre = ?, correo = ?, rut = ?, password = ? WHERE id = ?", [usuario.nombre, usuario.correo, usuario.rut, usuario.password, usuario.id]);
        });
    }
    deleteUsuario(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const conn = yield this.connection.connect();
            yield conn.execute("DELETE FROM Usuarios WHERE id = ?", [id]);
        });
    }
}
exports.usuarioRepo = usuarioRepo;
