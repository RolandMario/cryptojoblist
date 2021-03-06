import React from 'react'
import { Link } from 'react-router-dom'

const Applications = ({applicatns}) => {


  const OpenResume = (index)=>{
    let path = `${process.env.REACT_APP_API_URL}/${applicatns.rows[index]?.cv}`
    window.open(path)
  }
  
  return (
    <>
  {/*employee dashboard wrapper start*/}
  <div className="col-lg-9 col-md-12 col-sm-12 col-12">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="job_main_overflow jb_cover">
          <div className="latest_job_overlow jb_cover">
            <div className="manage_jobs_wrapper jb_cover">
              <div className="job_list mange_list applications_recent">
                <h6>recent applications</h6>
              </div>
            </div>
            
              
             
                {applicatns?.rows?.map((application, index)=>{ 
           return (<>
           <div className="latest_job_box jb_cover" key={application.id}>
              
                 <div className="job_list recent_app_1">
                <div className="recent_img">
                  <img src="images/rs1.jpg" alt="post_img" />
                </div>
                <div className="recent_cntnt">
                  <h6>
                    <a href="link">{application.name}</a>
                  </h6>
                  <ul>
                    <li>
                      <i className="fas fa-suitcase" />
                      &nbsp; {application.jobposts.job_title}
                    </li>
                    <li>
                      <i className="flaticon-location-pointer" />
                      &nbsp; {application.city}
                    </li>
                  </ul>
                </div>
              
              
                
            </div>
            <div className="job_list_next recent_app_1">
                <div className="header_btn download_btn_wrapper jb_cover">
                  <ul>
                    <li>
                      <button onClick={()=>OpenResume(index)}>
                        {/* <i className="fas fa-file-download" /> */}
                        View Resume
                      </button>
                    </li>
                    <li>
                      <Link to="/projectAmount">
                        {" "}
                        <i className="fas fa-envelope" />
                        Accepted
                      </Link>
                    </li>
                    <li>
                      <a href="link">
                        {" "}
                        <i className="fas fa-envelope" />
                        Declined
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
              
           </div>
           </>
           )
              })}  
             
            
          
           
           
          
            <div className="blog_pagination_section jb_cover">
              <ul>
                <li>
                  <a href="link" className="prev">
                    {" "}
                    <i className="flaticon-left-arrow" />{" "}
                  </a>
                </li>
                <li>
                  <a href="link">1</a>
                </li>
                <li className="third_pagger">
                  <a href="link">2</a>
                </li>
                <li className="d-block d-sm-block d-md-block d-lg-block">
                  <a href="link">3</a>
                </li>
                <li className="d-none d-sm-block d-md-block d-lg-block">
                  <a href="link">...</a>
                </li>
                <li className="d-none d-sm-block d-md-block d-lg-block">
                  <a href="link">6</a>
                </li>
                <li>
                  <a href="link" className="next">
                    {" "}
                    <i className="flaticon-right-arrow" />{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*employee dashboard wrapper end*/}
</>

  )
}

export default Applications