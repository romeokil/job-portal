import { Application } from "../models/applicationmodel.js";
import { Job } from "../models/Jobmodel.js";

// user jo kisi job me apply krega
export const applyjob=async(req,res)=>{
        try {
            const userId = req.id;
            const jobid = req.params.id;
            console.log(userId,jobid);
            // agr jobid hi ni hai toh phir kaise pata chalega ki kon sa job ke liye application daal rhe ho.
            if (!jobid) {
                return res.status(404).json({
                    message: "Job is required!!"
                })
            }
            // let suppose wo pehle hi apply kiya hua hai job ke liye toh dubara q hi krega.
            const existingapplication = await Application.findOne({ job: jobid, applicant: userId });
            if (existingapplication) {
                return res.status(404).json({
                    message: "You are already applied for this job!!",
                    success: false
                })
            }
            // check kro ki bhai jis job ke liye apply kr rhe ho wo exist krta bhi hai ki ni
            const job = await Job.findOne({_id:jobid});
            if (!job) {
                return res.status(404).json({
                    message: "Sorry Job not exist!!",
                    success: false
                })
            }
            // ab agr ni daale ho application toh phir create kr dete hai
            const newapplication = await Application.create({
                job: jobid,
                applicant: userId
            })
            job.applications.push(newapplication._id);
            await job.save();
            return res.status(201).json({
                message: "New Application Created!!",
                newapplication,
                success: true
            })
        }
        catch (error) {
            console.log("Error while creating the apply job in application ", error);
            return res.status(404).json({
                message: "Sorry Error while creating the apply job in application",
                success: false
            })
        }
}

export const getappliedjobs=async(req,res)=>{
    try {
            const userId = req.id;
            // esse tmko ye pata chal jaega ki bhai ye particular user kitne job me apply kiya hai 
            const application = await Application.find({ applicant: userId })
                .sort({ createdAt: -1 })
                .populate({
                    path: 'job',
                    options: { sort: { createdAt: -1 } },
                    populate:{
                        path: 'company',
                    }
                })
            if (!application) {
                return res.status(201).json({
                    message: "No Applications",
                    success: false
                })
            }
            return res.status(201).json({
                message: "Application Found!!",
                application,
                sucess: true
            })
        }
        catch (error) {
            console.log("Error while get applied Jobs ",error);
            return res.status(404).json({
                message:"Error while get applied Jobs",
                success:false
            })
        }
}

// ye admin or recuiter ke liye hai ki koi job me kitna applicant apply kiye hai.
export const getapplicant = async (req, res) => {
    try {
        const jobid = req.params.id;

        // Find the job and populate applications and applicants
        const job = await Job.findById(jobid)
            .populate({
                path: 'applications',
                options: { sort: { createdAt: -1 } },
                populate: {
                    path: 'applicant', // Populate the applicant details
                },
            });
        console.log(job);
        if (!job) {
            return res.status(404).json({
                message: "Job not found!",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Applicants found!",
            job,
            success: true,
        });
    } catch (error) {
        console.error("Error while fetching applicants:", error);
        return res.status(500).json({
            message: "Error while fetching applicants",
            success: false,
        });
    }
};

// kisi bhi application ka status agr admin ya recuriter update krna chahe toh
export const updatestatus=async(req,res)=>{
    try {
        const {status}=req.body;
        const applicationId=req.params.id;
        if(!status){
            return res.status(404).json({
                message:"Status is Mandatory!!",
                success:false
            })
        }
        // ab application id se wo particular application doondh lete hai tbhi toh update krege
        const application=await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(401).json({
                message:"Sorry Application Not found!!",
                success:false
            })
        }
        application.status=status.toLowerCase();
        const updatedapplication=await application.save();
        return res.status(201).json({
            message:"Congrats Application Status Updated!!",
            updatedapplication,
            success:true
        })
    }
    catch (error) {
        console.log("Error while updating the status of the application ",error);
        return res.status(404).json({
            message:"Error while updating the status of the application ",
            success:false
        })
    }
}