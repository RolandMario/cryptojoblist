import React,{useContext, useEffect, useState} from 'react'
import { baseURL } from '../../constants/Constants'
import { WalletAddressContext } from '../../context/WalletAddressContext';
import axios from 'axios'

const RecDetails = (props) => {
  const [walletAddress, ] = useContext(WalletAddressContext)
  const url = `${baseURL}/api/recruiter/totalJobPostByRecruiter?addr=${walletAddress}`;
  const [totalPost, setTotalPost] = useState(1)
  const getTotalJobPosts = async()=>{     
    try {
     
      const {data} = await axios.get(url)
      console.log("total job post", data)
      setTotalPost(data.count)
    } catch (error) {
      console.log("error getting job post", error)
    }
   

  }

  useEffect(() => {
  
    if(walletAddress !== ""){
      getTotalJobPosts()
    }
    
     // eslint-disable-next-line 
    }, [walletAddress])
  return (
    <>
     <div className="col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="job_listing_left_fullwidth jb_cover">
                <div className="row">
                  <div className="col-lg-8 col-md-7 col-sm-12 col-12">
                    <div className="jp_job_post_side_img">
                      <img src={`${baseURL}/${props.data.cover_logo}`} alt="post_img" />
                    </div>
                    <div className="jp_job_post_right_cont">
                      <h4>Webstrot Technology</h4>
                      <ul>
                        <li>
                          <i className="fas fa-suitcase" />
                          &nbsp; Software Firm
                        </li>
                        <li>
                          <i className="flaticon-location-pointer" />
                          &nbsp; Los Angeles
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5 col-sm-12 col-12">
                    <div className="jp_job_post_right_btn_wrapper jb_cover">
                      <div className="header_btn search_btn jb_cover">
                        <a href="link">view profile</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="emp_job_post jb_cover">
                <div className="emp_job_side_img">
                  <i className="fas fa-book" />
                </div>
                <div className="emp_job_side_text">
                  <h1>{totalPost}</h1>
                  <p>job posted</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="emp_job_post jb_cover">
                <div className="emp_job_side_img ress">
                  <i className="fas fa-user" />
                </div>
                <div className="emp_job_side_text">
                  <h1>590</h1>
                  <p>shortlisted resume</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="emp_job_post jb_cover">
                <div className="emp_job_side_img greens">
                  <i className="fas fa-eye" />
                </div>
                <div className="emp_job_side_text">
                  <h1>11,200</h1>
                  <p>total page view</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="emp_job_post jb_cover">
                <div className="emp_job_side_img parts">
                  <i className="fas fa-envelope-open-text" />
                </div>
                <div className="emp_job_side_text">
                  <h1>1,608</h1>
                  <p>total applications</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="job_filter_category_sidebar jb_cover">
                <div className="job_filter_sidebar_heading jb_cover">
                  <h1> view graph</h1>
                </div>
                <div className="job_overview_header jb_cover">
                  <div className="sales-chart">
                    <canvas id="team-chart" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="job_filter_category_sidebar jb_cover">
                <div className="job_filter_sidebar_heading jb_cover">
                  <h1> company overview</h1>
                </div>
                <div className="job_overview_header jb_cover">
                  <div className="jp_listing_overview_list_main_wrapper jb_cover">
                    <div className="jp_listing_list_icon">
                      <i className="far fa-calendar" />
                    </div>
                    <div className="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>categories:</li>
                        <li>Design &amp; Creative</li>
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
                        <li>Hotline::</li>
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
                        <li>
                          <a href="link">webstrot@example.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="jp_listing_overview_list_main_wrapper jb_cover">
                    <div className="jp_listing_list_icon">
                      <i className="flaticon-man-user" />
                    </div>
                    <div className="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>compant size:</li>
                        <li>20-50</li>
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
                        <li>
                          <a href="link">www.webstrot.com</a>
                        </li>
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
                      <div id="map"></div>
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
                          <li>
                            <a href="link">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="link">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="link">
                              <i className="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li>
                            <a href="link">
                              <i className="fab fa-google-plus-g" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="job_filter_category_sidebar jb_cover">
                <div className="job_filter_sidebar_heading jb_cover">
                  <h1> recent applicants</h1>
                </div>
                <div className="job_overview_header apps_wrapper jb_cover">
                  <div className="row">
                    <div className="col-lg-8 col-md-7 col-sm-8 col-12">
                      <div className="jp_job_post_side_img">
                        <img src="images/rc1.png" alt="post_img" />
                      </div>
                      <div className="jp_job_post_right_cont">
                        <h4>aradhya s.</h4>
                        <ul>
                          <li>app designer</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-4 col-12">
                      <div className="jp_job_post_right_btn_wrapper jb_cover">
                        <div className="header_btn search_btn appbtn jb_cover">
                          <a href="link">send</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="job_overview_header apps_wrapper jb_cover">
                  <div className="row">
                    <div className="col-lg-8 col-md-7 col-sm-8 col-12">
                      <div className="jp_job_post_side_img">
                        <img src="images/rc2.png" alt="post_img" />
                      </div>
                      <div className="jp_job_post_right_cont">
                        <h4>akshay s.</h4>
                        <ul>
                          <li>app designer</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-4 col-12">
                      <div className="jp_job_post_right_btn_wrapper jb_cover">
                        <div className="header_btn search_btn appbtn jb_cover">
                          <a href="link">send</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="job_overview_header apps_wrapper jb_cover">
                  <div className="row">
                    <div className="col-lg-8 col-md-7 col-sm-8 col-12">
                      <div className="jp_job_post_side_img">
                        <img src="images/rc3.png" alt="post_img" />
                      </div>
                      <div className="jp_job_post_right_cont">
                        <h4>shruti s.</h4>
                        <ul>
                          <li>app designer</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-4 col-12">
                      <div className="jp_job_post_right_btn_wrapper jb_cover">
                        <div className="header_btn search_btn appbtn jb_cover">
                          <a href="link">send</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="job_overview_header apps_wrapper jb_cover">
                  <div className="row">
                    <div className="col-lg-8 col-md-7 col-sm-8 col-12">
                      <div className="jp_job_post_side_img">
                        <img src="images/rc4.png" alt="post_img" />
                      </div>
                      <div className="jp_job_post_right_cont">
                        <h4>simona A.</h4>
                        <ul>
                          <li>UI designer</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-5 col-sm-4 col-12">
                      <div className="jp_job_post_right_btn_wrapper jb_cover">
                        <div className="header_btn search_btn appbtn jb_cover">
                          <a href="link">send</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="job_filter_category_sidebar jb_cover">
                <div className="job_filter_sidebar_heading jb_cover">
                  <h1> activity</h1>
                </div>
                <div className="job_overview_header apps_wrapper jb_cover">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="activity_app">
                        <i className="fas fa-angle-right" />
                      </div>
                      <div className="activity_logos">
                        <h4>Dobrick published an article</h4>
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
                        <h4>Dobrick published an article</h4>
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
                        <h4>Someone bookmarked you</h4>
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
                        <h4>Your Resume Updated!</h4>
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
    </>
  )
}

export default RecDetails