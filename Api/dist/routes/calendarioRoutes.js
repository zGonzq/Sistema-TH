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
const express_1 = require("express");
const calendarioServ_1 = require("../services/calendarioServ");
const router = (0, express_1.Router)();
const service = new calendarioServ_1.calendarioServ();
router.get('/cal/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service.getCalendario();
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.get('/cal/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service.getCalendarioByID(parseInt(req.params.id));
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.post('/cal/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service.createCalendario(req.body);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.put('/cal/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service.updateCalendario(req.body);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.delete('/cal/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service.deleteCalendario(parseInt(req.params.id));
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
exports.default = router;
