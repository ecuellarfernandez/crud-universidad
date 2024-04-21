import {Router} from 'express';
import NotasController from '../controllers/NotasController.js';

const router = Router();

router.get('/', NotasController.getAllNotas);
router.post('/', NotasController.createNota);
router.get('/:id', NotasController.getNotaById);
router.put('/:id', NotasController.updateNota);
router.delete('/:id', NotasController.deleteNota);

export default router;