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
exports.ReportController = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../config");
class ReportController {
    lateEntryReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${config_1.API_URL}/reports/late-entries`);
                const data = response.data;
                res.render('reports/lateEntries', { data });
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al generar reporte de entradas atrasadas: ' + error);
            }
        });
    }
    earlyExitReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${config_1.API_URL}/reports/early-exits`);
                const data = response.data;
                res.render('reports/earlyExits', { data });
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al generar reporte de salidas anticipadas: ' + error);
            }
        });
    }
    absenceReport(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get(`${config_1.API_URL}/reports/absences`);
                const data = response.data;
                res.render('reports/absences', { data });
            }
            catch (error) {
                console.error(error);
                res.status(500).send('Error al generar reporte de inasistencias: ' + error);
            }
        });
    }
}
exports.ReportController = ReportController;
