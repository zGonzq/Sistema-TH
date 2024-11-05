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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
class UsuarioController {
    getUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${config_1.API_URL}/api/usr/list`);
                const usuarios = response.data;
                res.render('usuarios/list', { usuarios });
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al obtener usuarios: ' + error);
            }
        });
    }
    getUsuarioById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const response = yield axios_1.default.get(`${config_1.API_URL}/api/usr/${id}`);
                const usuario = response.data;
                res.render('usuarios/detail', { usuario });
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al obtener el usuario: ' + error);
            }
        });
    }
    createUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = req.body;
                yield axios_1.default.post(`${config_1.API_URL}/api/usr/add`, usuario);
                res.redirect('/usuarios');
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al crear el usuario: ' + error);
            }
        });
    }
    updateUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const usuario = Object.assign(Object.assign({}, req.body), { id: req.params.id });
                yield axios_1.default.put(`${config_1.API_URL}/api/usr/update/${usuario.id}`, usuario);
                res.redirect(`/usuarios/${usuario.id}`);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al actualizar el usuario: ' + error);
            }
        });
    }
    deleteUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield axios_1.default.delete(`${config_1.API_URL}/api/usr/delete/${id}`);
                res.redirect('/usuarios');
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al eliminar el usuario: ' + error);
            }
        });
    }
}
exports.UsuarioController = UsuarioController;
