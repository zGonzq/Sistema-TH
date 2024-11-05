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
exports.historicoServ = void 0;
const historicoDB_1 = require("../context/historicoDB");
class historicoServ {
    constructor() {
        this.db = new historicoDB_1.historicoRepo();
    }
    getHistorico() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.getHistorico();
        });
    }
    getHistoricoByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.getHistoricoByID(id);
        });
    }
    createHistorico(historico) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.createHistorico(historico);
        });
    }
    updateHistorico(historico) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.updateHistorico(historico);
        });
    }
    deleteHistorico(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.deleteHistorico(id);
        });
    }
}
exports.historicoServ = historicoServ;
