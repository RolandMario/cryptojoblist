import React from 'react'

const AppliedJobs = () => {
  return (
    <>
    <div>
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
                        <li><a href="candidate_dashboard.html"><i className="fas fa-tachometer-alt" /> dashboard </a></li>
                        <li>
                          <a href="candidate_edit_profile.html"> <i className="fas fa-edit" />edit profile
                          </a>
                        </li>
                        <li><a href="candidate_resume.html"><i className="fas fa-file" />resume </a></li>
                        <li><a href="candidate_favourite_job.html"><i className="fas fa-heart" />favourite</a></li>
                        <li><a href="candidate_applied_job.html" className="link_active"><i className="fas fa-check-square" />applied job</a></li>
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
                      <div className="manage_jobs_wrapper jb_cover">
                        <div className="job_list mange_list applications_recent">
                          <h6>04 applied jobs</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="jb_listing_left_fullwidth mt-0 jb_cover">
                        <div className="row">
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="jb_job_post_side_img">
                              <img src="images/lt1.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jb_job_post_right_cont">
                              <h4><a href="#">Trainee Web Designer, (Fresher)</a></h4>
                              <ul>
                                <li><i className="flaticon-cash" />&nbsp; $12K - 15k P.A.</li>
                                <li><i className="flaticon-location-pointer" />&nbsp; Los Angeles, Califonia PO, 455001</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="jb_job_post_right_btn_wrapper">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#"><i className="far fa-heart" /></a>
                                  </div>
                                </li>
                                <li><a href="#">Part Time</a></li>
                                <li> <a href="#" className="applied_btn">applied</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="jb_listing_left_fullwidth jb_cover">
                        <div className="row">
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="jb_job_post_side_img">
                              <img src="images/lt2.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jb_job_post_right_cont">
                              <h4><a href="#">software engineer, (Fresher)</a></h4>
                              <ul>
                                <li><i className="flaticon-cash" />&nbsp; $12K - 15k P.A.</li>
                                <li><i className="flaticon-location-pointer" />&nbsp; Los Angeles, Califonia PO, 455001</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="jb_job_post_right_btn_wrapper">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#"><i className="far fa-heart" /></a>
                                  </div>
                                </li>
                                <li><a href="#">Part Time</a></li>
                                <li> <a href="#" className="applied_btn">applied</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="jb_listing_left_fullwidth jb_cover">
                        <div className="row">
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="jb_job_post_side_img">
                              <img src="images/lt3.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jb_job_post_right_cont">
                              <h4><a href="#">Trainee Web Designer, (Fresher)</a></h4>
                              <ul>
                                <li><i className="flaticon-cash" />&nbsp; $12K - 15k P.A.</li>
                                <li><i className="flaticon-location-pointer" />&nbsp; Los Angeles, Califonia PO, 455001</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="jb_job_post_right_btn_wrapper">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#"><i className="far fa-heart" /></a>
                                  </div>
                                </li>
                                <li><a href="#">Part Time</a></li>
                                <li> <a href="#" className="applied_btn">applied</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="jb_listing_left_fullwidth jb_cover">
                        <div className="row">
                          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="jb_job_post_side_img">
                              <img src="images/lt4.png" alt="post_img" />
                              <br /> <span>google</span>
                            </div>
                            <div className="jb_job_post_right_cont">
                              <h4><a href="#">Trainee Web Designer, (Fresher)</a></h4>
                              <ul>
                                <li><i className="flaticon-cash" />&nbsp; $12K - 15k P.A.</li>
                                <li><i className="flaticon-location-pointer" />&nbsp; Los Angeles, Califonia PO, 455001</li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="jb_job_post_right_btn_wrapper">
                              <ul>
                                <li>
                                  <div className="job_adds_right">
                                    <a href="#"><i className="far fa-heart" /></a>
                                  </div>
                                </li>
                                <li><a href="#">Part Time</a></li>
                                <li> <a href="#" className="applied_btn">applied</a></li>
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

export default AppliedJobs


