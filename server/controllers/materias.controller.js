import {handleRequest} from "../utils/handleRequest.js";
import {MateriasModel} from "../models/materias.model.js";

export class MateriasController{
    static async getAllMaterias(req, res){
        const page = req.query.page;
        const limit = req.query.per_page;
        const offset = (page - 1) * limit;
        await handleRequest(MateriasModel.getAllMaterias, [limit, offset], res);
    }

    static async getMateriaById(req, res){
        const id = req.params.id;
        await handleRequest(MateriasModel.getMateriaById, [id], res);
    }

    static async updateMateria(req, res){
        const id = req.params.id;
        const {nombre, descripcion} = req.body;
        await handleRequest(MateriasModel.updateMateria, [id, nombre, descripcion], res);
    }

    static async createMateria(req, res){
        const {nombre, descripcion} = req.body;
        await handleRequest(MateriasModel.createMateria, [nombre, descripcion], res);
    }

    static async deleteMateria(req, res){
        const id = req.params.id;
        await handleRequest(MateriasModel.deleteMateria, [id], res);
    }
}