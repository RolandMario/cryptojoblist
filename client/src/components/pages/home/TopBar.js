import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {

  

 
  return (
    <>
    <div className="navbar-area">
            {/* Menu For Mobile Device */}
            <div className="mobile-nav">
              <Link to="/" className="logo">
                <img src="assets/img/logo.png" alt="logo" />
              </Link>
            </div>
            {/* Menu For Desktop Device */}
            <div className="main-nav">
              <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <Link className="navbar-brand" to="/">
                    <img src="assets/img/logo.png" alt="logo" />
                  </Link>
                  <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                      <Link to="/" className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="about-us" className="nav-link">About</Link>
                      </li>
                      <li className="nav-item">
                        <a href="link" className="nav-link dropdown-toggle">Jobs</a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/find-job" className="nav-link">Find A Job</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/post-job" className="nav-link">Post A Job</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/job-lists" className="nav-link">Job List</Link>
                          </li>
                         
                        </ul>
                      </li>                
                      <li className="nav-item">
                        <a href="link" className="nav-link dropdown-toggle">Talents</a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/talents" className="nav-link">Browse Talents</Link>
                          </li>
                    
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="link" className="nav-link dropdown-toggle">Companies</a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/companies" className="nav-link">Browse Companies</Link>
                          </li>
                         
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="link" className="nav-link dropdown-toggle">Blog</a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/blog" className="nav-link">Crypto News</Link>
                          </li>
                         
                        </ul>
                      </li>
                      <li className="nav-item">
                            <Link to="/contact-us" className="nav-link">Contact Us</Link>
                          </li>
                    </ul>
                    <div className="other-option">
                      <Link to="/sign-up" className="signup-btn">Sign Up</Link>
                      <Link to="/sign-in" className="signin-btn">Sign In</Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
    </>
  )
}

export default TopBar