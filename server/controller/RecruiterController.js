const db = require('../models')

// image Upload
// const multer = require('multer')
// const path = require('path')


// create main Model
 const Recruiter = db.recruiters;
// const Review = db.reviews

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

 const getRecruiter = async(req, res)=>{
   try {
    const checkRecruiter = await Recruiter.findOne({ where: { walletAddress: req.query.addr} });
    if(checkRecruiter){
      res.status(200).send("successful")
    }else{
      res.status(400).send("user does not exists");
    }
    
   } catch (error) {
     console.log(error)
     
   }
 }

module.exports = {
    addRecruiter,
    getRecruiter,
    
    
}