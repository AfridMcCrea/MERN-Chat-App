import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();

const app =  express();
const port = process.env.PORT || 3001;
const DB = process.env.MONGO;

const server = app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})

mongoose.connect('mongodb+srv://afrid:afriddb@afrid.dobbqqp.mongodb.net/?retryWrites=true&w=majority&appName=afrid').then(() => console.log('MongoDb Connected'));