import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoutes from "./routes/booksRoutes.js";
import cors from 'cors';

const app = express();

app.use(express.json());

//CORS POLICY
app.use(cors());

//app.use(
    //cors({
      //  origin:'http://localhost:3000',
        //methods:['GET','POST','PUT','DELETE'],
 //       allowedHeaders:['Content-Type'],
   // }
    //));

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN Stack Tutorial')
});

app.use('/books', booksRoutes);

mongoose
   .connect(mongoDBURL)
   .then(() =>{
    console.log('App connect to database');
    app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});
   })
   .catch((error) =>{
    console.error();
   });