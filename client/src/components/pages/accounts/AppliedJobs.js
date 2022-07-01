import React from 'react'


const AppliedJobs = ({candidiateApplication}) => {
 
  return (
    <>
    <div className="col-lg-9 col-md-12 col-sm-12 col-12">
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="manage_jobs_wrapper jb_cover">
        <div className="job_list mange_list applications_recent">
          <h6> applied jobs</h6>
        </div>
      </div>
    </div>
    {candidiateApplication?.map(jobsApplied =>{
      return(
        <div className="col-lg-12 col-md-12 col-sm-12 col-12" key={jobsApplied.id}>
      <div className="jb_listing_left_fullwidth mt-0 jb_cover">
        <div className="row">
          <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <div className="jb_job_post_side_img">
              <img src="images/lt1.png" alt="post_img" />
              <br /> <span>google</span>
            </div>
            <div className="jb_job_post_right_cont">
              <h4>
                <a href="link">{jobsApplied.jobposts.job_title}</a>
              </h4>
              <ul>
                <li>
                  <i className="flaticon-cash" />
                  &nbsp; ${jobsApplied.jobposts.salary}
                </li>
                <li>
                  <i className="flaticon-location-pointer" />
                  &nbsp; {jobsApplied.jobposts.company_location}
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-12">
            <div className="jb_job_post_right_btn_wrapper">
              <ul>
                <li>
                  <div className="job_adds_right">
                    <a href="link">
                      <i className="far fa-heart" />
                    </a>
                  </div>
                </li>
                <li>
                  <a href="link">{jobsApplied.jobposts.job_type}</a>
                </li>
                <li>
                  {" "}
                  <a href="link" className="applied_btn">
                    applied
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
    })}
    
   
  </div>
</div>

    </>
  )
}

export default AppliedJobs


