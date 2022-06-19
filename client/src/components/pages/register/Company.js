import React from 'react'
import { TalentH1, ImgUpload, Input, Form, FormWrapper, TextArea, Button } from './CompanyElements'

const Company = () => {
  return (
    <>
    <TalentH1>Apply for this Job Role</TalentH1>
    
    <FormWrapper>
        <Form>
        <label htmlFor='name'> Your Full Name</label>
        <Input type ='text' name = 'name' />
        <label htmlFor='email'> Email</label>
        <Input type ='text' name = 'email' placeholder='Remote /Paid Relocation/ Visa Sponsor'/>
        <label htmlFor='title'> Phone No</label>
        <Input type ='title' name = 'title' />
        <label htmlFor='text'>Current Location</label>
        <Input type ='text' name = 'text' />
        <label htmlFor='text'>Why are you a great fit for this job(Cover Letter)</label>
        <TextArea type ='text' name = 'text' placeholder='I have been doing this for X years and now....'/>

        <label htmlFor='text'>Github</label>
        <Input type ='text' name = 'text' />
        <label htmlFor='text'>linkedin</label>
        <Input type ='text' name = 'text' />
        <label htmlFor='text'>Resume</label>
        <ImgUpload>
            
        <input type='file' />
        </ImgUpload>
        
        
        <Button type="submit"> Submit </Button>
    
    

        </Form>
    </FormWrapper>
    
    </>
  )
}

export default Company