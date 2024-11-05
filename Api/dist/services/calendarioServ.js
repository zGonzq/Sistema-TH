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
exports.calendarioServ = void 0;
const calendarioDB_1 = require("../context/calendarioDB");
class calendarioServ {
    constructor() {
        this.db = new calendarioDB_1.calendarioRepo();
    }
    getCalendario() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.getCalendario();
        });
    }
    getCalendarioByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.getCalendarioByID(id);
        });
    }
    createCalendario(calendario) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.createCalendario(calendario);
        });
    }
    updateCalendario(calendario) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.updateCalendario(calendario);
        });
    }
    deleteCalendario(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.db.deleteCalendario(id);
        });
    }
}
exports.calendarioServ = calendarioServ;
