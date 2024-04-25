import express from 'express';
import {end} from "./database/connection.js";
import cors from "cors";
import estudiantesRoutes from "./routes/estudiantes.routes.js";

//crear la aplicación de express
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT;

//el puerto donde se va a ejecutar la aplicación
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});

//definir las rutas de la aplicación de notas
app.use('/estudiantes', estudiantesRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

//cerrar la conexión a la base de datos cuando se cierra la aplicación
process.on('SIGINT', () => {
    console.log('Closing application...');
    end().then(() => {
        console.log('Database connection closed.');
        process.exit(0);
    });
})