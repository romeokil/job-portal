import { User } from "../models/Usermodel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const salt=bcrypt.genSaltSync(10);
export const register= async (req,res)=>{
    try{
        const {name,email,password,phonenumber,role}=req.body;
        // check if any of the field is missing

        if(!name || !email || !password || !phonenumber || !role){
            return res.status(404).json({
                "message":"Sorry!! Missing credentials!!",
                success:false
            })
        }
        // may be same user want to again register then we don't make them register

        let user=await User.findOne({email});
        if(user){
            return res.status(401).json({
                "message":"Sorry but you are already registered!!!",
                success:false
            })
        }
        // making the password hashed 

        const hashedpassword=bcrypt.hashSync(password,salt);

        // if all is ok then we can create user

        let newUser=await User.create({
            name,
            email,
            password:hashedpassword,
            phonenumber,
            role
        })
        return res.status(201).json({
            "message":"Congrats!! User Created Successfully!",
            newUser,
            success:true
        })
    }
    catch(error){
        console.log("Sorry!!!,User not created")
        console.log("Error ",error);
        return res.status(404).json({
            message:"User not Created!!",
            success:false
        })
    }
}

export const login=async(req,res)=>{
    try{
        // if any of the field is missing 

        const {email,password,role}=req.body;
        if(!email || !password || !role){
            return res.status(404).json({
                "message":"Sorry!! Missing credentials!!",
                success:false
            })
        }
        let checkuser=await User.findOne({email});
        // if with given email no user is present
        // console.log("checkuser ",checkuser)

        if(!checkuser){
            return res.status(401).json({
                "message":"Sorry but you need to register first!!",
                success:false
            })
        }
        // may be they have given wrong password
        let checkpassword=bcrypt.compareSync(password,checkuser.password);
        if(!checkpassword){
            return res.status(404).json({
                "messsage":"Sorry! but your password is wrong!!",
                success:false
            })
        }
        //may be they are recruiter and want to logged in applicant or vice versa ,we will not allow
        if(role!=checkuser.role){
            return res.status(404).json({
                "message":"Sorry can't find record for this role!!",
                success:'false'
            })
        }
        // if all okay then we will create token
        console.log("JWT_SECRET->  ",process.env.JWT_SECRET)
        let token=jwt.sign({id:checkuser._id},process.env.JWT_SECRET,{expiresIn:'1h'});
        return res.status(201).cookie('token',token).json({
            "message":"You are Successfully logged in!!!",
            checkuser,
            success:true
        })

    }
    catch(error){
        console.log("Sorry you have not logged in!!");
        console.log("Error ",error);
        return res.status(404).json({
            "message":"User not logged in !!",
            success:false
        })
    }
}

export const logout=async(req,res)=>{
    let {token}=req.cookies;
    console.log(token);
    if(!token){
        return res.status(404).json({
            "message":"Sorry but you need to login!!",
            success:false
        })
    }
    else{
         // if token is present then we should clear the cookie info
        return res.cookie('token','').status(201).json({
            "message":"Hurray Logout Successful!!",
            success:true
        })
    }
}
export const updateprofile=async(req,res)=>{
        try{
            const {name,email,phonenumber,bio,skills}=req.body;
            const file=req.file;

            // check whether person is logged in or not if not we will not allow them to update credentials
            // this req.id is propagated through middleware
            const userId=req.id;
            let skillsArray;
            if(skills){
                skillsArray=skills.split(',');
            }
            let user=await User.findByIdAndUpdate(userId,{
                name,
                email,
                phonenumber,
                "profile.bio":bio,
                "profile.skills":skillsArray,
            },
            {new:true}
        );
            if(!user){
                return res.status(401).json({
                    "message":"User not found!!"
                })
            }
            
            // if all ok then we will update the user
            return res.status(201).json({
                "message":"User Updated Successfully!!",
                user,
                success:true
            })
        }
        catch(error){
            console.log("Error while updating user ",error);
            return res.status(404).json({
                "message":"Sorry user doesn't updated!!",
                success:false
            })
        }
}