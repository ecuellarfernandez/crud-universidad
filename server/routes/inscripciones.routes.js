import {Router} from 'express';
import {InscripcionesController} from '../controllers/inscripciones.controller.js';

const router = Router();

router.get('/', InscripcionesController.getAllInscripciones);
router.post('/', InscripcionesController.createInscripcion);
router.get('/:id', InscripcionesController.getInscripcionById);
router.delete('/:id', InscripcionesController.deleteInscripcion);

export default router;