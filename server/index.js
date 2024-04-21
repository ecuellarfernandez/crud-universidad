import express from 'express';
import {end} from "/database/connection.js";
import cors from "cors";
import routes from "./routes/routes.js";

//crear la aplicación de express
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 9000;

//el puerto donde se va a ejecutar la aplicación
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});

//definir las rutas de la aplicación de notas
app.use('/estudiantes', estudiantesRoutes);
app.use('/materias', materiasRoutes);
app.use('inscripciones', inscripcionesRoutes)
app.use('/notas', notasRoutes);

//cerrar la conexión a la base de datos cuando se cierra la aplicación
process.on('SIGINT', () => {
    console.log('Closing application...');
    end().then(() => {
        console.log('Database connection closed.');
        process.exit(0);
    });
})