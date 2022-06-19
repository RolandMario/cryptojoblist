import React, {useContext, useReducer} from 'react'
import { useFormik } from 'formik';
import axios from 'axios'
import { WalletAddressContext } from '../../context/WalletAddressContext';
import { baseURL } from '../../constants/Constants';

const PostNewJobs = () => {

    let initialState ={
        isLoading: "",
        success: "",
        existed: "",
        failed: ""
      }
    
      const postJobReducer = (state, action)=>{
          switch (action.type) {
            case "authenticate":{
              return{
                  ...state,
                  jobPosting: "",
                  isLoading: "Authenticating..., pls wait!",
                  success: "",
                  failed: "",
                  existed: ""
                  
              }
          }
          case "postJob":{
            return{
                ...state,
                jobPosting: "persisting data into the database",
                isLoading: "",
                success: "",
                failed: "",
                existed: ""
                
            }
        }
        case "succeeded":{
          return{
              ...state,
              jobPosting: "",
              success: "Successful",
              isLoading: "",
              failed:"",
              existed: ""
          }
      }
      case "failure":{
        return{
            ...state,
            jobPosting: "",
            success: "",
            isLoading: "",
            failed:" User Not found",
            existed: ""
        }
    }
            default:
              return state
          }
      }
      
      const [walletAddress, ] = useContext(WalletAddressContext)
      const [state, dispatch] = useReducer(postJobReducer, initialState)
      const formik = useFormik({
        initialValues:{
          job_title: "",
          category: "",
          company_name: "",
          company_email: "",
          company_website: "",
          company_location: "",
          job_type: "",
          job_tag: "",
          salary: "",
          experience: "",
          job_desc: ""
    
        },
        onSubmit: async(values)=>{
          dispatch({type: "authenticate"})
         
          const url = `${baseURL}/api/recruiter/addJobPost`
          
            let jobPostDetails = {
              "job_title":values.job_title,
              "category": values.category,
              "company_name": values.company_name,
              "company_email": values.company_email,
              "company_website":values.company_website,
              "company_location": values.company_location,
              "job_type": values.job_type,
              "job_tag": values.job_tag,
              "salary":values.salary,
              "experience": values.experience,
              "job_desc": values.job_desc,
              "walletAddress": walletAddress
              
            }
            try {
              const urlfetch = `${baseURL}/api/recruiter/getRecruiter?addr=${walletAddress}`
              const {data} = await axios.get(urlfetch)
              if(data){
                try {
                  dispatch({type:'postJob'})
                  const {data} = await axios.post(url, jobPostDetails)
                  console.log(data)
                  dispatch({type:'succeeded'})
                } catch (error) {
                  if(error.response.status === 400){
                    console.log("Yeah Error")
                  }else{
                    console.log("something went wrong, Try again")
                  }
                }
                
              }
            } catch (error) {
              if(error.response.status === 400){
               dispatch({type:'failure'})
              }else{
                console.log("something went wrong, Try again")
              }
            }
    
        }
      })
  return (
    <>
    <div className="col-lg-9 col-md-12 col-sm-12 col-12">
    <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
     {/* Post Job Section Start */}
     <div className="job-post ptb-100">
            <div className="container">
              <form onSubmit={formik.handleSubmit} className="job-post-from">
                <h2>Fill Up Your Job information</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Title</label>
                      <input type="text" name="job_title" value={formik.values.job_title} onChange={formik.handleChange} 
                      className="form-control" id="exampleInput1"
                       placeholder="Job Title or Keyword" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Category</label>
                      <select 
                      name='category'
                      value={formik.values.category}
                      onChange={formik.handleChange}
                      className="category">
                        <option data-display="Category">Category</option>
                        <option value={"Web Development"}>Web Development</option>
                        <option value={"Graphics Design"}>Graphics Design</option>
                        <option value={"Data Entry"}>Data Entry</option>
                        <option value={"Visual Editor"}>Visual Editor</option>
                        <option value={"Office Assistant"}>Office Assistant</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Company Name</label>
                      <input type="text" name="company_name" value={formik.values.company_name} onChange={formik.handleChange} 
                      className="form-control" id="exampleInput2" placeholder="Company Name" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Company Email</label>
                      <input type="email" name="company_email" value={formik.values.company_email} onChange={formik.handleChange} 
                      className="form-control" id="exampleInput3" 
                      placeholder="e.g. hello@company.com" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Company Website (Optional)</label>
                      <input type="text" name="company_website" value={formik.values.company_website} onChange={formik.handleChange} 
                      className="form-control" id="exampleInput4" placeholder="e.g www.companyname.com" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Location</label>
                      <input type="text" name="company_location" value={formik.values.company_location} onChange={formik.handleChange} 
                      className="form-control" id="exampleInput5" placeholder="e.g. London" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Type</label>
                      <select 
                      name='job_type'
                      value={formik.values.job_type}
                      onChange={formik.handleChange}
                      className="category">
                        <option data-display="Job Type">Job Type</option>
                        <option value={"Full Time"}>Full Time</option>
                        <option value={"Part Time"}>Part Time</option>
                        <option value={"Freelancer"}>Freelancer</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Tags</label>
                      <input type="text" name="job_tag" value={formik.values.job_tag} onChange={formik.handleChange} 
                      className="form-control" id="exampleInput6" placeholder="e.g. web design, graphics design, video editing" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Salary (Optional)</label>
                      <input type="number" name="salary" value={formik.values.salary} onChange={formik.handleChange} 
                      className="form-control" id="exampleInput7" placeholder="e.g. $20,000" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Experience</label>
                      <input type="text" name="experience" value={formik.values.experience} onChange={formik.handleChange} 
                      className="form-control" id="exampleInput8" placeholder="e.g. 1 year" required />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">Job Description</label>
                      <textarea name="job_desc" value={formik.values.job_desc} onChange={formik.handleChange} 
                      className="form-control description-area" id="exampleFormControlTextarea1" rows={6} placeholder="Job Description" required  />
                    </div>
                  </div>
                  <div className='postJobState'>
                    <h4>{state.isLoading }{state.success}{state.failed}{state.existed}{state.jobPosting}</h4>
                  </div>
                  
                  <div className="col-md-12 text-center">
                    <button type="submit" className="post-btn">
                      Post A Job
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Post Job Section End */}
    </div>
    </div>
    </div>
    </>
  )
}

export default PostNewJobs