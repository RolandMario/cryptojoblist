import React, {useContext} from 'react'


import * as AccountComponents from './AccountDetails'
import { AccountContext } from '../../context/AccountContext'
import DbFooter from './DbFooter'
const Account = () => {
    const [accountData, setAccountData] = useContext(AccountContext);


    const renderAccountComponents = ()=>{
        const Com = AccountComponents[accountData];
        return <Com/>
    
    }
  return (
   
      <>
  {/*employee dashboard wrapper start*/}
  <div className="candidate_dashboard_wrapper jb_cover">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="emp_dashboard_sidebar jb_cover">
            <img
              src="images/profile.jpg"
              className="img-responsive"
              alt="post_img"
            />
            <div className="emp_web_profile candidate_web_profile jb_cover">
              <h4>luca wallace</h4>
              <p>@username</p>
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
                  <button onClick={()=>setAccountData('Dashboard')}  className="link_active">
                    <i className="fas fa-tachometer-alt" /> dashboard{" "}
                  </button>
                </li>
                <li>
                  <button onClick={()=>setAccountData('Profile')}>
                    {" "}
                    <i className="fas fa-edit" />
                    Edit profile
                  </button>
                </li>
                <li>
                  <a href="candidate_resume.html">
                    <i className="fas fa-file" />
                    resume{" "}
                  </a>
                </li>
                <li>
                  <a href="candidate_favourite_job.html">
                    <i className="fas fa-heart" />
                    favourite
                  </a>
                </li>
                <li>
                  <button onClick={()=>setAccountData('AppliedJobs')}>
                    <i className="fas fa-check-square" />
                    applied job
                  </button>
                </li>
                <li>
                  <button onClick={()=>setAccountData('chat')}>
                    <i className="fas fa-envelope" />
                    message
                  </button>
                </li>
                <li>
                  <a href="pricing_plans.html">
                    <i className="fas fa-tag" />
                    pricing plans
                  </a>
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
      {renderAccountComponents()}
      </div>
    </div>
  </div>

  <DbFooter/>
</>
    
   
  )
}

export default Account

