import React from 'react'
import { Link } from 'react-router-dom'

const Companies = () => {
  return (
    <>
    <div>
          {/* Page Title Start */}
          <section className="page-title title-bg9">
            <div className="d-table">
              <div className="d-table-cell">
                <h2>Company</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Company</li>
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
          {/* Companies Section Start */}
          <section className="company-section company-style-two pt-100 pb-70">
            <div className="container">
              <div className="section-title text-center">
                <h2>Top Companies</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="company-card">
                    <div className="company-logo">
                      <a href="job-list.html">
                        <img src="assets/img/top-company/1.png" alt="company logo" />
                      </a>
                    </div>
                    <div className="company-text">
                      <h3>Trophy  &amp; Sans</h3>
                      <p>
                        <i className="bx bx-location-plus" />
                        Green Lanes, London
                      </p>
                      <a href="job-list.html" className="company-btn">
                        25 Open Position
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="company-card">
                    <div className="company-logo">
                      <a href="job-list.html">
                        <img src="assets/img/top-company/2.png" alt="company logo" />
                      </a>
                    </div>
                    <div className="company-text">
                      <h3>Trout Design</h3>
                      <p>
                        <i className="bx bx-location-plus" />
                        Park Avenue, Mumbai
                      </p>
                      <a href="job-list.html" className="company-btn">
                        35 Open Position
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="company-card">
                    <div className="company-logo">
                      <a href="job-list.html">
                        <img src="assets/img/top-company/3.png" alt="company logo" />
                      </a>
                    </div>
                    <div className="company-text">
                      <h3>Resland LTD</h3>
                      <p>
                        <i className="bx bx-location-plus" />
                        Betas Quence, London
                      </p>
                      <a href="job-list.html" className="company-btn">
                        20 Open Position
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="company-card">
                    <div className="company-logo">
                      <a href="job-list.html">
                        <img src="assets/img/top-company/4.png" alt="company logo" />
                      </a>
                    </div>
                    <div className="company-text">
                      <h3>Lawn Hopper</h3>
                      <p>
                        <i className="bx bx-location-plus" />
                        Wellesley Rd, London
                      </p>
                      <a href="job-list.html" className="company-btn">
                        45 Open Position
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="company-card">
                    <div className="company-logo">
                      <a href="job-list.html">
                        <img src="assets/img/top-company/5.png" alt="company logo" />
                      </a>
                    </div>
                    <div className="company-text">
                      <h3>Barkleys</h3>
                      <p>
                        <i className="bx bx-location-plus" />
                        Hill Street, USA
                      </p>
                      <a href="job-list.html" className="company-btn">
                        18 Open Position
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="company-card">
                    <div className="company-logo">
                      <a href="job-list.html">
                        <img src="assets/img/top-company/6.png" alt="company logo" />
                      </a>
                    </div>
                    <div className="company-text">
                      <h3>Benetton</h3>
                      <p>
                        <i className="bx bx-location-plus" />
                        View Point, USA
                      </p>
                      <a href="job-list.html" className="company-btn">
                        12 Open Position
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="company-card">
                    <div className="company-logo">
                      <a href="job-list.html">
                        <img src="assets/img/top-company/7.png" alt="company logo" />
                      </a>
                    </div>
                    <div className="company-text">
                      <h3>Walmesh LTD</h3>
                      <p>
                        <i className="bx bx-location-plus" />
                        Belfast, UK
                      </p>
                      <a href="job-list.html" className="company-btn">
                        20 Open Position
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="company-card">
                    <div className="company-logo">
                      <a href="job-list.html">
                        <img src="assets/img/top-company/8.png" alt="company logo" />
                      </a>
                    </div>
                    <div className="company-text">
                      <h3>Relnet Industry</h3>
                      <p>
                        <i className="bx bx-location-plus" />
                        Bristol, London
                      </p>
                      <a href="job-list.html" className="company-btn">
                        21 Open Position
                      </a>
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
          {/* Companies Section End */}
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

export default Companies

