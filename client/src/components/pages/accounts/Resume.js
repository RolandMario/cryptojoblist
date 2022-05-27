import React from 'react'
import { Link } from 'react-router-dom'
const Resume = () => {
  return (
    <>
      <div>
          {/* Page Title Start */}
          <section className="page-title title-bg11">
            <div className="d-table">
              <div className="d-table-cell">
                <h2>Resume</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Resume</li>
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
          {/* Resume Area Start */}
          <section className="resume-section ptb-100">
            <div className="container">
              <div className="resume-area">
                <div className="row">
                  <div className="col-md-12">
                    <div className="resume-thumb-area text-center">
                      <img src="assets/img/account.jpg" alt="account" />
                      <h3>Lula Wallace</h3>
                      <p>Web Developer</p>
                      <div className="social-links">
                        <a href="link" target="-blank">
                          <i className="bx bxl-facebook" />
                        </a>
                        <a href="link" target="-blank">
                          <i className="bx bxl-twitter" />
                        </a>
                        <a href="link" target="-blank">
                          <i className="bx bxl-github" />
                        </a>
                        <a href="link" target="-blank">
                          <i className="bx bxl-linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="resume-content about-text">
                      <h3>
                        <i className="bx bx-user-circle" />
                        About Me
                      </h3>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                    <div className="resume-content basic-info-text">
                      <h3>
                        <i className="bx bx-book-alt" />
                        Basic Info
                      </h3>
                      <ul>
                        <li>
                          <span>Age:</span>
                          26
                        </li>
                        <li>
                          <span>Category:</span>
                          Web Development
                        </li>
                        <li>
                          <span>Experience:</span>
                          4 years
                        </li>
                        <li>
                          <span>Gender:</span>
                          Male
                        </li>
                        <li>
                          <span>Status:</span>
                          Full Time
                        </li>
                        <li>
                          <span>Experience:</span>
                          4 years
                        </li>
                      </ul>
                    </div>
                    <div className="resume-content education-text">
                      <h3>
                        <i className="bx bx-book-reader" />
                        Education Background
                      </h3>
                      <div className="education-info">
                        <span>2014-2018</span>
                        <h5>Diploma in Computer engineering</h5>
                        <h4>Columbia University</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                      <div className="education-info">
                        <span>2010-2014</span>
                        <h5>Bachelor in Computer Science</h5>
                        <h4>Oxford university, UK</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                      <div className="education-info">
                        <span>2008-2010</span>
                        <h5>Higher School certificate</h5>
                        <h4>Stanton College, USA</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </div>
                    <div className="resume-content  experience-text">
                      <h3>
                        <i className="bx bx-briefcase" />
                        Work Expericence
                      </h3>
                      <div className="experience-info">
                        <span>2016-2018</span>
                        <h5>Junior Web Developer</h5>
                        <h4>Stack LTD Company</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                      <div className="experience-info">
                        <span>2018-2021</span>
                        <h5>Full Stack Developer</h5>
                        <h4>Sanders IT</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </div>
                    </div>
                    <div className="resume-content skill">
                      <h3>
                        <i className="bx bx-check-shield" />
                        Skills
                      </h3>
                      <span>HTMl</span>
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>80%</div>
                      </div>
                      <span>JS</span>
                      <div className="progress">
                        <div className="progress-bar bg-info" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>90%</div>
                      </div>
                      <span>PHP</span>
                      <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>85%</div>
                      </div>
                      <span>SQL</span>
                      <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>95%</div>
                      </div>
                    </div>
                    <div className="theme-btn">
                      <a href="link" className="default-btn">
                        Download
                        <i className="bx bx-download bx-fade-down" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Resume Area End */}
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

export default Resume


