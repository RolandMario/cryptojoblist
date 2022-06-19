import React, {useContext, useState, useEffect} from 'react'
import { TalentH1, ImgUpload, Input, Form, FormWrapper, TextArea, Button } from './ApplyForJobElements'
import { PostDetailsContext } from '../../context/PostDetailscontext'
import { useFormik } from 'formik';
import { WalletAddressContext } from '../../context/WalletAddressContext';
import {baseURL} from '../../constants/Constants'
import {useParams} from 'react-router-dom'
import axios from 'axios';
const ApplyForJob = () => {

  const [walletAddress, ] = useContext(WalletAddressContext)
  const [post, ] = useContext(PostDetailsContext)
  const [candidiateDetails, setCandidiateDetails] = useState({})

  let canId = useParams()
  const getCandidiateDetails = async()=>{
    const url = `${baseURL}/api/recruiter/getCandidiate/${canId.canId}`
    try {
       const {data} = await axios.get(url)
       setCandidiateDetails(data)
       console.log("candidiate details", data)
       console.log("job post details", post)
    } catch (error) {
      console.log(error)
    }
   


  }

  useEffect(() => {
    getCandidiateDetails();
  // eslint-disable-next-line
  }, [canId])
  

  const formik = useFormik({
    initialValues:{
      name:candidiateDetails.name??"",
      email: candidiateDetails.email??"",
      phone: candidiateDetails.phone??"",
      cover_letter: "",
      cv: "",
      city:candidiateDetails.city??"",
      github: candidiateDetails.github??"",
      linkedin: candidiateDetails.linkedin??""
      
    },
    onSubmit: async(value)=>{
      console.log('working')

      const url = `${baseURL}/api/recruiter/submitApplication?postId=${post.walletAddress}`

        let formData = new FormData()
        formData.append('name', value.name)
        formData.append('email', value.email)
        formData.append('phone', value.phone)
        formData.append('cover_letter', value.cover_letter)
        formData.append('cv', value.cv)
        formData.append('city', value.city)
        formData.append('github', value.github)
        formData.append('linkedin', value.linkedin)
        formData.append('walletAddress', walletAddress)

        try {
          const {data} = await axios.post(url, formData)
          if(data){
            console.log("Application successfully submitted")
          }
        } catch (error) {
          console.log("update errror", error)
          
        }
    }
    })
  return (


    <>
    <TalentH1>Apply for this Job Role</TalentH1>
    
    <FormWrapper>
        <Form >
          <form onSubmit={formik.handleSubmit} method='POST'  encType='multipart/form-data'>
        <label htmlFor='name'> Your Full Name</label>
        <Input type ='text' name = 'name' value={formik.values.name} onChange={formik.handleChange}/>
        <label htmlFor='email' > Email</label>
        <Input type ='text' name='email' value={formik.values.email} onChange={formik.handleChange} placeholder='Remote /Paid Relocation/ Visa Sponsor'/>
        <label htmlFor='title'> Phone No</label>
        <Input type ='title' name='phone' value={formik.values.phone} onChange={formik.handleChange} />
        <label htmlFor='text'>Current Location</label>
        <Input type ='text' name='city' value={formik.values.city} onChange={formik.handleChange} />
        <label htmlFor='text'>Why are you a great fit for this job(Cover Letter)</label>
        <TextArea type ='text' name = 'cover_letter' 
        value={formik.values.cover_letter} onChange={formik.handleChange}
        placeholder='I have been doing this for X years and now....'/>

        <label htmlFor='text'>Github</label>
        <Input type ='text' name='github' value={formik.values.github} onChange={formik.handleChange} />
        <label htmlFor='text'>linkedin</label>
        <Input type ='text' name='linkedin' value={formik.values.linkedin} onChange={formik.handleChange} />
        <label htmlFor='text'>Resume</label>
        <ImgUpload>
            
        <input type='file' 
        name='cv'
        onChange={(event)=>{
          formik.setFieldValue('cv', event.target.files[0])}}/>
        </ImgUpload>
        
        
        <Button type="submit"> Submit </Button>
    
    
        </form>
        </Form>
    </FormWrapper>
    
    </>
  )
}

export default ApplyForJob