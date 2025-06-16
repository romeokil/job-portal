import express from 'express';
import formidable from 'express-formidable'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();
import { connectDB } from './utils/db.js';
import UserRoute from './routes/UserRoute.js'
import CompanyRoute from './routes/CompanyRoute.js'
import JobRoute from './routes/JobRoute.js'
import ApplicationRoute from './routes/ApplicationRoute.js'

const app = express();
const PORT = process.env.PORT || 3000
const corsOption = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));
// app.use(formidable()); 

// app.post('/api/user/registration',(req,res)=>{
//     console.log("register post request hai ye index.file me jo likha hua hai!")   
//     const {name,email,password,phonenumber,role}=req.body;
//     console.log("yes body ke andr ka data recieve hua!!");
// })
app.use('/api/user', UserRoute)
// app.get('/api/user/newregister',(req,res)=>{
//     console.log("new registration!!")
//     const {name,email,password}=req.body;
//     return res.status(201).json({
//         "message":"congrats ye pehli route",
//         "data":{
//             name,email,password
//         }
//     })
// })
// app.post('/api/user/newregister',(req,res)=>{
//     console.log("new registration!! post request")
//     const {name,email,password}=req.body;
//     return res.status(201).json({
//         "message":"congrats ye pehli route",
//         "data":{
//             name,email,password
//         }
//     })
// })
app.use('/api/company', CompanyRoute);
app.use('/api/jobs', JobRoute);
app.use('/api/application',ApplicationRoute);


app.get('/home', (req, res) => {
    res.status(201).json({
        "message": "hello i am first route"
    })
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at ${PORT}`)
})
