import {Job} from '../models/Jobmodel.js'

// create new job
// or ye sirf recruiter hi kr skta hai user ni
export const createJob=async(req,res)=>{
    try {
        const adminId = req.id;
        const { title, description, requirements, salary, location, jobType, position, experience, companyId } = req.body;
        if (!title || !description || !requirements || !salary || !location || !jobType || !position || !experience || !companyId) {
            return res.status(401).json({
                message: "Oops!! Missing Credentials!!",
                success: false
            })
        }
        let newJob = await Job.create({
            title,
            description,
            experience,
            requirements:requirements.split(','),
            salary: Number(salary),
            location,
            jobType,
            position,
            company:companyId,
            created_by: adminId
        })
        return res.status(201).json({
            message: "New Job created!!",
            newJob,
            success: false
        })
    }
    catch (error) {
        console.log("Error while creating job ", error);
        return res.status(404).json({
            message: "Error while creating Job ",
            success: false
        })
    }
}

// ye hmlog saara jobs basically find out kr rhe hai
// we are fetching all jobs

export const getAllJobs=async(req,res)=>{
    try{
        // jo bhi query route me aaega
            // whatever query coming in route
            const keyword=req.query.keyword?req.query.keyword:"";
            console.log(keyword);
            const query={
                $or:[
                    {title:{$regex:keyword,$options:"i"}},
                    {description:{$regex:keyword,$options:"i"}}
                ]
            };
            const job=await Job.find(query).populate({
                path:"company",
            }).sort({createdAt:-1});
            if(!job){
                return res.status(404).json({
                    message:"Jobs not found!!",
                    success:false
                })
            }
            return res.status(201).json({
                message:"Job found!",
                job,
                success:true
            })
    }
    catch(error){
        console.log("Error while getting all jobs ",error);
        return res.status(404).json({
            message:"Error while getting all jobs",
            success:false
        })
    }
}

// esme hmlog particular job fetch kr rhe hai.
// we are fetching particular Jobs

export const getJobById=async(req,res)=>{
    try{
            const jobId=req.params.id;
            const job=await Job.findById(jobId).populate('applications');
            if(!job){
                return res.status(404).json({
                    message:"Sorry Job not found!",
                    success:false
                })
            }
            return res.status(201).json({
                message:"Job found by Id ",
                job,
                success:true
            })
        }
        catch(error){
            console.log("Error while finding job by id ",error);
            return res.status(404).json({
                "message":"Error while finding job by id",
                success:false
            })
        }
}

// ye hmlog jo Admin ya recruiter job create kiye hai unka job fetch krege.
// fetching job of the particular Recruiter or Admin

export const getAdminJob=async(req,res)=>{
    try{
        const AdminId=req.id;
        const jobs=await Job.find({created_by:AdminId});
        if(!jobs){
            return res.status(404).json({
                message:"Sorry No Job created by this admin",
                success:false
            })
        }
        return res.status(201).json({
            message:'Jobs found!!',
            jobs,
            success:true
        })

    }
    catch(error){
        console.log("Error while getAdminJob ",error);
        return res.status(404).json({
            message:"Errow while getting AdminJob ",
            status:false
        })
    }
}
