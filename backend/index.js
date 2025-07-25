import express from 'express';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import { connectDB } from './utils/db.js';
import UserRoute from './routes/UserRoute.js'
import CompanyRoute from './routes/CompanyRoute.js'
import JobRoute from './routes/JobRoute.js'
import ApplicationRoute from './routes/ApplicationRoute.js'
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000

const _dirname=path.resolve();
console.log(_dirname);
const corsOption = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));
// app.use(formidable()); 

app.use('/api/user', UserRoute)
app.use('/api/company', CompanyRoute);
app.use('/api/jobs', JobRoute);
app.use('/api/application',ApplicationRoute);


app.get('/home', (req, res) => {
    res.status(201).json({
        "message": "hello i am first route"
    })
})

app.use(express.static(path.join(_dirname,"/frontend/dist")));
app.get('*',(_,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at ${PORT}`)
})
