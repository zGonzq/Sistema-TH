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
const configuracionDB_1 = require("../context/configuracionDB");
const router = (0, express_1.Router)();
const db = new configuracionDB_1.configuracionRepo();
router.get('/cfg/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db.getConfiguracion();
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.get('/cfg/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db.getConfiguracionByID(parseInt(req.params.id));
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.post('/cfg/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db.createConfiguracion(req.body);
        res.json({ message: 'Configuracion created' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.put('/cfg/update', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db.updateConfiguracion(req.body);
        res.json({ message: 'Configuracion updated' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
router.delete('/cfg/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db.deleteConfiguracion(parseInt(req.params.id));
        res.json({ message: 'Configuracion deleted' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
exports.default = router;
