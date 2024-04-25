import {query} from "../database/connection.js";

export class MateriasModel {
    static async getAllMaterias(limit = 10, offset = 0){
        const result = await query('SELECT * FROM materias ORDER BY id ASC LIMIT $1 OFFSET $2', [limit, offset]);
        const total = (await query('SELECT COUNT(*) FROM materias')).rows[0].count;
        return {rows: result.rows, rowCount: total}
    }
    static async getMateriaById(id){
        return await query('SELECT * FROM materias WHERE id = $1', [id]);
    }
    static async updateMateria(id, nombre, descripcion) {
        return await query('UPDATE materias SET nombre = $1, descripcion = $2 WHERE id = $3', [nombre, descripcion, id]);
    }
    static async createMateria(nombre, descripcion){
        return await query('INSERT INTO materias (nombre, descripcion) VALUES ($1, $2)', [nombre, descripcion]);
    }
    static async deleteMateria(id){
        return await query('DELETE FROM materias WHERE id = $1', [id]);
    }
}