import React from 'react'
import { Link } from 'react-router-dom'

const JobLists = () => {
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
                <div className="col-lg-12">
                  <div className="job-card-two">
                    <div className="row align-items-center">
                      <div className="col-md-1">
                        <div className="company-logo">
                          <a href="job-details.html" />
                          <img src="assets/img/company-logo/1.png" alt="logo" />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">Web Designer, Graphic Designer, UI/UX Designer</a>
                          </h3>
                          <ul>                                          
                            <li>
                              <i className="bx bx-briefcase" />
                              Graphics Designer
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              $35000-$38000
                            </li>
                            <li>
                              <i className="bx bx-location-plus" />
                              Wellesley Rd, London
                            </li>
                            <li>
                              <i className="bx bx-stopwatch" />
                              9 days ago
                            </li>
                          </ul>
                          <span>Full Time</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="theme-btn text-end">
                          <a href="job-details.html" className="default-btn">
                            Browse Job
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="job-card-two">
                    <div className="row align-items-center">
                      <div className="col-md-1">
                        <div className="company-logo">
                          <a href="job-details.html">
                            <img src="assets/img/company-logo/2.png" alt="logo" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">Website Developer &amp; Software Developer</a>
                          </h3>
                          <ul>                                          
                            <li>
                              <i className="bx bx-briefcase" />
                              Web Developer
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              $3000-$8000
                            </li>
                            <li>
                              <i className="bx bx-location-plus" />
                              Garden Road, UK
                            </li>
                            <li>
                              <i className="bx bx-stopwatch" />
                              5 days ago
                            </li>
                          </ul>
                          <span>Full Time</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="theme-btn text-end">
                          <a href="job-details.html" className="default-btn">
                            Browse Job
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="job-card-two">
                    <div className="row align-items-center">
                      <div className="col-md-1">
                        <div className="company-logo">
                          <a href="job-details.html">
                            <img src="assets/img/company-logo/3.png" alt="logo" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">Application Developer &amp; Web Designer</a>
                          </h3>
                          <ul>                                          
                            <li>
                              <i className="bx bx-briefcase" />
                              App Developer
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              $3000-$4000
                            </li>
                            <li>
                              <i className="bx bx-location-plus" />
                              State City, USA
                            </li>
                            <li>
                              <i className="bx bx-stopwatch" />
                              8 days ago
                            </li>
                          </ul>
                          <span>Part-Time</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="theme-btn text-end">
                          <a href="job-details.html" className="default-btn">
                            Browse Job
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="job-card-two">
                    <div className="row align-items-center">
                      <div className="col-md-1">
                        <div className="company-logo">
                          <a href="job-details.html">
                            <img src="assets/img/company-logo/4.png" alt="logo" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">Frontend &amp; Backend Developer</a>
                          </h3>
                          <ul>                                          
                            <li>
                              <i className="bx bx-briefcase" />
                              Web Developer
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              $5000-$8000
                            </li>
                            <li>
                              <i className="bx bx-location-plus" />
                              Drive Post NY 676
                            </li>
                            <li>
                              <i className="bx bx-stopwatch" />
                              1 days ago
                            </li>
                          </ul>
                          <span>Full Time</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="theme-btn text-end">
                          <a href="job-details.html" className="default-btn">
                            Browse Job
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="job-card-two">
                    <div className="row align-items-center">
                      <div className="col-md-1">
                        <div className="company-logo">
                          <a href="job-details.html">
                            <img src="assets/img/company-logo/5.png" alt="logo" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">IT Department &amp; Manager</a>
                          </h3>
                          <ul>                                          
                            <li>
                              <i className="bx bx-briefcase" />
                              Manager
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              $35000-$38000
                            </li>
                            <li>
                              <i className="bx bx-location-plus" />
                              Wellesley Rd, London
                            </li>
                            <li>
                              <i className="bx bx-stopwatch" />
                              7 days ago
                            </li>
                          </ul>
                          <span>Full Time</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="theme-btn text-end">
                          <a href="job-details.html" className="default-btn">
                            Browse Job
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="job-card-two">
                    <div className="row align-items-center">
                      <div className="col-md-1">
                        <div className="company-logo">
                          <a href="job-details.html">
                            <img src="assets/img/company-logo/6.png" alt="logo" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">Office Assistant</a>
                          </h3>
                          <ul>                                          
                            <li>
                              <i className="bx bx-briefcase" />
                              Manager
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              $10000-$12000
                            </li>
                            <li>
                              <i className="bx bx-location-plus" />
                              Wellesley Rd, London
                            </li>
                            <li>
                              <i className="bx bx-stopwatch" />
                              9 days ago
                            </li>
                          </ul>
                          <span>Full Time</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="theme-btn text-end">
                          <a href="job-details.html" className="default-btn">
                            Browse Job
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="job-card-two">
                    <div className="row align-items-center">
                      <div className="col-md-1">
                        <div className="company-logo">
                          <a href="job-details.html">
                            <img src="assets/img/company-logo/1.png" alt="logo" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">Accountants</a>
                          </h3>
                          <ul>                                          
                            <li>
                              <i className="bx bx-briefcase" />
                              Finance
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              $5000-$8000
                            </li>
                            <li>
                              <i className="bx bx-location-plus" />
                              Green View, Australia
                            </li>
                            <li>
                              <i className="bx bx-stopwatch" />
                              2 days ago
                            </li>
                          </ul>
                          <span>Full Time</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="theme-btn text-end">
                          <a href="job-details.html" className="default-btn">
                            Browse Job
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="job-card-two">
                    <div className="row align-items-center">
                      <div className="col-md-1">
                        <div className="company-logo">
                          <a href="job-details.html">
                            <img src="assets/img/company-logo/2.png" alt="logo" />
                          </a>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="job-info">
                          <h3>
                            <a href="job-details.html">Budget Analysts</a>
                          </h3>
                          <ul>                                          
                            <li>
                              <i className="bx bx-briefcase" />
                              Data Science
                            </li>
                            <li>
                              <i className="bx bx-briefcase" />
                              $3000-$8000
                            </li>
                            <li>
                              <i className="bx bx-location-plus" />
                              Park Road, UK
                            </li>
                            <li>
                              <i className="bx bx-stopwatch" />
                              3 days ago
                            </li>
                          </ul>
                          <span>Full Time</span>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="theme-btn text-end">
                          <a href="job-details.html" className="default-btn">
                            Browse Job
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">
                      <i className="bx bx-chevrons-left bx-fade-left" />
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link active" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">
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

