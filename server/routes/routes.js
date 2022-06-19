const recruiterController = require('../controller/RecruiterController.js')
const jobController = require('../controller/JobController')
const applicationController = require('../controller/ApplicationController')
const message = require('../controller/Message')
const multer = require('multer')


// router
const router = require('express').Router()

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        
        cb(null, './uploads/')
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname);
        
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
        
        cb(null, './resumes/')
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
// use routers
router.get('/message', message.Message)
router.get('/getRecruiter',  recruiterController.getRecruiter)
router.get('/getCandidiate/:canId',  recruiterController.getCandidiate)
router.get('/getCandidiateByQuery', recruiterController.getCandidiateByQuery)
router.get('/getAllJobPosts', jobController.getAllJobs)
router.get('/getJobPostById/:id', jobController.getJobPostById)
router.get('/recGetApplication', applicationController.getAppForRecruiter)

router.post('/addRecruiter',  recruiterController.addRecruiter)
router.post('/addCandidiate', recruiterController.addCandidiate)
router.post('/addJobPost', recruiterController.addJobPost)
router.post('/submitApplication', resume.single('cv'), applicationController.postApplication)

router.put('/updateRecruiter', upload.single('cover_logo'), recruiterController.updateRecruiterProfile)

module.exports = router;