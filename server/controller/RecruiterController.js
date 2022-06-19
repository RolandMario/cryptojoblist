const db = require('../models')

// image Upload
// const multer = require('multer')
// const path = require('path')


// create main Model
 const Recruiter = db.recruiters;
const JobPost = db.jobPosts;
const Candidiate = db.candidiates;
const Application = db.applications;

// main work

// 1. create product

const addRecruiter = async (req, res) => {
try {
  const isExisted = await Recruiter.findOne({ where: { walletAddress: req.body.walletAddress } });
  if(isExisted){
    res.status(400).send({"ErrorMessage":"The wallet Address is already registered"});
  }

    let info = {
      walletAddress: req.body.walletAddress,
      username:req.body.username,
      email: req.body.email,
      password: req.body.password
    }

    const recruiter = await Recruiter.create(info)
    res.status(200).send(recruiter)
    console.log(recruiter)


} catch (error) {
  console.log(error)
}
 } 


 const addCandidiate = async (req, res) => {
  try {
    const isExisted = await Candidiate.findOne({ where: { walletAddress: req.body.walletAddress } });
    if(isExisted){
      res.status(400).send({"ErrorMessage":"The wallet Address is already registered"});
    }
  
      let info = {
        walletAddress: req.body.walletAddress,
        username:req.body.username,
        email: req.body.email,
        password: req.body.password
      }
  
      const candidiate = await Candidiate.create(info)
      res.status(200).send(candidiate)
      console.log(candidiate)
  
  
  } catch (error) {
    console.log(error)
  }
   } 

 const getRecruiter = async(req, res)=>{
   try {
    const checkRecruiter = await Recruiter.findOne({ where: { walletAddress: req.query.addr} });
    if(checkRecruiter){
      res.status(200).send(checkRecruiter)
    }else{
      res.status(400).send("user does not exists");
    }
    
   } catch (error) {
     console.log(error)
     
   }
 }

 const getCandidiate = async(req, res)=>{
  try {
   const checkCandidiate = await Candidiate.findOne({ where: { walletAddress: req.params.canId} });
   if(checkCandidiate){
     res.status(200).send(checkCandidiate)
   }else{
     res.status(400).send("Candidiate does not exists");
   }
   
  } catch (error) {
    console.log(error)
    
  }
}


const getCandidiateByQuery = async(req, res)=>{
  try {
   const checkCandidiate = await Candidiate.findOne({ where: { walletAddress: req.query.addr} });
   if(checkCandidiate){
     res.status(200).send(checkCandidiate)
   }else{
     res.status(400).send("Candidiate does not exists");
   }
   
  } catch (error) {
    console.log(error)
    
  }
}


 const addJobPost = async(req, res)=>{
   try {
    const recInfo = await Recruiter.findOne({ where: { walletAddress: req.query.addr } });
    let postInfo = {
      walletAddress: req.body.walletAddress,
      job_title:req.body.job_title,
      category: req.body.category,
      company_name: req.body.company_name,
      company_email: req.body.company_email,
      company_website: req.body.company_website,
      company_location: req.body.company_location,
      job_type: req.body.job_type,
      job_tag: req.body.job_tag,
      salary: req.body.salary,
      experience: req.body.experience,
      job_desc: req.body.job_desc,
      job_req: req.body.job_req,
      recruiter_id: recInfo.walletAddress
    }
   
    const post = await JobPost.create(postInfo)
    res.status(200).send(post)
    console.log(post)

   } catch (error) {
     console.log(error)
   }
 }

 const updateRecruiterProfile = async(req, res)=>{

  const isFound = await Recruiter.findOne({ where: { walletAddress: req.body.walletAddress } });
  if(!isFound){
    res.status(400).send("Recruiter Not found");
  }
  else{
    let cover_pages = {
      cover_logo: req.file.path,

    }
    const file_path = await Recruiter.update(cover_pages, {where: {walletAddress: req.body.walletAddress}})
    const updateDetails = await Recruiter.update(req.body, { where: { walletAddress: req.body.walletAddress }})
    console.log("update details", updateDetails)
    console.log("file path", file_path)
    res.status(200).send(updateDetails)
  }

 }

module.exports = {
    addRecruiter,
    addCandidiate,
    getRecruiter,
    getCandidiate,
    getCandidiateByQuery,
    addJobPost,
    updateRecruiterProfile
    
    
}