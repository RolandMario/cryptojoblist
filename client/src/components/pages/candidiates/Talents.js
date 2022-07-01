import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
const Talents = () => {

  const [candidiateProfile, setCandidiateProfile] = useState(null)
  
  const fetchCandidiateProfile = async()=>{
    try {
      const url = `${process.env.REACT_APP_API_URL}/server/getAllCandidiateProfile`;
      const {data} = await axios.get(url)
      console.log("CanInfo", data)
      setCandidiateProfile(data.rows)
    } catch (error) {
      console.log("error getting recruiter info", error)
    }
   

  }
  

  useEffect(() => {
   
      fetchCandidiateProfile();
      
   // eslint-disable-next-line
  }, [])
  return (
    <>
     <div>
          {/* Page Title Start */}
          <section className="page-title title-bg7">
            <div className="d-table">
              <div className="d-table-cell">
                <h2>Candidates</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Candidates</li>
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
          {/* Candidates Section Start */}
          <section className="candidate-style-two pt-100 pb-70">
            <div className="container">
              <div className="row">
                {candidiateProfile?.map(profile=>{
                  return(
                     <div className="col-lg-3 col-sm-6" key={profile.walletAddress}>
                  <div className="candidate-card">
                    <div className="candidate-img">
                      <img src={`${process.env.REACT_APP_API_URL}/${profile?.photo}`} alt="candidate" />
                    </div>
                    <div className="candidate-text">
                      <h3>
                        <a href="candidate-details.html">{profile.name}</a>
                      </h3>
                      <ul>
                        <li>
                         {profile.job_title}
                        </li>
                      </ul>
                    </div>
                    <div className="candidate-social">
                      <a href="link" target="_blank"><i className="bx bxl-facebook" /></a>
                      <a href="link" target="_blank"><i className="bx bxl-twitter" /></a>
                      <a href="link" target="_blank"><i className="bx bxl-linkedin" /></a>                           
                    </div>
                  </div>
                </div>
                  )
                })}
               
             
              </div>
            </div>
          </section>
          {/* Candidates Section End */}
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

export default Talents

