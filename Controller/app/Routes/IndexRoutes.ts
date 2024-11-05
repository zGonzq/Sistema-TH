import { Router } from 'express';
import { HistoricoController } from '../controller/HistoricoController';
import { UsuarioController } from '../controller/UsuarioController';
import { CalendarioController } from '../controller/CalendarioController';
import { ConfiguracionController } from '../controller/ConfiguracionController';

const router = Router();
const historicoController = new HistoricoController();
const usuarioController = new UsuarioController();
const calendarioController = new CalendarioController();
const configuracionController = new ConfiguracionController();

router.get('/usuarios', usuarioController.getUsuarios.bind(usuarioController));
router.get('/usuarios/:id', usuarioController.getUsuarioById.bind(usuarioController));
router.post('/usuarios', usuarioController.createUsuario.bind(usuarioController));
router.put('/usuarios/:id', usuarioController.updateUsuario.bind(usuarioController));
router.delete('/usuarios/:id', usuarioController.deleteUsuario.bind(usuarioController));

router.get('/historico', historicoController.getHistorico.bind(historicoController));
router.get('/historico/:id', historicoController.getHistoricoById.bind(historicoController));
router.post('/historico', historicoController.createHistorico.bind(historicoController));
router.put('/historico/:id', historicoController.updateHistorico.bind(historicoController));
router.delete('/historico/:id', historicoController.deleteHistorico.bind(historicoController));

router.get('/calendario', calendarioController.getCalendario.bind(calendarioController));
router.get('/calendario/:id', calendarioController.getCalendarioById.bind(calendarioController));
router.post('/calendario', calendarioController.createCalendario.bind(calendarioController));
router.put('/calendario/:id', calendarioController.updateCalendario.bind(calendarioController));
router.delete('/calendario/:id', calendarioController.deleteCalendario.bind(calendarioController));

router.get('/configuracion', configuracionController.getConfiguracion.bind(configuracionController));
router.get('/configuracion/:id', configuracionController.getConfiguracionById.bind(configuracionController));
router.post('/configuracion', configuracionController.createConfiguracion.bind(configuracionController));
router.put('/configuracion/:id', configuracionController.updateConfiguracion.bind(configuracionController));
router.delete('/configuracion/:id', configuracionController.deleteConfiguracion.bind(configuracionController));


export default router;
