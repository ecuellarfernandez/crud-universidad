import {handleRequest} from "../utils/handleRequest.js";
import {EstudiantesModel} from "../models/estudiantes.model.js";
export class EstudiantesController{
    static async getAllEstudiantes(req, res){
        await handleRequest(EstudiantesModel.getAllEstudiantes, [], res);
    }
    static async getEstudianteById(req, res){
        const id = req.params.id;
        await handleRequest(EstudiantesModel.getEstudianteById, [id], res);
    };
    static async updateEstudiante(req, res){
        const id = req.params.id;
        const {nombre_completo, fecha_nacimiento, carrera} = req.body;
        await handleRequest(EstudiantesModel.updateEstudiante, [id, nombre_completo, fecha_nacimiento, carrera], res);
    }
    static async createEstudiante(req, res){
        const {nombre_completo, fecha_nacimiento, carrera} = req.body
        await handleRequest(EstudiantesModel.createEstudiante, [nombre_completo, fecha_nacimiento, carrera], res);
    }
    static async deleteEstudiante(req, res){
        const id = req.params.id;
        await handleRequest(EstudiantesModel.deleteEstudiante, [id], res);
    }
}