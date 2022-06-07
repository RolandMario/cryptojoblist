const recruiterController = require('../controller/RecruiterController.js')



// router
const router = require('express').Router()


// use routers
router.post('/addRecruiter',  recruiterController.addRecruiter)
router.get('/getRecruiter',  recruiterController.getRecruiter)
module.exports = router;