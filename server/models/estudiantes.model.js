import {query} from "../database/connection.js";

export class EstudiantesModel {
    static async getAllEstudiantes(){
        return await query('SELECT * FROM estudiantes ORDER BY id ASC', []);
    }
    static async getEstudianteById(id){
        return await query('SELECT * FROM estudiantes WHERE id = $1', [id]);
    }
    static async updateEstudiante(id, nombreCompleto, fechaNacimiento) {
        return await query('UPDATE estudiantes SET nombre_completo = $1, fecha_nacimiento = $2 WHERE id = $3', [nombreCompleto, fechaNacimiento, id]);
    }
    static async createEstudiante(nombreCompleto, fechaNacimiento, carrera){
        return await query('INSERT INTO estudiantes (nombre_completo, fecha_nacimiento, carrera) VALUES ($1, $2, $3)', [nombreCompleto, fechaNacimiento, carrera]);
    }
    static async deleteEstudiante(id){
        return await query('DELETE FROM estudiantes WHERE id = $1', [id]);
    }
    static async getEstudianteByName(nombreCompleto) {
        return await query('SELECT * FROM estudiantes WHERE nombre_completo LIKE $1', [`%${nombreCompleto}%`]);
    }
}