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
const usuariosServ_1 = require("../services/usuariosServ");
const router = (0, express_1.Router)();
const service = new usuariosServ_1.usuariosServ();
router.get('/usr/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service.getUsuarios();
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.get('/usr/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service.getUsuarioByID(parseInt(req.params.id));
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.post('/usr/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service.createUsuario(req.body);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.put('/usr/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service.updateUsuario(req.body);
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.delete('/usr/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield service.deleteUsuario(parseInt(req.params.id));
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
exports.default = router;
