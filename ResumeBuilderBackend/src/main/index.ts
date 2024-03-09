import * as dotenv from 'dotenv';
dotenv.config();
import  Express  from "express";
import { MongoClient } from "mongodb";
import {existsSync,mkdirSync} from 'fs';
import { userRouter } from "./routers/UserRouter.js";
import { resumeRouter } from "./routers/ResumeRouter.js";
import { InjectUser } from "./middleware/InjectUser.js";
import cookieparser from 'cookie-parser'
import cors from "cors";

declare const globalThis: any;
console.log(process.env.MONGO_URL as string)
globalThis.mongoClient=new MongoClient('mongodb+srv://group4:group4@cluster0.wbha2pq.mongodb.net/resume-builder');
console.log("Connection String",('mongodb+srv://group4:group4@cluster0.wbha2pq.mongodb.net/resume-builder'));
if(!existsSync('generated'))
    mkdirSync('generated')
let app:Express.Express=Express();

app.use(Express.json({limit:'10mb'}))
app.use(cookieparser())
app.use(cors())

app.use('/',InjectUser);
app.use('/api/user',userRouter);
app.use('/api/resume/',resumeRouter);



app.listen(4292,()=>
{
    console.log("Listening At Port 4292")
})


