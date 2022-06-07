import React from 'react'
import { TalentH1, TalentSpan, TalentH3, Buttons, TalentP,ImgUpload, Input, Form, FormWrapper, TextArea, Button, Fieldset } from './CompanyElements'

const Company = () => {
  return (
    <>
    <TalentH1>Hire TOP Web3, Crypto and Blockchain Talent</TalentH1>
    {/* <TalentP> Tired of sending resumes? Let companies apply to you!</TalentP>
    <TalentH3> <AiFillEdit style={{fontSize:'17px', textAlign:'center', color:'red', marginRight:'5px'}}/>Reply to offers you want</TalentH3>
    <TalentH3> Stay anonymous, if you like</TalentH3>
    <TalentH3> 100% free and easy</TalentH3> */}
    <FormWrapper>
        <Form>
          <ImgUpload>
            {/* <img src={Img} alt='Upload'/> */}
          <input type='file' hidden/>
          </ImgUpload>
            <label htmlFor='name'> Job Title</label>
        <Input type ='text' name = 'name' placeholder='Solidity Engineer'/>
        <label htmlFor='email'> Location Restrictions</label>
        <Input type ='text' name = 'location' placeholder='Remote /Paid Relocation/ Visa Sponsor'/>
        <label htmlFor='title'> Company Name</label>
        <Input type ='title' name = 'title' placeholder='KryptoWatch - Keep it short, dont write Inc,Ltd...'/>
        <label htmlFor='text'>Tagline</label>
        <Input type ='text' name = 'text' placeholder='"Best place to buy and sell crypto"'/>
        <label htmlFor='text'>About your Company</label>
        <TextArea type ='text' name = 'text' placeholder='I have been doing this for X years and now....'/>
        <label htmlFor='text'>Job Description</label>
        <TextArea type ='text' name = 'text' placeholder='I have been doing this for X years and now....'/>
        <TalentH3> How to Apply</TalentH3>
        <Fieldset> 
            <label>
              <input
                type="radio"
                value="female"
                name="gender"
                // checked={state.gender === 'female'}
                // onChange={handleInput}
              />
              Redirect to an external form
            </label>
            <label>
              <input
                type="radio"
                value="male"
                name="gender"
                // checked={state.gender === 'male'}
                // onChange={handleInput}
              />
              Apply by email
            </label>
        </Fieldset>
        <TalentH3> Screening Questions</TalentH3>
        <label htmlFor='text'> Question 1</label>
        <Input type ='text' name = 'text' placeholder='What is Solidity?'/>
        <label htmlFor='text'> Question 2</label>
        <Input type ='text' name = 'text' placeholder='What is the difference between PoS and PoW?'/>
        <label htmlFor='text'> Question 3</label>
        <Input type ='text' name = 'text' placeholder='Use simple questions candidates can answer in one sentence'/>
        <TalentH3> Company Details</TalentH3>
        <label htmlFor='github'> Website</label>
        <Input type ='text' name = 'text' placeholder='https://coinbase.com'/>
        <label htmlFor='twitter'> Twitter</label>
        <Input type ='text' name = 'text' placeholder='@twitter'/>
        <label htmlFor='telegram'> Discord </label>
        <Input type ='text' name = 'text' placeholder='https://discord.gg/abc123'/>
        <label htmlFor='linkedin'> Coin Symbol</label>
        <Input type ='text' name = 'text' placeholder='Example: LINK,BNB,DOT...'/>
        <TalentH3> Let's get personal!</TalentH3>
        <label htmlFor='email'> Email for resumes. Stays private.</label>
        <Input type ='email' name = 'email' placeholder='your@email.com'/>
        <label htmlFor='salary'>  First name </label>
        <Input type ='salary' name = 'text' placeholder='Jane'/>
        <label htmlFor='number'> Last name</label>
        <Input type ='text' name = 'text' placeholder='Doe'/>
        
        <Button type="submit"> Submit </Button>
    
    

        </Form>
    </FormWrapper>
    
    </>
  )
}

export default Company