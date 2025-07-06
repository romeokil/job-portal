import { Company } from "../models/Companymodel.js";

// new company register kr diye
// new company registration
export const registerCompany=async(req,res)=>{
    try{
        console.log(req.body);
        const {companyname}=req.body;
        console.log(companyname)
        //Missing credentials
        if(!companyname){
            return res.status(404).json({
                message:"Sorry but Missing credentials!!",
                success:false
            })
        }
        // if company is already is register with this given name
        let company=await Company.findOne({companyname});
        if(company){
            return res.status(401).json({
                message:"Company with the same name is already registered!!",
                success:false
            })
        }
        let newCompany=await Company.create({
            name:companyname,
            userId:req.id
        })
        return res.status(201).json({
        message:"New Company created Successfully!!",
        newCompany,
        success:true
        })
    }
    catch(error){
        console.log("Sorry company not created!");
        console.log("Error while creating company ",error);
        return res.status(404).json({
            message:"Sorry company not created!!",
            success:false
        })
    }
}

// jitna bhi company ye particular user bnaya hai
// getting all the companies register by a particular user
export const getcompany=async(req,res)=>{
    try{
        const userId=req.id;

        // it will give return company's array which is created by this user

        const companies=await Company.find({userId});
        // let suppose ek bhi companies create ni kiya hoga then 
        if(companies.length==0){
            return res.status(404).json({
                message:"Companies not found!!",
                success:false
            })
        }
        
        return res.status(201).json({
            message:"Companies found!!",
            companies,
            success:true
        })
    }
    catch(error){
        console.log("Error while finding company for the particular user ",error);
        return res.status(404).json({
            message:"Error while finding company for the particular user",
            success:false
        })
        
    }
}

// particular company agr tm fetch krna chahte ho
// get company by id
export const getcompanybyid=async(req,res)=>{
    try{
        const {id}=req.params;
        // for this particular id we will find company
        const company=await Company.findById(id);
        // suppose any company is not found
        if(!company){
            return res.status(401).json({
                message:"Companeis not found!!",
                success:false
            })
        }
        return res.status(201).json({
            message:"company found!!",
            company,
            success:true
        })
    }
    catch(error){
        console.log("Error while finding the company by id ",error);
        return res.status(201).json({
            message:"Error while finding the company by id",
            success:true
        })
    }
}

// particular company ko agr update krna hai toh
// update company by id
export const updatecompanybyid= async (req,res)=>{
    try{
        const {id}=req.params;
        const {name,description,location,website}=req.body;
        const file=req.file;

        // idhar cloudinary se data aayega

        const updatedcompany=await Company.findByIdAndUpdate(id,{
            name,description,location,website
        },
        {new:true}
        )
        if(!updatedcompany){
            return res.status(404).json({
                message:"Company not found!!",
                success:false,
            })
        }
        return res.status(201).json({
            message:"Company Updation Successfull!!",
            updatedcompany,
            success:true
        })

    }
    catch(error){
        console.log("Error while updating company ",error);
        return res.status(404).json({
            message:"Error while updating company ",
            success:false
        })
    }
}