import {query} from "../database/connection.js";

export class NotasModel {
    static async getAllNotas(limit = 10, offset = 0){
        const result = await query('SELECT * FROM notas ORDER BY id ASC LIMIT $1 OFFSET $2', [limit, offset]);
        const total = (await query('SELECT COUNT(*) FROM notas')).rows[0].count;
        return {rows: result.rows, rowCount: total}
    }
    static async getNotaById(id){
        return await query('SELECT * FROM notas WHERE id = $1', [id]);
    }
    static async updateNota(id, estudianteId, materiaId, nota){
        return await query('UPDATE notas SET estudiante_id = $1, materia_id = $2, nota = $3 WHERE id = $4', [estudianteId, materiaId, nota, id]);
    }
    static async createNota(estudianteId, materiaId, nota){
        return await query('INSERT INTO notas (estudiante_id, materia_id, nota) VALUES ($1, $2, $3)', [estudianteId, materiaId, nota]);
    }
    static async deleteNota(id){
        return await query('DELETE FROM notas WHERE id = $1', [id]);
    }
}