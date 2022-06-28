import React from 'react'
import { TalentH1, ImgUpload, TalentH3, TalentP, Input, Form, FormWrapper, TextArea, Button } from './TalentElements'


const Candidiate = () => {
  return (
    <>
      <TalentH1>Create your Talent Profile</TalentH1>
    <TalentP> Tired of sending resumes? Let companies apply to you!</TalentP>
    <TalentH3> Reply to offers you want</TalentH3>
    <TalentH3> Stay anonymous, if you like</TalentH3>
    <TalentH3> 100% free and easy</TalentH3>
    <FormWrapper onSubmit = {handleSubmit}>
        <Form>
        <ImgUpload>
            <img src={Img} alt='Upload'/>
          <input type='file' hidden/>
          </ImgUpload>
            <label htmlFor='name'> Full Name </label>
        <Input type ='text' name = 'name' placeholder='John Doe' value={formValues.fullname} onChange={handleChange}/>  <p>{formErrors.fullname}</p>
        <label htmlFor='email'> Email </label>
        <Input type ='email' name = 'email' placeholder='abc@gmail.com' value={formValues.email} onChange={handleChange}/> <p>{formErrors.email}</p>
        <label htmlFor='title'> Title </label>
        <Input type ='title' name = 'title' placeholder='Chief Meme Officer' />
        <label htmlFor='text'>What makes you great?</label>
        <TextArea type ='text' name = 'text' placeholder='I have been doing this for X years and now....'/>
        <label htmlFor='text'>URL, Website or Portfolio</label>
        <Input type ='text' name = 'text' placeholder='https://mysite.com'/>
        <label htmlFor='text'> Skills</label>
        <Input type ='text' name = 'text' placeholder='Solidity, TypeScript....'/>
        <label htmlFor='location'> Location</label>
        <Input type ='location' name = 'text' placeholder='London,Lisbon,Lagos.....'/>
        <label htmlFor='salary'> Expected Monthly Salary</label>
        <Input type ='salary' name = 'text' placeholder='$4,000'/>
        <label htmlFor='number'> Phone Number</label>
        <Input type ='number' name = 'email' placeholder='+2348011223344'/>
        <label htmlFor='twitter'> Twitter</label>
        <Input type ='text' name = 'text' placeholder='@twitter'/>
        <label htmlFor='github'> Github</label>
        <Input type ='text' name = 'text' placeholder='https://github.com/user'/>
        <label htmlFor='telegram'> Telegram</label>
        <Input type ='text' name = 'text' placeholder='https://t.me/username'/>
        <label htmlFor='linkedin'>LinkedIn</label>
        <Input type ='text' name = 'text' placeholder='https://www.linkedin.com/in/username'/>
       
        {/* <Fieldset> </Fieldset> */}
        <Button type="submit"> Submit for Review</Button>
    
    

        </Form>
    </FormWrapper>
    
    </>
  )
}

export default Candidiate