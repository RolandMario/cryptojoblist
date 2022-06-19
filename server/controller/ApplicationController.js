const db = require('../models')

// image Upload
// const multer = require('multer')
// const path = require('path')


// create main Model
 const Recruiter = db.recruiters;
const JobPost = db.jobPosts;
const Candidiate = db.candidiates;
const Application = db.applications;



const postApplication = async(req, res)=>{

    try {
        const candidiate = await Candidiate.findOne({where: {walletAddress: req.body.walletAddress}})
        const jobpost = await JobPost.findOne({where: {walletAddress: req.query.postId}})

        let applicationDetails = {
            name:req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            cover_letter: req.body.cover_letter,
            cv: req.file.path,
            github: req.body.github,
            linkedin: req.body.linkedin,
            city: req.body.city,
            candidiate_id: candidiate.walletAddress,
            jobpost_id: jobpost.id
        }
        const applicationData = await Application.create(applicationDetails)
        res.status(200).send(applicationData)

    } catch (error) {
        console.log(error)
    }

}



const getAppForRecruiter = async(req, res)=>{

try {
    const recApp = await JobPost.findAll( {where: {recruiter_id : req.query.addr},
         include:[{model: Application}]})
         console.log("Applications belonging to a recruiter", recApp)
         res.status(200).send(recApp)
} catch (error) {
    console.log(error)
}
}

module.exports = {
    postApplication,
    getAppForRecruiter,
    
    
}