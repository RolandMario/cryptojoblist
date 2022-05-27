import React from 'react'
import { Link } from 'react-router-dom'

const FindJobs = () => {
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
                      <option value={1}>Web Development</option>
                      <option value={2}>Graphics Design</option>
                      <option value={4}>Data Entry</option>
                      <option value={5}>Visual Editor</option>
                      <option value={6}>Office Assistant</option>
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
                <div className="col-lg-3 col-sm-6">
                  <a href="job-list.html">
                    <div className="category-item">
                      <i className="flaticon-wrench-and-screwdriver-in-cross" />
                      <h3>Construction</h3>
                      <p>6 new Job</p>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="job-list.html">
                    <div className="category-item">
                      <i className="flaticon-accounting" />
                      <h3>Finance</h3>
                      <p>8 new Job</p>
                    </div>
                  </a>                  
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="job-list.html">
                    <div className="category-item">
                      <i className="flaticon-heart" />
                      <h3>Healthcare</h3>
                      <p>9 new Job</p>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="job-list.html">
                    <div className="category-item">
                      <i className="flaticon-computer-1" />
                      <h3>Graphic Design</h3>
                      <p>6 new Job</p>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="job-list.html">
                    <div className="category-item">
                      <i className="flaticon-research" />
                      <h3>Banking Jobs</h3>
                      <p>5 new Job</p>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="job-list.html">
                    <div className="category-item">
                      <i className="flaticon-worker" />
                      <h3>Automotive</h3>
                      <p>12 new Job</p>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <a href="job-list.html">
                    <div className="category-item">
                      <i className="flaticon-graduation-cap" />
                      <h3>Education</h3>
                      <p>15 new Job</p>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3  col-sm-6">
                  <a href="job-list.html">
                    <div className="category-item">
                      <i className="flaticon-computer" />
                      <h3>Data Analysis</h3>
                      <p>5 new Job</p>
                    </div>
                  </a>
                </div>
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
                <div className="col-md-6">
                  <div className="job-card">
                    <div className="row align-items-center">
                      <div className="col-lg-3">
                        <div className="thumb-img">
                          <a href="job-details.html">
                            <img src="assets/img/company-logo/1.png" alt="company" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">Post-Room Operate</a>
                          </h3>
                          <ul>
                            <li>Via <a href="link">Tourt Design LTD</a></li>
                            <li>
                              <i className="bx bx-location-plus" />
                              Wellesley Rd, London
                            </li>
                            <li>
                              <i className="bx bx-filter-alt" />
                              Accountancy
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              Freelance
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="job-save">
                          <span>Full Time</span>
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
                <div className="col-md-6">
                  <div className="job-card">
                    <div className="row align-items-center">
                      <div className="col-lg-3">
                        <div className="thumb-img">
                          <a href="job-details.html">
                            <img src="assets/img/company-logo/2.png" alt="company logo" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">Data Entry</a>
                          </h3>
                          <ul>
                            <li>Via <a href="link">Techno Inc.</a></li>
                            <li>
                              <i className="bx bx-location-plus" />
                              Street 40/A, London
                            </li>
                            <li>
                              <i className="bx bx-filter-alt" />
                              Data Entry
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              Freelance
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="job-save">
                          <a href="/savejobs">
                            <i className="bx bx-heart" />
                          </a>
                          <p>
                            <i className="bx bx-stopwatch" />
                            3 Hr Ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="job-card">
                    <div className="row align-items-center">
                      <div className="col-lg-3">
                        <div className="thumb-img">
                          <a href="job-details.html">
                            <img src="assets/img/company-logo/3.png" alt="company logo" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">Graphic Designer</a>
                          </h3>
                          <ul>
                            <li>Via <a href="/link">Devon Design</a></li>
                            <li>
                              <i className="bx bx-location-plus" />
                              West Sight, USA
                            </li>
                            <li>
                              <i className="bx bx-filter-alt" />
                              Graphics
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              Freelance
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="job-save">
                          <a href="/link">
                            <i className="bx bx-heart" />
                          </a>
                          <p>
                            <i className="bx bx-stopwatch" />
                            4 Hr Ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="job-card">
                    <div className="row align-items-center">
                      <div className="col-lg-3">
                        <div className="thumb-img">
                          <a href="job-details.html">
                            <img src="assets/img/company-logo/4.png" alt="company logo" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">Web Developer</a>
                          </h3>
                          <ul>
                            <li>Via <a href="/link">MegaNews</a></li>
                            <li>
                              <i className="bx bx-location-plus" />
                              San Francisco, California
                            </li>
                            <li>
                              <i className="bx bx-filter-alt" />
                              Development
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              Freelance
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="job-save">
                          <a href="/link">
                            <i className="bx bx-heart" />
                          </a>
                          <p>
                            <i className="bx bx-stopwatch" />
                            5 Hr Ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="job-card">
                    <div className="row align-items-center">
                      <div className="col-lg-3">
                        <div className="thumb-img">
                          <a href="job-details.html">
                            <img src="assets/img/company-logo/5.png" alt="company logo" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">Digital Marketor</a>
                          </h3>
                          <ul>
                            <li>Via <a href="/link">AB Marketer LTD</a></li>
                            <li>
                              <i className="bx bx-location-plus" />
                              Wellesley Rd, London
                            </li>
                            <li>
                              <i className="bx bx-filter-alt" />
                              Marketing
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              Freelance
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="job-save">
                          <a href="/link">
                            <i className="bx bx-heart" />
                          </a>
                          <p>
                            <i className="bx bx-stopwatch" />
                            6 Hr Ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="job-card">
                    <div className="row align-items-center">
                      <div className="col-lg-3">
                        <div className="thumb-img">
                          <a href="job-details.html">
                            <img src="assets/img/company-logo/6.png" alt="company logo" />
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">UI/UX Designer</a>
                          </h3>
                          <ul>
                            <li>Via <a href="link">Design Hunter</a></li>
                            <li>
                              <i className="bx bx-location-plus" />
                              Zoo Rd, London
                            </li>
                            <li>
                              <i className="bx bx-filter-alt" />
                              Accountancy
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              Freelance
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="job-save">
                          <a href="link">
                            <i className="bx bx-heart" />
                          </a>
                          <p>
                            <i className="bx bx-stopwatch" />
                            8 Hr Ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

