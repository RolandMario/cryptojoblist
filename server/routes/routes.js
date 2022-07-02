const recruiterController = require('../controller/RecruiterController.js')
const jobController = require('../controller/JobController')
const applicationController = require('../controller/ApplicationController')
const candidiateController = require('../controller/CandidiateController')
const message = require('../controller/Message')
const path = require('path')
const multer = require('multer')


// router
const router = require('express').Router()

// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
        
//         cb(null, path.resolve(__dirname, '/uploads/'));
//     },
//     filename: function(req, file, cb){
//         cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname);
        
//     }
// })

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        //if that dir is not created then this will create that dir first
        fs.mkdir('./uploads/',(err)=>{
            cb(null,'./uploads/');
        })
    },
    filename: function(req,file,cb)
    {
        cb(null,new Date().toISOString().replace(/:/g, '-') +'-'+file.originalname);
    }
})
const upload = multer({
    storage: storage,
     limits:{
    fileSize: 1024 * 1024 * 5
    }
})
const resumeStorage = multer.diskStorage({
    destination: function(req, file, cb){
        
        cb(null, path.resolve(__dirname, '/resumes/'));
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname);
        
    }
})
const resume = multer({
    storage: resumeStorage,
     limits:{
    fileSize: 1024 * 1024 * 5
    }
})

//candidiate profile photo

const photoStorage = multer.diskStorage({
    destination: function(req, file, cb){
        
        cb(null, path.resolve(__dirname, '/photos/'));
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname);
        
    }
})

const profilePhoto = multer({
    storage: photoStorage,
     limits:{
    fileSize: 1024 * 1024 * 5
    }
})
// use routers
router.get('/server/message', message.WellcomeMessage)
router.get('/server/getRecruiter',  recruiterController.getRecruiter)
router.get('/server/getCompanyProfile', recruiterController.getCompanyProfile)
router.get('/server/getCandidiate/:canId',  recruiterController.getCandidiate)
router.get('/server/getCandidiateByQuery', recruiterController.getCandidiateByQuery)
router.get('/server/getAllJobPosts', jobController.getAllJobs)
router.get('/server/getJobPostById/:id', jobController.getJobPostById)
router.get('/server/recGetApplication', applicationController.getAppForRecruiter)
router.get('/server/totalJobPostByRecruiter', jobController.totalJobPostByRecruiter)
router.get('/server/getApplications', applicationController.getApplications)
router.get('/server/getCandidiateProfile', candidiateController.getCandidiateProfile)
router.get('/server/getCandidiateApplications', candidiateController.getCandidiateApplications)
router.get('/server/getAllCandidiateProfile', candidiateController.getAllCandidiateProfile)

router.post('/server/addRecruiter',  recruiterController.addRecruiter)
router.post('/server/addCandidiate', recruiterController.addCandidiate)
router.post('/server/addJobPost', recruiterController.addJobPost)
router.post('/server/submitApplication', resume.single('cv'), applicationController.postApplication)

router.put('/server/updateRecruiter', upload.single('cover_logo'), recruiterController.updateRecruiterProfile)
router.put('/server/updateCandidiateProfile', profilePhoto.single('photo'), candidiateController.updateCandidiateProfile)

module.exports = router;