import React from 'react'
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <>
     <div>
          {/* Page Title Start */}
          <section className="page-title title-bg23">
            <div className="d-table">
              <div className="d-table-cell">
                <h2>Contact Us</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Contact Us</li>
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
          {/* Contact Section Start */}
          <div className="contact-card-section ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="row">
                    <div className="col-md-4 col-sm-6">
                      <div className="contact-card">
                        <i className="bx bx-phone-call" />
                        <ul>
                          <li>
                            <a href="tel:+145664474574">
                              +1-456-644-7457
                            </a>
                          </li>
                          <li>
                            <a href="tel:17459674567">
                              +1-745-967-4567
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div className="contact-card">
                        <i className="bx bx-mail-send" />
                        <ul>
                          <li>
                            <a href="mailto:info@jovie.com">
                              info@jovie.com
                            </a>
                          </li>
                          <li>
                            <a href="mailto:hello@jovie.com">
                              hello@jovie.com
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 offset-sm-3 offset-md-0">
                      <div className="contact-card">
                        <i className="bx bx-location-plus" />
                        <ul>
                          <li>
                            123, Denver, USA
                          </li>
                          <li>
                            Street view 3/B, USA
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Section End */}
          {/* Contact Form Start */}
          <section className="contact-form-section pb-100">
            <div className="container">
              <div className="contact-area">
                <h3>Lets' Talk With Us</h3>
                <form id="contactForm">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Your Name" />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Your Email" />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="number" name="number" id="number" className="form-control" required data-error="Please enter your number" placeholder="Phone Number" />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="subject" id="subject" className="form-control" required data-error="Please enter your subject" placeholder="Your Subject" />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea name="message" className="form-control message-field" id="message" cols={30} rows={7} required data-error="Please type your message" placeholder="Write Message" defaultValue={""} />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 text-center">
                      <button type="submit" className="default-btn contact-btn">
                        Send Message
                      </button>
                      <div id="msgSubmit" className="h3 alert-text text-center hidden" />
                      <div className="clearfix" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* Contact Form End */}
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

export default Contact;

