import {handleRequest} from "../utils/handleRequest.js";
import {NotasModel} from "../models/notas.model.js";

export class NotasController{
    static async getAllNotas(req, res){
        const page = req.query.page;
        const limit = req.query.per_page;
        const offset = (page - 1) * limit;
        await handleRequest(NotasModel.getAllNotas, [limit, offset], res);
    }

    static async getNotaById(req, res){
        const id = req.params.id;
        await handleRequest(NotasModel.getNotaById, [id], res);
    }

    static async updateNota(req, res){
        const id = req.params.id;
        const {estudianteId, materiaId, nota} = req.body;
        await handleRequest(NotasModel.updateNota, [id, estudianteId, materiaId, nota], res);
    }

    static async createNota(req, res){
        const {estudianteId, materiaId, nota} = req.body;
        await handleRequest(NotasModel.createNota, [estudianteId, materiaId, nota], res);
    }

    static async deleteNota(req, res){
        const id = req.params.id;
        await handleRequest(NotasModel.deleteNota, [id], res);
    }
}