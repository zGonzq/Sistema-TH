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
exports.UserController = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.render('users/create');
        });
    }
    createUserConfirm(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                yield axios_1.default.post(`${config_1.API_URL}/users`, { email, password });
                res.redirect('/users');
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al crear usuario: ' + error);
            }
        });
    }
    editUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const response = yield axios_1.default.get(`${config_1.API_URL}/users/${id}`);
                const data = response.data;
                res.render('users/edit', { data });
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al obtener datos del usuario: ' + error);
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const { email, password } = req.body;
                yield axios_1.default.put(`${config_1.API_URL}/users/${id}`, { email, password });
                res.redirect('/users');
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al actualizar usuario: ' + error);
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield axios_1.default.delete(`${config_1.API_URL}/users/${id}`);
                res.redirect('/users');
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al eliminar usuario: ' + error);
            }
        });
    }
}
exports.UserController = UserController;
