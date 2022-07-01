import React, {useContext} from 'react'
import { useFormik} from 'formik';
import axios from 'axios'
import { WalletAddressContext } from '../../context/WalletAddressContext';
import { ReducerContext } from '../../context/ReducerContext';


const ProfileDetails = ({candidiateProfile}) => {

  const [walletAddress, ] = useContext(WalletAddressContext)
  const reducerContext = useContext(ReducerContext)
  

  const formik = useFormik({
    initialValues:{
      cover_logo: candidiateProfile?.photo||"",
      name: candidiateProfile?.name||"",
      username:candidiateProfile?.username||"",
      email: candidiateProfile?.email,
      phone: candidiateProfile?.phone,
      portfolio: candidiateProfile?.portfolio,
      job_title: candidiateProfile?.job_title,
      country: candidiateProfile?.country,
      state: candidiateProfile?.state,
      city: candidiateProfile?.city,
      zip_code: candidiateProfile?.zip_code,
      residential_address: candidiateProfile?.residential_address,
      github: candidiateProfile?.github,
      facebook: candidiateProfile?.facebook,
      twitter: candidiateProfile?.twitter,
      linkedin: candidiateProfile?.linkedin,
      walletAddress: walletAddress
    },
    onSubmit: async(value)=>{
      console.log(value)
      reducerContext.dispatch({type: "authenticate"})
      const url = `${process.env.REACT_APP_API_URL}/server/updateCandidiateProfile`
     
      let formData = new FormData()
      formData.append('photo', value.photo)
      formData.append('name', value.name)
      formData.append('username', value.username)
      formData.append('email', value.email)
      formData.append('phone', value.phone)
      formData.append('portfolio', value.portfolio)
      formData.append('job_title', value.job_title)
      formData.append('country', value.country)
      formData.append('state', value.state)
      formData.append('city', value.city)
      formData.append('zip_code', value.zip_code)
      formData.append('residential_address', value.residential_address)
      formData.append('github', value.github)
      formData.append('facebook', value.facebook)
      formData.append('linkedin', value.linkedin)
      formData.append('twitter', value.twitter)
      formData.append('walletAddress', walletAddress)
    try {
      const {data} = await axios.put(url, formData)
      if(data){
        console.log("updated successfully", data)
        reducerContext.dispatch({type: "succeeded"})
      }
    } catch (error) {
      console.log("update errror", error)
      reducerContext.dispatch({type: "failure"})
    }
      
      
  },


})

console.log("context state",reducerContext)
  return (
    <>
    <div className="col-lg-9 col-md-12 col-sm-12 col-12">
    <form onSubmit={formik.handleSubmit} method='POST'  encType='multipart/form-data'>
    
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="job_listing_left_fullwidth jb_cover">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="jp_job_post_side_img">
              <img src="images/pf1.jpg" alt="post_img" />
            </div>
            <div className="jp_job_post_right_cont edit_profile_wrapper">
              <h4>JPEG or PNG 500x500px Thumbnail</h4>
              <div className="">
                <input
                   type="file"
                   name='photo'  onChange={(event)=>{
                     formik.setFieldValue('photo', event.target.files[0])
                 }}
                  id="input-file-now-custom-233"
                  className="dropify"
                  data-height={90}
                />
                <span className="post_photo">browse image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="browse_img_banner jb_cover">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contect_form3">
              <label>Full Name</label>
              <input type="text"  name="name" value={formik.values.name} onChange={formik.handleChange} placeholder="Luca Wallace" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contect_form3">
              <label>@username</label>
              <input type="text"  name="username" value={formik.values.username} onChange={formik.handleChange} placeholder="Luca Wallace" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contect_form3">
              <label>Email</label>
              <input type="email"  name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="luca@example.com" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contect_form3">
              <label>Phone</label>
              <input type="number"  name="phone" value={formik.values.phone} onChange={formik.handleChange} placeholder="+91 9098085819" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contect_form3">
              <label>Portfolio Link</label>
              <input type="text"  name="website" value={formik.values.website} onChange={formik.handleChange} placeholder="www.webstrot.com" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="select_box">
              <label>job Title</label>
              <select
               name="Job_title" 
               value={formik.values.job_title}
                onChange={formik.handleChange}
              >
                <option value={"Developer"}>Developer</option>
                <option value={"Blockchain Developer"}>Blockchain Developer</option>
                <option value={"system Engineer"}>System Engineer</option>
                <option value={"Software Testing"}>Software Testing</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contect_form3">
              <label>Residential_addresss</label>
              <input type="text" name="residential_address" value={formik.values.residential_address} onChange={formik.handleChange} placeholder="124/A Kalani Bagh" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contect_form3">
              <label>country</label>
              <input type="text" name="country" value={formik.values.country} onChange={formik.handleChange} placeholder="India" />
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
                <option>FCT</option>
                <option>LAGOS</option>
                <option>RIVERS</option>
                <option>KANO</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contect_form3">
              <label>city</label>
              <input type="text" name="city" value={formik.values.city} onChange={formik.handleChange}  placeholder="Dewas" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="select_box">
              <label>zip code</label>
              <input type="text" name="zip_code" value={formik.values.zip_code} onChange={formik.handleChange}  placeholder="Dewas" />
            
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
                      <label>github</label>
                      <input
                        type="text"
                        name="github" value={formik.values.github} onChange={formik.handleChange}
                        placeholder="https://google.com/webstrot"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contect_form3">
                      <label>facebook</label>
                      <input
                        type="text"
                        name="facebook" value={formik.values.facebook} onChange={formik.handleChange}
                        placeholder="https://www.facebook.com/webstrot"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contect_form3">
                      <label>twitter</label>
                      <input
                        type="text"
                        name="twitter" value={formik.values.twitter} onChange={formik.handleChange}
                        placeholder="https://www.twitter.com/webstrot"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contect_form3">
                      <label>linkedin</label>
                      <input
                        type="text"
                        name="linkedin" value={formik.values.linkedin} onChange={formik.handleChange}
                        placeholder="https://www.linkedin.com/webstrot"
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
              {/* { reducerContext?.state.isLoading} */}
             <h4>
               {reducerContext.state.isLoading} {reducerContext.state.success}{reducerContext.state.failed}
              
              </h4>
              <div className="header_btn search_btn jb_cover">
                {/* <a href="link">save changes</a> */}
                <button type='submit'>save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </form>
</div>

    </>
  )
}

export default ProfileDetails