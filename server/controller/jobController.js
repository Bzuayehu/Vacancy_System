const { default: mongoose } = require("mongoose");
const jobModel = require("../model/jobModel");
const userModel = require("../model/userMode;");
const moment = require("moment/moment");

// Create Job

exports.createJobController = async (req, res, next) => {
  const { company_name, position } = req.body;
  const jobExisted = await jobModel.findOne({ company_name, position });
  //   const jobs = await jobModel.findOne({ company_name,position}).select("position");
  if (!company_name || !position) { 
    next("please fill out all fields");
  } else if (jobExisted) {
    next("job already existed with this company name and position");
    return;
  }
  req.body.createdBy = req.user.userId;
  const job = await jobModel.create(req.body);
  res.status(201).json({
    job,
  });
};

//Get JOb
exports.getJobsController = async (req, res, next) => {
  const Jobs = await jobModel.find()
  // const {status, position, search, sort,id} = req.query
  // const queryObject = {
  //   createdBy:req.user.userId
  // }


  //  if(status && status !== 'All'){
  //   queryObject.status = status

  //  }
  //  const jobById = jobModel.findOne({_id:id})
  //  if(search && position && position !== 'All'){
  //   queryObject.position = {$regex:search, $options:'i'}
  //  }

  //  if(search){
  //   queryObject.position = {$regex:search, $options:'i'}

  //  }

  //  let queryResult =  jobModel.find(queryObject)

  //  if(sort === "latest"){
  //   queryResult = queryResult.sort('-createdAt')
  //  }
  //  if(sort === "oldest"){
  //   queryResult = queryResult.sort('createdAt')
  //  }
  //  if(sort === "a-z"){
  //   queryResult = queryResult.sort('-position')
  //  }
  //  if(sort === "z-a"){
  //   queryResult = queryResult.sort('position')
  //  }


//  const page = Number(req.query.page)|| 1
//  const limit = Number(req.query.limit)|| 10
//  const skip = (page-1)*limit

//  queryResult = queryResult.skip(skip).limit(limit)


//  const totalJobss = await jobModel.countDocuments(queryResult)
//  const numberOfPage = Math.ceil(totalJobss/limit)
// jobs = await queryResult
  // const myjobs = await jobModel.find({ createdBy: req.user.userId });
  // const allJobs = await jobModel.find();
  // const allJobsWithStatus = await jobModel.find({ position: {$regex:search, $options:'i'} });
  // const allJobsWithStatus = await jobModel.find({ status: status});


  res.status(201).json({
    Jobs,
    JobsAmount:Jobs.length
    // jobById,
    // totaljobsLength: allJobs.length,
    // myjobsLength: myjobs.length,
    // allJobs,
    // myjobs,
    // totalJobss,
    // jobswiththisUser:jobs,
    // TotalamountWithUser:jobs.length,
    // allJobsWithStatus,
    // allLength:allJobsWithStatus.length
  });
};

//Update Conroller
exports.updateJobController = async (req, res, next) => {
  try {
    console.log(req.url);
    const { id } = req.params;
    const { company_name, position } = req.body;
    const job = await jobModel.findOne({ _id: id });
    const user = await userModel.findOne({ _id: job.createdBy.toString() });
    console.log(user.role);
    if (user.role === "admin" || user.role === "Organization") {
      if (!company_name || !position) {
        next("please fill out all fields ");
      }

      if (!job) {
        next(`no jobs found with this ${id}`);
      }
      if (!req.user.userId === job.createdBy.toString()) {
        next("you are not authorized to update this job");
        return;
      }

      const updateJob = await jobModel.findOneAndUpdate({ _id: id }, req.body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({ updateJob });
    } else {
      next("you are not authorized to update the job");
      return;
    }
  } catch (error) {
    next({ message: error.message });
  }
};
//Delete Controller
exports.deleteJobController = async (req, res, next) => {
  try {
    console.log(req.url);
    // 64f5e526fc05e21dd6a694ee

    const { id } = req.params;
    const job = await jobModel.findOne({ _id: id });

    if (!job) {
      next(`job not found with this id: ${id}`);
    }

    if (!(req.user.userId === job.createdBy.toString())) {
      next(`You are not authorized to delete the job`);
      return;
    }

    await job.deleteOne();
    res.status(200).json({ message: "success, Job deleted successfully" });
  } catch (error) {
    next({ messsage: error.message });
  }
};

//stat controller
exports.jobStatsContoller = async (req, res, next) => {
  const stat = await jobModel.aggregate([
    //filter by organization jobs
    {
      $match: {
        createdBy: new mongoose.Types.ObjectId(req.user.userId),
      },
    },
    {
        $group:{
            _id:"$company_name",count:{$sum:1}
        },
    }
  ]);
  const status = await jobModel.aggregate([
    //filter by organization jobs
    {
      $match: {
        createdBy: new mongoose.Types.ObjectId(req.user.userId),
      },
    },
    {
        $group:{
            _id:"$status",count:{$sum:1}
        },
    }
  ]);
  let monthlyApplication = await jobModel.aggregate([
    //filter by organization jobs
    {
      $match: {
        createdBy: new mongoose.Types.ObjectId(req.user.userId),
      },
    },
    {
        $group:{
            _id: {
              year:{$year:'$createdAt'},
              month:{$month:'$createdAt'}
            },count:{$sum:1}
        },
    }
  ]);

  const defaultStats = {
     pending:status.pending || 0,
     pending:status.reject || 0,
     pending:status.interview || 0,
  }

  monthlyApplication = monthlyApplication.map(item=>{
    const {_id:{year,month},count} = item
    const date = moment().month(month-1).year(year).format('MMM Y')

    return {date,count}
  }).reverse()
  res.status(200).json({
    myjobs: stat,
    Length: stat.length,
    status,
    defaultStats,
    monthlyApplication
  });
};
