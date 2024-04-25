import {query} from "../database/connection.js";

export class InscripcionesModel {
    static async getAllInscripciones(limit = 10, offset= 0){
        const result = await query('SELECT * FROM inscripciones ORDER BY id ASC LIMIT $1 OFFSET $2', [limit, offset]);
        const total = (await query('SELECT COUNT(*) FROM inscripciones')).rows[0].count;
        return {rows: result.rows, rowCount: total}
    }
    static async getInscripcionById(id){
        return await query('SELECT * FROM inscripciones WHERE id = $1', [id]);
    }
    static async createInscripcion(estudianteId, materiaId){
        return await query('INSERT INTO inscripciones (estudiante_id, materia_id) VALUES ($1, $2)', [estudianteId, materiaId]);
    }
    static async deleteInscripcion(id){
        return await query('DELETE FROM inscripciones WHERE id = $1', [id]);
    }
}