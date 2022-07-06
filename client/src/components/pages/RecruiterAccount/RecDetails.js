import React,{useContext, useEffect, useState} from 'react'

import { WalletAddressContext } from '../../context/WalletAddressContext';
import axios from 'axios'
import Rechart from './Rechart';


const RecDetails = (props) => {
  const [walletAddress, ] = useContext(WalletAddressContext)
  const url = `${process.env.REACT_APP_API_URL}/server/totalJobPostByRecruiter?addr=${walletAddress}`;
  const [, setTotalPost] = useState(1)

  console.log("recinfos", props.data)
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
                      <img src={`${process.env.REACT_APP_API_URL}/${props.data.cover_logo}`} alt="post_img" />
                    </div>
                    <div className="jp_job_post_right_cont">
                      <h4>{props.data.company_name}</h4>
                      <ul>
                        <li>
                          <i className="fas fa-suitcase" />
                          &nbsp; Software Firm
                        </li>
                        <li>
                          <i className="flaticon-location-pointer" />
                          &nbsp; {props.data.city}, {props.data.country}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-5 col-sm-12 col-12">
                    <div className="jp_job_post_right_btn_wrapper jb_cover">
                      <div className="header_btn search_btn jb_cover">
                        {/* <a href="link">view profile</a> */}
                        <button onClick={()=>props.setRecAccountData('RecProfile')}>view profile</button>
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
                  <h1>{props.jobApplicants?.count||0}</h1>
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
                  <h1>{props.applicatns?.count||0}</h1>
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
                    <Rechart/>
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
                    <i className="bx bxs-envelope" />
                    </div>
                    <div className="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>Company Name:</li>
                        <li>{props.data.company_name}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="jp_listing_overview_list_main_wrapper jb_cover">
                    <div className="jp_listing_list_icon">
                    <i className="bx bx-location-plus" />
                    </div>
                    <div className="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>Location(Country):</li>
                        <li>{`${props.data.city}, ${props.data.country}`}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="jp_listing_overview_list_main_wrapper jb_cover">
                    <div className="jp_listing_list_icon">
                    <i className="bx bxs-phone" />
                    </div>
                    <div className="jp_listing_list_icon_cont_wrapper">
                      <ul>
                        <li>Hotline::</li>
                        <li>{props.data.phone}</li>
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
                          <a href="link">{props.data.contact_mail}</a>
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
                        <li>{props.data.company_size}</li>
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
                          <a href="link">{props.data.website}</a>
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
              
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="job_filter_category_sidebar jb_cover">
                <div className="job_filter_sidebar_heading jb_cover">
                  <h1> recent applicants</h1>
                </div>
                <div className="job_overview_header apps_wrapper jb_cover">
                {props.applicatns?.rows?.map((application)=>{
                  return(<>
                  <div className="row" key={application.id}>
                    <div className="col-lg-8 col-md-7 col-sm-8 col-12">
                      <div className="jp_job_post_side_img">
                        <img src="images/rc1.png" alt="post_img" />
                      </div>
                      <div className="jp_job_post_right_cont">
                        <h4>{application.name}</h4>
                        <ul>
                          <li>{application.jobposts.job_title}</li>
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
                  
                  </>)
                 })}
                  
                </div>
              
              </div>
            </div>
            
          </div>
        </div>
    </>
  )
}

export default RecDetails