import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import * as AccountComponents from './AccountDetails'
import { AccountContext } from '../../context/AccountContext'
const Account = () => {
    const [accountData, setAccountData] = useContext(AccountContext);


    const renderAccountComponents = ()=>{
        const Com = AccountComponents[accountData];
        return <Com/>
    
    }
  return (
    <>
    <div>
          {/* Page Title Start */}
          <section className="page-title title-bg10">
            <div className="d-table">
              <div className="d-table-cell">
                <h2>Account</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Account</li>
                </ul>
              </div>
            </div>
            <div className="lines">
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </div>
          </section>
          {/* Page Title End */}
          {/* Account Area Start */}
          <section className="account-section ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="account-information">
                    <div className="profile-thumb">
                      <img src="assets/img/account.jpg" alt="account holder image" />
                      <h3>John Smith</h3>
                      <p>Web Developer</p>
                    </div>
                    <ul>
                        <li>
                        <a  className="active" onClick={()=>setAccountData("Dashboard")}>
                          <i className="bx bx-user" />
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="#" onClick={()=>{setAccountData("Profile")}}>
                          <i className="bx bx-user" />
                          My Profile
                        </a>
                      </li>
                      <li>
                        <Link to="/resume">
                          <i className="bx bxs-file-doc" />
                          My Resume
                        </Link>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bx bx-briefcase" />
                          Applied Job
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bx bx-envelope" />
                          Messages
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bx bx-heart" />
                          Saved Jobs
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bx bx-lock-alt" />
                          Change Password
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bx bx-coffee-togo" />
                          Delete Account
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bx bx-log-out" />
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <ProfileDetails/> */}
              
                   {renderAccountComponents()}
               
               
              </div>
            </div>
          </section>
          {/* Account Area End */}
          {/* Subscribe Section Start */}
          <section className="subscribe-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="section-title">
                    <h2>Get New Job Notifications</h2>
                    <p>Subscribe &amp; get all related jobs notification</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <form className="newsletter-form" data-toggle="validator">
                    <input type="email" className="form-control" placeholder="Enter your email" name="EMAIL" required autoComplete="off" />
                    <button className="default-btn sub-btn" type="submit">
                      Subscribe
                    </button>
                    <div id="validator-newsletter" className="form-result" />
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* Subscribe Section End */}
        </div>
    </>
  )
}

export default Account

