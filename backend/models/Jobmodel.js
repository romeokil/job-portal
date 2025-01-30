import mongoose from 'mongoose'

const JobSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true,
    },
    location:{
        type:String,
        required:true
    },
    jobType:{
        type:String,
        required:true
    },
    position:{
        type:Number,
        required:true
    },
    requirements:[{
        type:String,
        required:true,
    }],
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company'
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    applications:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Application'
    }]
},{timestamps:true})

export const Job=mongoose.model("Job",JobSchema);