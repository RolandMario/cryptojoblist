import React, {useContext} from 'react'
import { useFormik, Formik } from 'formik';
import axios from 'axios'
import { WalletAddressContext } from '../../context/WalletAddressContext';
import { baseURL } from '../../constants/Constants';

const RecProfile = (props) => {
 
  const [walletAddress, ] = useContext(WalletAddressContext)
 
  

  const formik = useFormik({
    initialValues:{
      cover_logo: props.data.cover_logo,
      company_name: props.data.company_name,
      username:props.data.username,
      email: props.data.email,
      phone: props.data.phone,
      website: props.data.website,
      company_size: props.data.company_size,
      contact_mail: props.data.contact_mail,
      job_title: props.data.job_title,
      country: props.data.country,
      state: props.data.state,
      city: props.data.city,
      zip_code: props.data.zip_code,
      residential_address: props.data.residential_address,
      google: props.data.google,
      facebook: props.data.facebook,
      twitter: props.data.twitter,
      linkedin: props.data.linkedin,
      current_email: props.data.current_email,
      current_password: props.data.current_password,
      new_password : props.data.new_password,
      repeat_new_password: props.data.repeat_new_password
    },
    onSubmit: async(value)=>{
        console.log(value)
        
        const url = `${baseURL}/api/recruiter/updateRecruiter`

        let formData = new FormData()
        formData.append('cover_logo', value.cover_logo)
        formData.append('company_name', value.company_name)
        formData.append('username', value.username)
        formData.append('email', value.email)
        formData.append('phone', value.phone)
        formData.append('website', value.website)
        formData.append('company_size', value.company_size)
        formData.append('contact_mail', value.contact_mail)
        formData.append('job_title', value.job_title)
        formData.append('country', value.country)
        formData.append('state', value.state)
        formData.append('city', value.city)
        formData.append('zip_code', value.zip_code)
        formData.append('residential_address', value.residential_address)
        formData.append('google', value.google)
        formData.append('facebook', value.facebook)
        formData.append('linkedin', value.linkedin)
        formData.append('twitter', value.twitter)
        formData.append('current_email', value.current_email)
        formData.append('current_password', value.current_password)
        formData.append('new_password', value.new_password)
        formData.append('walletAddress', walletAddress)
      try {
        const {data} = await axios.put(url, formData)
        if(data){
          console.log("updated successfully")
        }
      } catch (error) {
        console.log("update errror", error)
        
      }
        
        
    },
  

  })
  return (
    <>
    <Formik >

  <div className="col-lg-9 col-md-12 col-sm-12 col-12">
    <form onSubmit={formik.handleSubmit} method='POST'  encType='multipart/form-data'>
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
      
        <div className="browse_img_banner jb_cover">
          <div className="jp_job_post_side_img">
            <img src={`${baseURL}/${props.data.cover_logo}`} alt="post_img"  />
          </div>
          <div className="jp_job_post_right_cont edit_profile_wrapper">
            <h4>JPEG or PNG 1920x300px Cover Image</h4>
            <div className="">
              <input
                type="file"
                name='cover_logo'  onChange={(event)=>{
                  formik.setFieldValue('cover_logo', event.target.files[0])
              }}
                id="input-file-now-custom-2"
                className="dropify"
                data-height={90}
              />
              <span className="post_photo">browse image</span>
            </div>
          </div>
        </div>
        <div className="browse_img_banner jb_cover">
          <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="contect_form3">
                <label>Company Name</label>
                <input type="text" name="company_name" value={formik.values.company_name} onChange={formik.handleChange} placeholder="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="contect_form3">
                <label>@username</label>
                <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} placeholder="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="contect_form3">
                <label>Email</label>
                <input
                  type="email"
                  name="email" value={formik.values.email} onChange={formik.handleChange} 
                  placeholder="rolandmario@example.com"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="contect_form3">
                <label>Phone</label>
                <input
                  type="number"
                  name="phone" value={formik.values.phone} onChange={formik.handleChange}
                  placeholder="+234 7068497568"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="contect_form3">
                <label>Website</label>
                <input
                  type="Text"
                  name="website" value={formik.values.website} onChange={formik.handleChange}
                  placeholder="www.criset.com"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="select_box">
                <label>Company size</label>
                <select
                name="company_size" 
                value={formik.values.company_size}
                 onChange={formik.handleChange}
                >
                  <option value={"1-500"}>1-500</option>
                  <option value={"1-200"}>1-200</option>
                  <option value={"1-100"}>1-100</option>
                  <option value={"1-100"}>1-50</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="contect_form3">
                <label>contact mail</label>
                <input
                  type="email"
                  name="contact_mail" 
                  value={formik.values.contact_mail}
                   onChange={formik.handleChange}
                  placeholder="rm@wcriset.com"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="select_box">
                <label>job description</label>
                <select
                 name="job_title" 
                 value={formik.values.job_title}
                  onChange={formik.handleChange}
                >
                  <option value={"IT"}>it &amp; computer</option>
                  <option value={"marketing"}>marketing</option>
                  <option value={"Manager"}>Manager</option>
                  <option value={"Developer"}>Developer</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="contect_form3">
                <label>Residential Address</label>
                <input
                  type="text"
                  name="residential_address" 
                  value={formik.values.residential_address}
                   onChange={formik.handleChange}
                  placeholder="124/A Kalani Bagh"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="contect_form3">
                <label>country</label>
                <input type="text"
                  name="country" 
                  value={formik.values.country}
                   onChange={formik.handleChange} 
                 placeholder="Nigeria" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="select_box">
                <label>state</label>
                <select
                 name="state" 
                 value={formik.values.state}
                  onChange={formik.handleChange}
                >
                  <option value={"FCT"}>FCT</option>
                  <option value={"Abia"}>Abia</option>
                  <option value={"Adamawa"}>Adamawa</option>
                  <option value={"Akwa-Ibom"}>Akwa-Ibom</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="contect_form3">
                <label>city</label>
                <input type="text"
                 name="city" 
                 value={formik.values.city}
                  onChange={formik.handleChange} 
                  placeholder="Abuja" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="select_box">
                <label>zip code</label>
                <input 
                type="text"
                name="zip_code" 
                value={formik.values.zip_code}
                 onChange={formik.handleChange} 
                 placeholder="900321"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="browse jb_cover">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="job_filter_category_sidebar jb_cover">
                <div className="job_filter_sidebar_heading jb_cover">
                  <h1> social networks</h1>
                </div>
                <div className="job_overview_header jb_cover">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="contect_form3">
                        <label>google</label>
                        <input
                          type="text"
                          name="google" 
                          value={formik.values.google}
                          onChange={formik.handleChange} 
                          placeholder="https://google.com/webstrot"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="contect_form3">
                        <label>facebook</label>
                        <input
                          type="text"
                          name="facebook" 
                          value={formik.values.facebook}
                          onChange={formik.handleChange}
                          placeholder="https://www.facebook.com/webstrot"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="contect_form3">
                        <label>twitter</label>
                        <input
                          type="text"
                          name="twitter" 
                          value={formik.values.twitter}
                          onChange={formik.handleChange}
                          placeholder="https://www.twitter.com/webstrot"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="contect_form3">
                        <label>linkedin</label>
                        <input
                          type="email"
                          name="linkedin" 
                          value={formik.values.linkedin}
                          onChange={formik.handleChange}
                          placeholder="https://www.linkedin.com/webstrot"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="header_btn search_btn jb_cover">
                        <a href="link">add more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="job_filter_category_sidebar jb_cover">
                <div className="job_filter_sidebar_heading jb_cover">
                  <h1> password &amp; security</h1>
                </div>
                <div className="job_overview_header jb_cover">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="contect_form3">
                        <label>verification email</label>
                        <input
                          type="email"
                          name="current_email" 
                          value={formik.values.current_email}
                          onChange={formik.handleChange}
                          placeholder="webstrot@example.com"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="contect_form3">
                        <label>current pasword</label>
                        <input
                          type="password"
                          name="current_password" 
                          value={formik.values.current_password}
                          onChange={formik.handleChange}
                          placeholder="*************"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="contect_form3">
                        <label>new pasword</label>
                        <input
                          type="password"
                          name="new_password" 
                          value={formik.values.new_password}
                          onChange={formik.handleChange}
                          placeholder="*************"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                      <div className="contect_form3">
                        <label> repeat new pasword</label>
                        <input
                          type="password"
                          name="repeat_new_password" 
                          value={formik.values.repeat_new_password}
                          onChange={formik.handleChange}
                          placeholder="*************"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="login_remember_box jb_cover">
                <label className="control control--checkbox">
                  Enable Two Step Verification Via Email
                  <input type="checkbox" />
                  <span className="control__indicator" />
                </label>
                <div className="header_btn search_btn jb_cover">
                  <button  type='submit'>save changes</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
  </div>
    </Formik>
  {/*employee dashboard wrapper end*/}
</>

  )
}

export default RecProfile