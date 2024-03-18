const express = require("express");
const jobController = require("../controller/jobController");
const userAuth = require("../middlewares/authMiddleware");
const route = express.Router();



route.post("/createJob",userAuth, jobController.createJobController)
route.get("/getJob", jobController.getJobsController)
route.patch("/updateJob/:id",userAuth, jobController.updateJobController)
route.delete("/deleteJob/:id",userAuth, jobController.deleteJobController)
route.get("/getJobStat",userAuth, jobController.jobStatsContoller)

module.exports = route;