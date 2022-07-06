const db = require('../models')

// image Upload
// const multer = require('multer')
// const path = require('path')


// create main Model
 
const JobPost = db.jobPosts;
const Application = db.applications;
const Candidiate = db.candidiates;
// main work

const updateCandidiateProfile = async(req, res)=>{

    const isFound = await Candidiate.findOne({ where: { walletAddress: req.body.walletAddress } });
    if(!isFound){
      res.status(400).send("Candidiate Not found");
    }
    else{
      let cover_pages = {
        photo: req.file.path,
  
      }
      const file_path = await Candidiate.update(cover_pages, {where: {walletAddress: req.body.walletAddress}})
      const updateDetails = await Candidiate.update(req.body, { where: { walletAddress: req.body.walletAddress }})
      console.log("update details", updateDetails)
      console.log("file path", file_path)
      res.status(200).send(updateDetails)
    }

}
 const getCandidiateProfile = async(req, res)=>{
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
 
 const getCandidiateApplications = async(req, res)=>{
  try {
    const { count, rows } = await Application.findAndCountAll({
        where: {
          candidiate_id: req.query.addr
        },
        include:{model: JobPost, as: "jobposts"}
      });

   res.status(200).send({rows: rows, count: count})
   
} catch (error) {
    console.log(error)
}
 }

 const getAllCandidiateProfile = async(req, res)=>{
  let {pageNo} = req.query;
  try {
    const { count, rows } = await Candidiate.findAndCountAll({
      limit: 10,
      offset: pageNo * 10
    })

    res.status(200).send({count, rows})
  } catch (error) {
    console.log(error)
  }

 }

module.exports = {
   
    updateCandidiateProfile,
    getCandidiateProfile,
    getCandidiateApplications,
    getAllCandidiateProfile
    
}