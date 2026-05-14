import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoutes from "./routes/booksRoutes.js";
import cors from 'cors';

const app = express();

app.use(express.json());

// CORS POLICY
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN Stack Tutorial');
});

app.use('/books', booksRoutes);

mongoose
   .connect(mongoDBURL)
   .then(() => {
        console.log('App connected to database');
        // 🔥 IMPORTANTE: Agregar '0.0.0.0' para Render
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`App is listening on port: ${PORT}`);
            console.log(`Server running on http://0.0.0.0:${PORT}`);
        });
   })
   .catch((error) => {
        console.error('Database connection error:', error);
        process.exit(1); // Salir con error si no puede conectar a la DB
   });
