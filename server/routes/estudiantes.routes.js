import {Router} from 'express';
import {EstudiantesController} from '../controllers/estudiantes.controller.js';

const router = Router();

router.get('/', EstudiantesController.getAllEstudiantes);
router.post('/', EstudiantesController.createEstudiante);
router.get('/:id', EstudiantesController.getEstudianteById);
router.put('/:id', EstudiantesController.updateEstudiante);
router.delete('/:id', EstudiantesController.deleteEstudiante);

export default router;