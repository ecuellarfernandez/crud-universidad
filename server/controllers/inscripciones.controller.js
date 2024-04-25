import {handleRequest} from "../utils/handleRequest.js";
import {InscripcionesModel} from "../models/inscripciones.model.js";

export class InscripcionesController{
    static async getAllInscripciones(req, res){
        const page = req.query.page;
        const limit = req.query.per_page;
        const offset = (page - 1) * limit;
        await handleRequest(InscripcionesModel.getAllInscripciones, [limit, offset], res);
    }

    static async getInscripcionById(req, res){
        const id = req.params.id;
        await handleRequest(InscripcionesModel.getInscripcionById, [id], res);
    }

    static async createInscripcion(req, res){
        const {estudianteId, materiaId} = req.body;
        await handleRequest(InscripcionesModel.createInscripcion, [estudianteId, materiaId], res);
    }

    static async deleteInscripcion(req, res){
        const id = req.params.id;
        await handleRequest(InscripcionesModel.deleteInscripcion, [id], res);
    }
}