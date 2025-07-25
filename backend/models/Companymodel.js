import mongoose from 'mongoose'

const CompanySchema=new mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
    },
    website:{
        type:String
    },
    location:{
        type:String,
    },
    logo:{
        type:String,
        default:"data:image/png;base64,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"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true})

export const Company=mongoose.model("Company",CompanySchema);