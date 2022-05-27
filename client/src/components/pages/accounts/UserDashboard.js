import React from 'react'
import '../../styles/dashboard.css'
const UserDashboard = () => {
  return (
    
   <div className='col-md-8' >
     <div className="account-details">
     <div className="row">
     <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                      <div className="job_filter_category_sidebar jb_cover">
                        <div className="job_filter_sidebar_heading jb_cover">
                          <h1> basic information</h1>
                        </div>
                        <div className="job_overview_header jb_cover">
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="far fa-calendar" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>job description:</li>
                                <li>Graphic Designer</li>
                              </ul>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fas fa-map-marker-alt" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>Location:</li>
                                <li>Los Angeles Califonia PO</li>
                              </ul>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fa fa-info-circle" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>phone:</li>
                                <li>0145636941:</li>
                              </ul>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fas fa-envelope" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>email:</li>
                                <li><a href="link">luca@example.com</a></li>
                              </ul>
                            </div>
                          </div>
                          <div className="jp_listing_overview_list_main_wrapper dcv jb_cover">
                            <div className="jp_listing_list_icon">
                              <i className="fas fa-globe-asia" />
                            </div>
                            <div className="jp_listing_list_icon_cont_wrapper">
                              <ul>
                                <li>website:</li>
                                <li><a href="link">www.example.com</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>                        
                      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="job_filter_category_sidebar jb_cover">
                          <div className="job_filter_sidebar_heading jb_cover">
                            <h1> social profile</h1>
                          </div>
                          <div className="job_overview_header jb_cover">
                            <div className="jp_listing_left_bottom_sidebar_social_wrapper">
                              <ul>
                                <li />
                                <li><a href="link"><i className="fab fa-facebook-f" /></a></li>
                                <li><a href="link"><i className="fab fa-twitter" /></a></li>
                                <li><a href="link"><i className="fab fa-linkedin-in" /></a></li>
                                <li><a href="link"><i className="fab fa-google-plus-g" /></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="job_filter_category_sidebar jb_cover">
                            <div className="job_filter_sidebar_heading jb_cover">
                              <h1> our location</h1>
                            </div>
                            <div className="job_overview_header jb_cover">
                              <div id="map">
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="emp_job_post jb_cover">
                            <div className="emp_job_side_img">
                              <i className="fas fa-book" />
                            </div>
                            <div className="emp_job_side_text">
                              <h1>260</h1>
                              <p>applied jobs</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="emp_job_post jb_cover">
                            <div className="emp_job_side_img greens">
                              <i className="fas fa-eye" />
                            </div>
                            <div className="emp_job_side_text">
                              <h1>11,200</h1>
                              <p>companies viewed</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="emp_job_post jb_cover">
                            <div className="emp_job_side_img parts">
                              <i className="fas fa-envelope-open-text" />
                            </div>
                            <div className="emp_job_side_text">
                              <h1>1,608</h1>
                              <p>favourite jobs</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="job_filter_category_sidebar jb_cover">
                        <div className="job_filter_sidebar_heading jb_cover">
                          <h1> recent activity</h1>
                        </div>
                        <div className="job_overview_header apps_wrapper jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="activity_app">
                                <i className="fas fa-angle-right" />
                              </div>
                              <div className="activity_logos">
                                <h4>Our Resume Updated!Dobrick published an article
                                </h4>
                                <ul>
                                  <li>5 hours ago</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="job_overview_header apps_wrapper jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="activity_app">
                                <i className="fas fa-angle-right" />
                              </div>
                              <div className="activity_logos">
                                <h4>Dobrick published an article
                                </h4>
                                <ul>
                                  <li>2 hours ago</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="job_overview_header apps_wrapper jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="activity_app">
                                <i className="fas fa-angle-right" />
                              </div>
                              <div className="activity_logos">
                                <h4>Someone bookmarked you
                                </h4>
                                <ul>
                                  <li>4 hours ago</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="job_overview_header apps_wrapper jb_cover">
                          <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                              <div className="activity_app">
                                <i className="fas fa-angle-right" />
                              </div>
                              <div className="activity_logos">
                                <h4>Your Resume Updated!
                                </h4>
                                <ul>
                                  <li>2 hours ago</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
    </div>
          </div>
   </div>     
   
  )
}

export default UserDashboard

