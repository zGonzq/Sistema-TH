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
exports.usuariosServ = void 0;
const usuariosDB_1 = require("../context/usuariosDB");
class usuariosServ {
    constructor() {
        this.db = new usuariosDB_1.usuarioRepo();
    }
    getUsuarios() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.getUsuarios();
        });
    }
    getUsuarioByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.getUsuarioByID(id);
        });
    }
    createUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.createUsuario(usuario);
        });
    }
    updateUsuario(usuario) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.updateUsuario(usuario);
        });
    }
    deleteUsuario(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.deleteUsuario(id);
        });
    }
}
exports.usuariosServ = usuariosServ;
