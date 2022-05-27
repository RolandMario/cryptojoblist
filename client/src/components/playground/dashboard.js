import React from 'react'

const dashboard = () => {
  return (
    <>
     <div>
       
        
        {/* Top Scroll Start */}<a href="javascript:" id="return-to-top"><i className="fas fa-angle-double-up" /></a>
        {/* Top Scroll End */}
        {/* cp navi wrapper Start */}
        <nav className="cd-dropdown  d-block d-sm-block d-md-block d-lg-none d-xl-none">
          <h2><a href="index.html"> <span><img src="images/logo.png" alt="img" /></span></a></h2>
          <a href="#0" className="cd-close">Close</a>
          <ul className="cd-dropdown-content">
            <li>
              <form className="cd-search">
                <input type="search" placeholder="Search..." />
              </form>
            </li>
            <li className="has-children">
              <a href="#">home</a>
              <ul className="cd-secondary-dropdown icon_menu is-hidden">
                <li className="go-back"><a href="#0">Menu</a></li>
                <li><a href="index.html">home I</a></li>
                <li><a href="index_2.html">home II</a></li>
                <li><a href="index_3.html">home III</a></li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">jobs</a>
              <ul className="cd-secondary-dropdown icon_menu is-hidden">
                <li className="go-back"><a href="#0">Menu</a></li>
                <li><a href="services.html">services </a></li>
                <li><a href="services_2.html">services II</a></li>
              </ul>
            </li>
            {/* .has-children */}
            <li className="has-children">
              <a href="#">candidates</a>
              <ul className="cd-secondary-dropdown icon_menu is-hidden">
                <li className="go-back"><a href="#0">Menu</a></li>
                <li><a href="our_team.html">our team</a></li>
                <li><a href="pricing_plans.html">pricing plans</a></li>
                <li><a href="login_register.html">login / register</a></li>
                <li><a href="error_404.html">error 404</a></li>
                <li><a href="error_404_2.html">error 404 II</a></li>
                <li><a href="comming_soon.html">comming soon</a></li>
                <li><a href="comming_soon_2.html">comming soon II</a></li>
                <li><a href="about_us.html">about us</a></li>
                <li><a href="services.html">services</a></li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">employees</a>
              <ul className="cd-secondary-dropdown icon_menu is-hidden">
                <li className="go-back"><a href="#0">Menu</a></li>
                <li><a href="about_us.html">about us</a></li>
                <li><a href="about_us_2.html">about us II</a></li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">blog</a>
              <ul className="cd-secondary-dropdown icon_menu is-hidden">
                <li className="go-back"><a href="#0">Menu</a></li>
                <li><a href="blog_width_sidebar.html">blog width sidebar</a></li>
                <li><a href="blog_without_sidebar.html">blog full width</a></li>
                <li><a href="blog_without_sidebar.html">blog III column</a></li>
                <li><a href="blog_2column.html">blog II column</a></li>
                <li><a href="blog_single.html">blog single</a></li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">contact us</a>
              <ul className="cd-secondary-dropdown icon_menu is-hidden">
                <li className="go-back"><a href="#0">Menu</a></li>
                <li><a href="contact_us.html">contact us</a></li>
                <li><a href="contact_us_2.html">contact us II</a></li>
              </ul>
            </li>
            <li><a href="#">login</a></li>
          </ul>
          {/* .cd-dropdown-content */}
        </nav>
        <div className="cp_navi_main_wrapper jb_cover">
          <div className="container-fluid">
          
            {/* mobile menu area start */}
            <header className="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="cd-dropdown-wrapper">
                      <a className="house_toggle" href="#0">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.177 31.177" style={{enableBackground: 'new 0 0 31.177 31.177'}} xmlSpace="preserve" width="25px" height="25px">
                          <g>
                            <g>
                              <path className="menubar" d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z" fill="#004165" />
                            </g>
                            <g>
                              <path className="menubar" d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z" fill="#004165" />
                            </g>
                            <g>
                              <path className="menubar" d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z" fill="#004165" />
                            </g>
                            <g>
                              <path className="menubar" d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z" fill="#004165" />
                            </g>
                            <g>
                              <path className="menubar" d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z" fill="#004165" />
                            </g>
                          </g>
                        </svg>
                      </a>
                      {/* .cd-dropdown */}
                    </div>
                  </div>
                </div>
              </div>
              {/* .cd-dropdown-wrapper */}
            </header>
           
            
          </div>
        </div>
        {/* navi wrapper End */}
        {/* top header wrapper start */}
        <div className="page_title_section">
          <div className="page_header">
            <div className="container">
              <div className="row">
                {/* section_heading start */}
                <div className="col-xl-9 col-lg-7 col-md-7 col-12 col-sm-12">
                  <h1>Candidate Dashboard</h1>
                </div>
                <div className="col-xl-3 col-lg-5 col-md-5 col-12 col-sm-12">
                  <div className="sub_title_section">
                    <ul className="sub_title">
                      <li> <a href="#"> Home </a>&nbsp; / &nbsp; </li>
                      <li>Candidate Dashboard</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* top header wrapper end */}
        {/*employee dashboard wrapper start*/}
        <div className="candidate_dashboard_wrapper jb_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <div className="emp_dashboard_sidebar jb_cover">
                  <img src="images/profile.jpg" className="img-responsive" alt="post_img" />
                  <div className="emp_web_profile candidate_web_profile jb_cover">
                    <h4>luca wallace</h4>
                    <p>@username</p>
                    <div className="skills jb_cover">
                      <div className="skill-item jb_cover">
                        <h6>profile<span>70%</span></h6>
                        <div className="skills-progress"><span data-value="70%" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="emp_follow_link jb_cover">
                    <ul className="feedlist">
                      <li><a href="candidate_dashboard.html" className="link_active"><i className="fas fa-tachometer-alt" /> dashboard </a></li>
                      <li>
                        <a href="candidate_edit_profile.html"> <i className="fas fa-edit" />edit profile
                        </a>
                      </li>
                      <li><a href="candidate_resume.html"><i className="fas fa-file" />resume </a></li>
                      <li><a href="candidate_favourite_job.html"><i className="fas fa-heart" />favourite</a></li>
                      <li><a href="candidate_applied_job.html"><i className="fas fa-check-square" />applied job</a></li>
                      <li><a href="message.html"><i className="fas fa-envelope" />message</a></li>
                      <li><a href="pricing_plans.html"><i className="fas fa-tag" />pricing plans</a></li>
                    </ul>
                    <ul className="feedlist logout_link jb_cover">
                      <li><a href="#"><i className="fas fa-power-off" /> log out</a></li>
                      <li>
                        <a href="#" data-toggle="modal" data-target="#myModal"><i className="fas fa-trash-alt" />delete profile
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="modal fade delete_popup" id="myModal" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <button type="button" className="close" data-dismiss="modal">×</button>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                          <div className="delett_cntn jb_cover">
                            <h1><i className="fas fa-trash-alt" /> delete account</h1>
                            <p>Are you sure! You want to delete your profile. This
                              <br /> can't be undone!</p>
                            <div className="delete_jb_form">
                              <input type="password" name="password" placeholder="Enter Password" />
                            </div>
                            <div className="header_btn search_btn applt_pop_btn">
                              <a href="#">save updates</a>
                            </div>
                            <div className="cancel_wrapper">
                              <a href="#" className data-dismiss="modal">cancel</a>
                            </div>
                            <div className="login_remember_box jb_cover">
                              <label className="control control--checkbox">You accepts our <a href="#">Terms and Conditions </a> and <a href="#">Privacy Policy</a>
                                <input type="checkbox" />
                                <span className="control__indicator" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 col-sm-12 col-12">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="job_listing_left_fullwidth jb_cover">
                      <div className="row">
                        <div className="col-lg-8 col-md-7 col-sm-12 col-12">
                          <div className="jp_job_post_side_img">
                            <img src="images/pf1.jpg" alt="post_img" />
                          </div>
                          <div className="jp_job_post_right_cont">
                            <h4>luca wallace</h4>
                            <ul>
                              <li><i className="fas fa-suitcase" />&nbsp; Software Firm</li>
                              <li><i className="flaticon-location-pointer" />&nbsp; Los Angeles</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-12 col-12">
                          <div className="jp_job_post_right_btn_wrapper jb_cover">
                            <div className="header_btn search_btn jb_cover">
                              <a href="#">view profile</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                              <li><a href="#">luca@example.com</a></li>
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
                              <li><a href="#">www.example.com</a></li>
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
                              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                              <li><a href="#"><i className="fab fa-twitter" /></a></li>
                              <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                              <li><a href="#"><i className="fab fa-google-plus-g" /></a></li>
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
          </div>
        </div>
        {/*employee dashboard wrapper end*/}
        {/* newsletter wrapper start */}
        <div className="jb_cover">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="job_newsletter_wrapper jb_cover">
                  <div className="jb_newslwtteter_left">
                    <h2> Looking For A Job</h2>
                    <p>Your next level Product developemnt company assetsYour next level Product </p>
                  </div>
                  <div className="jb_newslwtteter_button">
                    <div className="header_btn search_btn news_btn jb_cover">
                      <a href="#">submit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default dashboard





