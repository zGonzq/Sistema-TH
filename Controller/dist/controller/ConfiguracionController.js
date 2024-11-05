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
exports.ConfiguracionController = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
class ConfiguracionController {
    getConfiguracion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${config_1.API_URL}/api/cfg/list`);
                const configuracion = response.data;
                res.render('configuracion/list', { configuracion });
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al obtener la configuración: ' + error);
            }
        });
    }
    getConfiguracionById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const response = yield axios_1.default.get(`${config_1.API_URL}/api/cfg/${id}`);
                const config = response.data;
                res.render('configuracion/detail', { config });
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al obtener la configuración: ' + error);
            }
        });
    }
    createConfiguracion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const configuracion = req.body;
                yield axios_1.default.post(`${config_1.API_URL}/api/cfg/add`, configuracion);
                res.redirect('/configuracion');
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al crear la configuración: ' + error);
            }
        });
    }
    updateConfiguracion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const configuracion = Object.assign(Object.assign({}, req.body), { id: req.params.id });
                yield axios_1.default.put(`${config_1.API_URL}/api/cfg/update`, configuracion);
                res.redirect(`/configuracion/${configuracion.id}`);
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al actualizar la configuración: ' + error);
            }
        });
    }
    deleteConfiguracion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                yield axios_1.default.delete(`${config_1.API_URL}/api/cfg/delete/${id}`);
                res.redirect('/configuracion');
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al eliminar la configuración: ' + error);
            }
        });
    }
}
exports.ConfiguracionController = ConfiguracionController;