import {Router} from 'express';
import {MateriasController} from '../controllers/materias.controller.js';

const router = Router();

router.get('/', MateriasController.getAllMaterias);
router.post('/', MateriasController.createMateria);
router.get('/:id', MateriasController.getMateriaById);
router.put('/:id', MateriasController.updateMateria);
router.delete('/:id', MateriasController.deleteMateria);

export default router;