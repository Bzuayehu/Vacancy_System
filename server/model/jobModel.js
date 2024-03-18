
const mongoose = require("mongoose")
const jobSchema = mongoose.Schema({
    company_name:{
        type:String,
        required:[true,"company name is required "]
    },
    position:{
        type:String,
        required:[ true,"job position is required"],
        maxlength:100

    },
    status:{
        type:String,
        enum:["pending", "reject","interview"],
        default:"pending"
    },
    jobType:{
        type:String,
        enum:["full-time","part-time", "internship","contract"],
        default:"full-time"
    },
    location:{
    type:String,
    default:"Addis Ababa",
    required:[true, "location of the job is required"]
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'userdb'
    }
},

{
    timestamps:true
}
);
const jobDB=  mongoose.model("Job", jobSchema)
module.exports = jobDB;