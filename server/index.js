require('dotenv').config();
const express = require('express')
const cors = require('cors')
//const router = require('./routes/routes.js')

const app = express()
const fns = require('./routes/routes.js')

// middleware


const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static('uploads'))
app.use('/resumes', express.static('resumes'))
app.use('/photos', express.static('photos'))



// routers
app.use(fns)
//app.use('/recruiter', router)

//static Images Folder




//port

const PORT = process.env.PORT 

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

    