import React from 'react'

const ManagedJobs = ({jobApplicants}) => {

  console.log("managed jobs",jobApplicants)
  return (
    <>
    <>
  {/*employee dashboard wrapper start*/}
  <div className="col-lg-9 col-md-12 col-sm-12 col-12">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="job_main_overflow jb_cover">
          <div className="latest_job_overlow jb_cover">
            <div className="manage_jobs_wrapper jb_cover">
              <div className="job_list mange_list">
                <h6>job title</h6>
              </div>
              <div className="job_list_next mange_list">
                <h6>applications</h6>
              </div>
              <div className="job_list_next mange_list">
                <h6>status</h6>
              </div>
              <div className="job_list_next mange_list">
                <h6>action</h6>
              </div>
            </div>
            {jobApplicants?.map((jobApplicant)=>{
              return(<div className="latest_job_box jb_cover" key={jobApplicant.id}>
              <div className="job_list">
                <h6>
                  <a href="link">{jobApplicant.job_title}</a>
                </h6>
                <p>
                  {" "}
                  <i className="far fa-calendar" /> Date Posted : {new Date(jobApplicant.updatedAt).toDateString()}
                </p>
              </div>
              <div className="job_list_next">
                <p>
                  <a href="link">{`${jobApplicant.applications.length} Applications`}</a>
                </p>
              </div>
              <div className="job_list_next">
                <p className="gn">active</p>
              </div>
              <div className="job_list_next">
                <ul>
                  <li>
                    <a href="link">
                      <i className="fas fa-eye" />
                    </a>
                  </li>
                  <li>
                    <a href="link">
                      <i className="fas fa-edit" />
                    </a>
                  </li>
                  <li>
                    <a href="link">
                      <i className="fas fa-trash-alt" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>)
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

    </>
  )
}

export default ManagedJobs