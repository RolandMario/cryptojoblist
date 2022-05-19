import React from 'react'
import { Link } from 'react-router-dom'

const PostJobs = () => {
  return (
    <>
    <div>
          {/* Page Title Start */}
          <section className="page-title title-bg3">
            <div className="d-table">
              <div className="d-table-cell">
                <h2>Post a Job</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Post a Job</li>
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
          {/* Post Job Section Start */}
          <div className="job-post ptb-100">
            <div className="container">
              <form className="job-post-from">
                <h2>Fill Up Your Job information</h2>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Title</label>
                      <input type="text" className="form-control" id="exampleInput1" placeholder="Job Title or Keyword" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Category</label>
                      <select className="category">
                        <option data-display="Category">Category</option>
                        <option value={1}>Web Development</option>
                        <option value={2}>Graphics Design</option>
                        <option value={4}>Data Entry</option>
                        <option value={5}>Visual Editor</option>
                        <option value={6}>Office Assistant</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Company Name</label>
                      <input type="text" className="form-control" id="exampleInput2" placeholder="Company Name" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Company Email</label>
                      <input type="email" className="form-control" id="exampleInput3" placeholder="e.g. hello@company.com" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Company Website (Optional)</label>
                      <input type="text" className="form-control" id="exampleInput4" placeholder="e.g www.companyname.com" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Location</label>
                      <input type="text" className="form-control" id="exampleInput5" placeholder="e.g. London" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Type</label>
                      <select className="category">
                        <option data-display="Job Type">Job Type</option>
                        <option value={1}>Full Time</option>
                        <option value={2}>Part Time</option>
                        <option value={4}>Freelancer</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Job Tags</label>
                      <input type="text" className="form-control" id="exampleInput6" placeholder="e.g. web design, graphics design, video editing" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Salary (Optional)</label>
                      <input type="number" className="form-control" id="exampleInput7" placeholder="e.g. $20,000" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Experience</label>
                      <input type="text" className="form-control" id="exampleInput8" placeholder="e.g. 1 year" required />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">Job Description</label>
                      <textarea className="form-control description-area" id="exampleFormControlTextarea1" rows={6} placeholder="Job Description" required defaultValue={""} />
                    </div>
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
        </div>
      
    </>
  )
}

export default PostJobs

