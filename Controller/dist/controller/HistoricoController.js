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
exports.HistoricoController = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
class HistoricoController {
    getHistorico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${config_1.API_URL}/api/hist/list`);
                const historico = response.data;
                res.render('historico/list', { historico });
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al obtener histórico: ' + error);
            }
        });
    }
    getHistoricoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const response = yield axios_1.default.get(`${config_1.API_URL}/api/hist/${id}`);
                const registroHistorico = response.data;
                res.render('historico/detail', { registroHistorico });
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al obtener el registro histórico: ' + error);
            }
        });
    }
    createHistorico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const historico = req.body;
                yield axios_1.default.post(`${config_1.API_URL}/api/hist/add`, historico);
                res.redirect('/historico');
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al crear el registro histórico: ' + error);
            }
        });
    }
    updateHistorico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const historico = Object.assign(Object.assign({}, req.body), { id: req.params.id });
                yield axios_1.default.put(`${config_1.API_URL}/api/hist/update/${historico.id}`, historico);
                res.redirect(`/historico/${historico.id}`);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al actualizar el registro histórico: ' + error);
            }
        });
    }
    deleteHistorico(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield axios_1.default.delete(`${config_1.API_URL}/api/hist/delete/${id}`);
                res.redirect('/historico');
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al eliminar el registro histórico: ' + error);
            }
        });
    }
}
exports.HistoricoController = HistoricoController;
