import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik, Field, Form } from 'formik';
import {useParams, useNavigate} from 'react-router-dom'
const SignIn = () => {
let navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            email: "",
            password: ""
        },
        onSubmit: (values)=>{
            if(values.email==="test@gmail.com" && values.password ==="test1"){
                navigate('/account')
            }
        }
    })
  return (
    <>
    <div>
          {/* Page Title Start */}
          <section className="page-title title-bg12">
            <div className="d-table">
              <div className="d-table-cell">
                <h2>Sign In</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Sign In</li>
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
          {/* Sign In Section Start */}
          <div className="signin-section ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
                  <form onSubmit={formik.handleSubmit} className="signin-form">
                    <div className="form-group">
                      <label>Enter Email</label>
                      <input type="email"  name="email"  value={formik.values.email} onChange={formik.handleChange}
                       className="form-control" placeholder="Enter Your Email" required />
                    </div>
                    <div className="form-group">
                      <label>Enter Password</label>
                      <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange}
                       className="form-control" placeholder="Enter Your Password" required />
                    </div>
                    <div className="signin-btn text-center">
                      <button type="submit">Sign In</button>
                    </div>
                    <div className="other-signin text-center">
                      <span>Or sign in with</span>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="bx bxl-google" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="create-btn text-center">
                      <p>Not have an account?
                        <Link to="/sign-up">
                          Create an account
                          <i className="bx bx-chevrons-right bx-fade-right" />
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>  
              </div>
            </div>
          </div>
          {/* Sign In Section End */}
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

export default SignIn

