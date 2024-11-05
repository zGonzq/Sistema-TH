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
exports.CalendarioController = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
class CalendarioController {
    getCalendario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${config_1.API_URL}/api/cal/list`);
                const calendario = response.data;
                res.render('calendario/list', { calendario });
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al obtener el calendario: ' + error);
            }
        });
    }
    getCalendarioById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const response = yield axios_1.default.get(`${config_1.API_URL}/api/cal/${id}`);
                const eventoCalendario = response.data;
                res.render('calendario/detail', { eventoCalendario });
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al obtener el evento del calendario: ' + error);
            }
        });
    }
    createCalendario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const calendario = req.body;
                yield axios_1.default.post(`${config_1.API_URL}/api/cal/add`, calendario);
                res.redirect('/calendario');
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al crear el evento del calendario: ' + error);
            }
        });
    }
    updateCalendario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const calendario = Object.assign(Object.assign({}, req.body), { id: req.params.id });
                yield axios_1.default.put(`${config_1.API_URL}/api/cal/update`, calendario);
                res.redirect(`/calendario/${calendario.id}`);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al actualizar el evento del calendario: ' + error);
            }
        });
    }
    deleteCalendario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield axios_1.default.delete(`${config_1.API_URL}/api/cal/delete/${id}`);
                res.redirect('/calendario');
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al eliminar el evento del calendario: ' + error);
            }
        });
    }
}
exports.CalendarioController = CalendarioController;
