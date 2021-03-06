const db = require('../models')

// image Upload
// const multer = require('multer')
// const path = require('path')


// create main Model
 const Recruiter = db.recruiters;
const JobPost = db.jobPosts;
const Application = db.applications;
// main work

const getAllJobs = async(req, res)=>{
  let {pageNo} = req.query;
    try {
        const { count, rows } = await JobPost.findAndCountAll({
            limit: 5,
            offset: pageNo * 5
            
          });

       res.status(200).send({rows: rows, count: count})
       console.log(count, rows)
    } catch (error) {
        console.log(error)
    }
    

}

const getJobPostById = async(req, res)=>{
    try {
        const postDetails = await JobPost.findOne({ where: {id: req.params.id} });
        if(postDetails){
          res.status(200).send(postDetails)
        }else{
          res.status(400).send("This job post does not exists");
        }
        
       } catch (error) {
         console.log(error)
         
       }

}


const totalJobPostByRecruiter = async(req, res)=>{
  try {
    const { count, rows } = await JobPost.findAndCountAll({
        where: {
          recruiter_id: req.query.addr
        },
        include:[{model: Application, as: "applications"}]
      });

   res.status(200).send({rows: rows, count: count})
   
} catch (error) {
    console.log(error)
}

}


module.exports = {
    getAllJobs,
    getJobPostById,
    totalJobPostByRecruiter
    
    
}