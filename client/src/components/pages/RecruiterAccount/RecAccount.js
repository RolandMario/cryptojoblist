import React, {useContext} from 'react'

import * as AccountComponents from './RecExport'

import { RecAccountContext } from '../../context/RecAccountContext'
const RecAccount = () => {

    const [recAccountData, setRecAccountData] = useContext(RecAccountContext);


    const renderAccountComponents = ()=>{
        const Com = AccountComponents[recAccountData];
        return <Com/>
    
    }
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
              <img src="images/web.png" alt="post_img" />
              <h4>Webstrot Technology</h4>
              <p>@Webstrot</p>
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
                  <a
                    href="comp_employer_dashboard.html"
                    className="link_active"
                  >
                    <i className="fas fa-tachometer-alt" /> dashboard{" "}
                  </a>
                </li>
                <li>
                  <button onClick={()=>setRecAccountData('RecProfile')}>
                    {" "}
                    <i className="fas fa-edit" />
                    edit profile
                  </button>
                </li>
                <li>
                  <a href="comp_company_page.html">
                    <i className="fas fa-file" />
                    company page{" "}
                  </a>
                </li>
                <li>
                  <a href="comp_employer_manage_jobs.html">
                    <i className="fas fa-suitcase" />
                    manage jobs
                  </a>
                </li>
                <li>
                  <a href="comp_applications.html">
                    <i className="fas fa-mobile" />
                    applications
                  </a>
                </li>
                <li>
                  <a href="comp_post_new_job.html">
                    <i className="fas fa-user-plus" />
                    post new job
                  </a>
                </li>
                <li>
                  <a href="message.html">
                    <i className="fas fa-envelope" />
                    message
                  </a>
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