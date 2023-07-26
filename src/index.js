import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {userRouter} from './routes/users.js';
import { bookRouter } from './routes/books.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/add", bookRouter);


mongoose.connect("mongodb+srv://smvidya:Dream@cluster0.y5us8fz.mongodb.net/cluster0?retryWrites=true&w=majority")

app.listen(3001, ()=>console.log("Server Started"));    

