import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
   <>
   <div>
          {/* Page Title Start */}
          <section className="page-title title-bg13">
            <div className="d-table">
              <div className="d-table-cell">
                <h2>Sign Up</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Sign Up</li>
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
          {/* Sign up Section Start */}
          <div className="signup-section ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
                  <form className="signup-form">
                    <div className="form-group">
                      <label>Enter Username</label>
                      <input type="text" className="form-control" placeholder="Enter Username" required />
                    </div>
                    <div className="form-group">
                      <label>Enter Email</label>
                      <input type="email" className="form-control" placeholder="Enter Your Email" required />
                    </div>
                    <div className="form-group">
                      <label>Enter Password</label>
                      <input type="password" className="form-control" placeholder="Enter Your Password" required />
                    </div>
                    <div className="signup-btn text-center">
                      <button type="submit">Sign Up</button>
                    </div>
                    <div className="other-signup text-center">
                      <span>Or sign up with</span>
                      <ul>
                        <li>
                          <a href="link">
                            <i className="bx bxl-google" />
                          </a>
                        </li>
                        <li>
                          <a href="link">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="link">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="link">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="create-btn text-center">
                      <p>
                        Have an Account?
                        <Link to="/sign-in">
                          Sign In
                          <i className="bx bx-chevrons-right bx-fade-right" />
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>  
              </div>
            </div>
          </div>
          {/* Sign Up Section End */}
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

export default SignUp

