import React, {useContext, useState, useEffect} from 'react'

import * as AccountComponents from './RecExport'
import axios from 'axios'
import { RecAccountContext } from '../../context/RecAccountContext'
import { WalletAddressContext } from '../../context/WalletAddressContext';
const RecAccount = () => {

    const [recAccountData, setRecAccountData] = useContext(RecAccountContext);
    const [walletAddress, ] = useContext(WalletAddressContext)
    const [recData, setRecData] = useState({})
   const [recJobsApplicantsData, setRecJobsApplicantsData] = useState(null)
   const [applications, setApplications] = useState(null)

    const renderAccountComponents = ()=>{
        const Com = AccountComponents[recAccountData];
        return <Com data={recData} jobApplicants={recJobsApplicantsData} applicatns={applications}
        setRecAccountData={setRecAccountData}/>
    
    }

  
  
  
  const url = `${process.env.REACT_APP_API_URL}/server/getRecruiter?addr=${walletAddress}`;
  const fetchRecruiterdetails = async()=>{     
    try {
     
      const {data} = await axios.get(url)
      console.log("RecInfo", data)
      setRecData(data)
    } catch (error) {
      console.log("error getting recruiter info", error)
    }
   

  }

  const applicantsUrl = `${process.env.REACT_APP_API_URL}/server/recGetApplication?addr=${walletAddress}`

  const fetchApplicants = async()=>{
    try {
      const {data} = await axios.get(applicantsUrl)
      console.log("Recruiter applicants", data)
      setRecJobsApplicantsData(data)
    } catch (error) {
      console.log(error)
      
    }
  }

  //get applications then includes jobposts, the upper one is get jobposts includes applications

  const applicantionsUrl = `${process.env.REACT_APP_API_URL}/server/getApplications?addr=${walletAddress}`

  const fetchApplicantions = async()=>{
    try {
      const {data} = await axios.get(applicantionsUrl)
      console.log("application for the recruiter", data)
      setApplications(data)
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(() => {
  
    if(walletAddress !== ""){
       fetchRecruiterdetails()
       fetchApplicants()
       fetchApplicantions()
    }
    
     // eslint-disable-next-line 
    }, [walletAddress])
  return (
    <>
    <>
  {/*employee dashboard wrapper start*/}
  <div className="employe_dashboard_wrapper jb_cover">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="emp_dashboard_sidebar jb_cover">
            <div className="emp_web_profile jb_cover">
              <img src={`${process.env.REACT_APP_API_URL}/${recData.cover_logo}`} alt="post_img" />
              <h4>{recData.company_name}</h4>
              <p>@{recData.username}</p>
              <div className="skills jb_cover">
                <div className="skill-item jb_cover">
                  <h6>
                    profile<span>70%</span>
                  </h6>
                  <div className="skills-progress">
                    <span data-value="70%" />
                  </div>
                </div>
              </div>
            </div>
            <div className="emp_follow_link jb_cover">
              <ul className="feedlist">
                <li>
                  <button
                    onClick={()=>setRecAccountData('RecDashboard')}
                    className="link_active"
                  >
                    <i className="fas fa-tachometer-alt" /> dashboard{" "}
                  </button>
                </li>
                <li>
                  <button onClick={()=>setRecAccountData('RecProfile')}>
                    {" "}
                    <i className="fas fa-edit" />
                    edit profile
                  </button>
                </li>
                <li>
                  <button
                  onClick={()=>setRecAccountData('CompanyPage')}
                  >
                    <i className="fas fa-file" />
                    company page{" "}
                  </button>
                </li>
                <li>
                  <button 
                  onClick={()=>setRecAccountData('ManagedJobs')}
                  >
                    <i className="fas fa-suitcase" />
                    manage jobs
                  </button>
                </li>
                <li>
                  <button 
                  onClick={()=>setRecAccountData('Applications')}
                  >
                    <i className="fas fa-mobile" />
                    applications
                  </button>
                </li>
                <li>
                  <button
                  onClick={()=>setRecAccountData('RecPostJobs')}
                  >
                    <i className="fas fa-user-plus" />
                    post new job
                  </button>
                </li>
                <li>
                  <button
                  onClick={()=>setRecAccountData('RecMessage')}
                  >
                    <i className="fas fa-envelope" />
                    message
                  </button>
                </li>
               
              </ul>
              <ul className="feedlist logout_link jb_cover">
                <li>
                  <a href="link">
                    <i className="fas fa-power-off" /> log out
                  </a>
                </li>
                <li>
                  <a href="link" data-toggle="modal" data-target="#myModal">
                    <i className="fas fa-trash-alt" />
                    delete profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="modal fade delete_popup" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="delett_cntn jb_cover">
                      <h1>
                        <i className="fas fa-trash-alt" /> delete account
                      </h1>
                      <p>
                        Are you sure! You want to delete your profile. This
                        <br /> can't be undone!
                      </p>
                      <div className="delete_jb_form">
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter Password"
                        />
                      </div>
                      <div className="header_btn search_btn applt_pop_btn">
                        <a href="link">save updates</a>
                      </div>
                      <div className="cancel_wrapper">
                        <a href="link" className="" data-dismiss="modal">
                          cancel
                        </a>
                      </div>
                      <div className="login_remember_box jb_cover">
                        <label className="control control--checkbox">
                          You accepts our <a href="link">Terms and Conditions </a>{" "}
                          and <a href="link">Privacy Policy</a>
                          <input type="checkbox" />
                          <span className="control__indicator" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       {/* <RecDetails/> */}
       {renderAccountComponents()}
      </div>
    </div>
  </div>
  {/*employee dashboard wrapper end*/}
  {/* footer Wrapper End */}
  {/* chat box Wrapper start */}
  <div id="chat-circle" className="btn btn-raised">
    <i className="fas fa-comment-alt" />
  </div>
  <div className="chat-box">
    <div className="chat-box-header">
      ChatBot
      <span className="chat-box-toggle">
        <i className="fas fa-times" />
      </span>
    </div>
    <div className="chat-box-body">
      <div className="chat-box-overlay"></div>
      <div className="chat-logs"></div>
      {/*chat-log */}
    </div>
    <div className="chat-input">
      <form>
        <input type="text" id="chat-input" placeholder="Send a message..." />
        <button type="submit" className="chat-submit" id="chat-submit">
          <i className="fas fa-paper-plane" />
        </button>
      </form>
    </div>
  </div>
  {/* chat box Wrapper end */}
</>

    </>
  )
}

export default RecAccount