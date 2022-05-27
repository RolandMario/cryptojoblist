import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
     <div>
          {/* Pre-loader Start */}
         
          {/* Pre-loader End */}
          {/* Navbar Area Start */}
         
          {/* Navbar Area End */}
          {/* Page Title Start */}
          <section className="page-title title-bg1">
            <div className="d-table">
              <div className="d-table-cell">
                <h2>About Us</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>About Us</li>
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
          {/* About Section Start */}
          <section className="about-section ptb-100">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="about-text">
                    <div className="section-title">
                      <h2>How We Started</h2>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="about-img">
                    <img src="assets/img/about.jpg" alt="about us cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* About Section End */}
          {/* Way To Use Section Start */}
          <section className="use-section pt-100 pb-70">
            <div className="container">
              <div className="section-title text-center">
                <h2>Easiest Way To Use</h2>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="use-text">
                    <span>1</span>
                    <i className="flaticon-website" />
                    <h3>Browse Job</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="use-text">
                    <span>2</span>
                    <i className="flaticon-recruitment" />
                    <h3>Find Your Vaccancy</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                  <div className="use-text">
                    <span>3</span>
                    <i className="flaticon-login" />
                    <h3>Submit Resume</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Way To Use Section End */}
          {/* Why Choose Section Start */}
          <section className="why-choose-two pt-100 pb-70">
            <div className="container">
              <div className="section-title text-center">
                <h2>Why You Choose Us Among Other Job Site?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="choose-card">
                    <i className="flaticon-resume" />
                    <h3>Advertise Job</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="choose-card">
                    <i className="flaticon-recruitment" />
                    <h3>Recruiter Profiles</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                  <div className="choose-card">
                    <i className="flaticon-employee" />
                    <h3>Find Your Dream Job</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Why Choose Section End */}
          {/* Grow Business Section Start */}
          <div className="grow-business pb-100">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <div className="grow-text">
                    <div className="section-title">
                      <h2>Grow Your Business Faster With Premium Advertising</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Consectetur adipiscing elit.
                    </p>
                    <div className="theme-btn">
                      <a href="link" className="default-btn">Checkout More</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="grow-img">
                    <img src="assets/img/grow-img.jpg" alt="grow" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grow Business Section End */}
          {/* Counter Section Start */}
          <div className="counter-section pt-100 pb-70">
            <div className="container">
              <div className="row counter-area">
                <div className="col-lg-3 col-6">
                  <div className="counter-text">
                    <i className="flaticon-resume" />
                    <h2><span>1225</span></h2>
                    <p>Job Posted</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="counter-text">
                    <i className="flaticon-recruitment" />
                    <h2><span>145</span></h2>
                    <p>Job Filed</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="counter-text">
                    <i className="flaticon-portfolio" />
                    <h2><span>170</span></h2>
                    <p>Company</p>
                  </div>
                </div>
                <div className="col-lg-3 col-6">
                  <div className="counter-text">
                    <i className="flaticon-employee" />
                    <h2><span>125</span></h2>
                    <p>Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Counter Section End */} 
          {/* Testimonial Section Start */}
          <div className="testimonial-style-two ptb-100">
            <div className="container">
              <div className="section-title text-center">
                <h2>What Client’s Say About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              </div>
              <div className="row">
                <div className="testimonial-slider-two owl-carousel owl-theme">
                  <div className="testimonial-items">
                    <div className="testimonial-text">
                      <i className="flaticon-left-quotes-sign" />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                    </div>
                    <div className="testimonial-info-text">
                      <h3>Alisa Meair</h3>
                      <p>CEO of  Company</p>
                    </div>
                  </div>
                  <div className="testimonial-items">
                    <div className="testimonial-text">
                      <i className="flaticon-left-quotes-sign" />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                    </div>
                    <div className="testimonial-info-text">
                      <h3>Adam Smith</h3>
                      <p>Web Developer</p>
                    </div>
                  </div>
                  <div className="testimonial-items">
                    <div className="testimonial-text">
                      <i className="flaticon-left-quotes-sign" />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                    </div>
                    <div className="testimonial-info-text">
                      <h3>John Doe</h3>
                      <p>Graphics Designer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Testimonial Section End */} 
          {/* Blog Section Start */}
          <section className="blog-section pb-70">
            <div className="container">
              <div className="section-title text-center">
                <h2>News, Tips &amp; Articles</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="blog-card">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img src="assets/img/blog/1.jpg" alt="blog image" />
                      </a>
                    </div>
                    <div className="blog-text">
                      <ul>
                        <li>
                          <i className="bx bxs-user" />
                          Admin
                        </li>
                        <li>
                          <i className="bx bx-calendar" />
                          7 Feb, 2021
                        </li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          How to Indroduce in Yourself in Job Interview?
                        </a>
                      </h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                      <a href="blog-details.html" className="blog-btn">
                        Read More
                        <i className="bx bx-plus bx-spin" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="blog-card">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img src="assets/img/blog/2.jpg" alt="blog" />
                      </a>
                    </div>
                    <div className="blog-text">
                      <ul>
                        <li>
                          <i className="bx bxs-user" />
                          Admin
                        </li>
                        <li>
                          <i className="bx bx-calendar" />
                          7 Feb, 2021
                        </li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          Looking for Highly Motivated Product to Build
                        </a>
                      </h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                      <a href="blog-details.html" className="blog-btn">
                        Read More
                        <i className="bx bx-plus bx-spin" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                  <div className="blog-card">
                    <div className="blog-img">
                      <a href="blog-details.html">
                        <img src="assets/img/blog/3.jpg" alt="blog" />
                      </a>
                    </div>
                    <div className="blog-text">
                      <ul>
                        <li>
                          <i className="bx bxs-user" />
                          Admin
                        </li>
                        <li>
                          <i className="bx bx-calendar" />
                          7 Feb, 2021
                        </li>
                      </ul>
                      <h3>
                        <a href="blog-details.html">
                          The Reason Why Software Develope is the Best Job
                        </a>
                      </h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                      <a href="blog-details.html" className="blog-btn">
                        Read More
                        <i className="bx bx-plus bx-spin" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Blog Section End */}
          {/* Footer Section Start */}
          
          {/* Footer Section End */}
          {/* Back To Top Start */}
          <div className="top-btn">
            <i className="bx bx-chevrons-up bx-fade-up" />
          </div>
        </div>
    </>
  )
}

export default About


