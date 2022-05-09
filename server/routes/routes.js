const express = require('express');
const Message = require('../controller/Message')


const router = express.Router()


router.get('/', Message)

module.exports = router;