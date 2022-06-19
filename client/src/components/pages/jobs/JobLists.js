import React, {useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { WalletAddressContext } from '../../context/WalletAddressContext'
import axios from  'axios'
import { JobPostContext } from '../../context/JobPostContext'
import {useNavigate} from 'react-router-dom'
import { baseURL } from '../../constants/Constants'
const JobLists = () => {

let navigate = useNavigate();

const [walletAddress, setWalletAddress] = useContext(WalletAddressContext)
const [jobPostData, setJobPostData] = useContext(JobPostContext)


const getjobPosts = async()=>{
 
  const url = `${baseURL}/api/recruiter/getAllJobPosts`;
  const {data} = await axios.get(url)
 
  setJobPostData(data.rows)

}

useEffect(() => {
  
  
     getjobPosts()
  
  
    
  }, [])
 
  return (
    <>
    <div>
          {/* Page Title Start */}
          <section className="page-title title-bg4">
            <div className="d-table">
              <div className="d-table-cell">
                <h2>Job List</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Job List</li>
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
          {/* Job Section End */}   
          <section className="job-style-two job-list-section pt-100 pb-70">
            <div className="container">
              <div className="section-title text-center">
                <h2>Jobs You May Be Interested In</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
              </div>
              <div className="row">
                {jobPostData?.map((post, index)=>{
                  return(
                  <div className="col-lg-12" key={post.id}>
                  <div className="job-card-two">
                    <div className="row align-items-center">
                      <div className="col-md-1">
                        <div className="company-logo">
                          <a href="job-details.html" >
                          <img src="assets/img/company-logo/1.png" alt="logo" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">{post.job_title}</a>
                          </h3>
                          <ul>                                          
                            <li>
                              <i className="bx bx-briefcase" />
                              {post.job_title}
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              {post.salary}
                            </li>
                            <li>
                              <i className="bx bx-location-plus" />
                              {post.company_location}
                            </li>
                            <li>
                              <i className="bx bx-stopwatch" />
                              9 days ago
                            </li>
                          </ul>
                          <span>{post.job_type}</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="theme-btn text-end">
                          <button onClick={()=>{navigate(`/job-details/${post.id}`)}} className="default-btn">
                            Browse Job
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  )
                })}
               
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="link" tabIndex={-1} aria-disabled="true">
                      <i className="bx bx-chevrons-left bx-fade-left" />
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link" href="link">1</a></li>
                  <li className="page-item"><a className="page-link active" href="link">2</a></li>
                  <li className="page-item"><a className="page-link" href="link">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="link">
                      <i className="bx bx-chevrons-right bx-fade-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
          {/* Job Section End */}  
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

export default JobLists

