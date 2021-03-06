import React,{useContext} from 'react'
import { AccountContext } from '../../context/AccountContext';
import '../../styles/dashboard.css'
const UserDashboard = ({candidiateProfile, jobCount}) => {

  const [, setAccountData] = useContext(AccountContext);
  return (
    
 <>
   <div className="col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="job_listing_left_fullwidth jb_cover">
                <div className="row">
                  <div className="col-lg-8 col-md-7 col-sm-12 col-12">
                    <div className="jp_job_post_side_img">
                      <img src={`${process.env.REACT_APP_API_URL}/${candidiateProfile?.photo}`}  width='100px' height='100px' alt="post_img" />
                    </div>
                    <div className="jp_job_post_right_cont">
                      <h4>{candidiateProfile?.name}</h4>
                      <ul>
                        <li>
                          <i className="fas fa-suitcase" />
                          &nbsp; Software Firm
                        </li>
                        <li>
                          <i className="flaticon-location-pointer" />
                          &nbsp; {candidiateProfile?.city}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5 col-sm-12 col-12">
                    <div className="jp_job_post_right_btn_wrapper jb_cover">
                      <div className="header_btn search_btn jb_cover">
                        {/* <a href="link">view profile</a> */}
                        <button onClick={()=>setAccountData('Profile')}> view profile</button>
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
                        <li>{candidiateProfile?.job_title}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="jp_listing_overview_list_main_wrapper jb_cover">
                    <div className="jp_listing_list_icon">
                    <i className="bx bx-location-plus" />
                    </div>
                    <div className="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>Location:</li>
                        <li>{candidiateProfile?.city},{candidiateProfile?.country}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="jp_listing_overview_list_main_wrapper jb_cover">
                    <div className="jp_listing_list_icon">
                    <i className="bx bxs-phone" />
                    </div>
                    <div className="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>phone:</li>
                        <li>{candidiateProfile?.phone}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="jp_listing_overview_list_main_wrapper jb_cover">
                    <div className="jp_listing_list_icon">
                    <i className="bx bxs-envelope" />
                    </div>
                    <div className="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>email:</li>
                        <li>
                          <a href="link">{candidiateProfile?.email}</a>
                        </li>
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
                          <a href="link">www.example.com</a>
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
                      {/* <div id="map"> */}
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991517034!2d-74.25987556253516!3d40.697670063539654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1588772651198!5m2!1sen!2sbd"
                          frameBorder={0}
                          title="gg"
                        />
                      {/* </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="emp_job_post jb_cover">
                    <div className="emp_job_side_img">
                      <i className="fas fa-book" />
                    </div>
                    <div className="emp_job_side_text">
                      <h1>{jobCount}</h1>
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
           
          </div>
        </div>
 </>
  
  )
}

export default UserDashboard

