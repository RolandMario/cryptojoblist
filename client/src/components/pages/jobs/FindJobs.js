import React, {useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { JobPostContext } from '../../context/JobPostContext'




const FindJobs = () => {

  let navigate = useNavigate()

  const [jobPostData,] = useContext(JobPostContext)
  const JobCategory = (props)=>{
    console.log(props)
    return (
      <>
       <div className="col-lg-3 col-sm-6">
        <a href="job-list.html">
          <div className="category-item">
            <i className="flaticon-wrench-and-screwdriver-in-cross" />
            <h3>{props.category}</h3>
            <p>{props.numOfPost} new Job</p>
          </div>
        </a>
      </div>
      </>
    )
  }
  return (
    <>
     <div>
          {/* Page Title Start */}
          <section className="page-title title-bg2">
            <div className="d-table">
              <div className="d-table-cell">
                <h2>Find a Job</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Find a Job</li>
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
          {/* Find Section Start */}
          <div className="find-section ptb-100">
            <div className="container">
              <form className="find-form mt-0">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Job Title or Keyword" />
                      <i className="bx bx-search-alt" />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input type="text" className="form-control" id="exampleInputEmail2" placeholder="Location" />
                      <i className="bx bx-location-plus" />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <select className="category">
                      <option data-display="Category">Category</option>
                      <option value={"Solidity Developer"}>Solidity Developer</option>
                        <option value={"Graphics Designer"}>Graphics Designer</option>
                        <option value={"Bitcoin Technology"}>Bitcoin Technology</option>
                        <option value={"Web3 Developer"}>Web3 Developer</option>
                        <option value={"Full Stack Developer"}>Full Stack Developer</option>
                        <option value={"Blockchain Marketer"}>Blockchain Marketer</option>
                        <option value={"Solution Architect"}>Solution Architect</option>
                        <option value={"Project Manager"}>Project Manager</option>
                    </select>
                  </div>
                  <div className="col-lg-3">
                    <button type="submit" className="find-btn">
                      Find A Job
                      <i className="bx bx-search" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Find Section End */}
          {/* Job Category Section Start */}
          <div className="category-style-two pb-70"> 
            <div className="container">
              <div className="section-title">
                <h2>Popular Jobs Category</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
              </div>
              <div className="row">
                <JobCategory category={'Solidity Developer'} numOfPost={"2"} />
                <JobCategory category={'Blockchain Developer'} numOfPost={"2"} />
                <JobCategory category={'Full Stack Developer'} numOfPost={"2"} />
                <JobCategory category={'Project Manager'} numOfPost={"2"} />
                <JobCategory category={'Blockchain Marketer'} numOfPost={"2"} />
                <JobCategory category={'Graphics Designer'} numOfPost={"2"} />
                <JobCategory category={'Solution Archetect'} numOfPost={"2"} />
                <JobCategory category={'Bitcoin Technology'} numOfPost={"2"} />
              </div>
            </div>
          </div>
          {/* Job Category Section End */}
          {/* Jobs Section Start */}
          <section className="job-section pb-70">
            <div className="container">
              <div className="section-title text-center">
                <h2>Jobs You May Be Interested In</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
              </div>
              <div className="row">
                {jobPostData?.map(jobpost=>{
                  return(
                      <div className="col-md-6" key={jobpost.id}>
                  <div className="job-card">
                    <div className="row align-items-center">
                      <div className="col-lg-3">
                        <div className="thumb-img">
                         
                            <img onClick={()=>{navigate(`/job-details/${jobpost.id}`)}} alt="company" />
                          
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">{jobpost.job_title}</a>
                          </h3>
                          <ul>
                            <li>Via <a href="link">{jobpost.company_name}</a></li>
                            <li>
                              <i className="bx bx-location-plus" />
                              {jobpost.company_location}, {jobpost.country}
                            </li>
                            <li>
                              <i className="bx bx-filter-alt" />
                              {jobpost.job_title}
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              {jobpost.job_type}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="job-save">
                          
                          <a href="/like">
                            <i className="bx bx-heart" />
                          </a>
                          <p>
                            <i className="bx bx-stopwatch" />
                            1 Hr Ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  )
                })}
              
              
              </div>
            </div>
          </section>
          {/* Jobs Section End */}
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

export default FindJobs

