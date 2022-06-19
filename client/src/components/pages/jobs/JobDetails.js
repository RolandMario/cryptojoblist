import React, {useState, useEffect, useContext} from 'react'
//import { JobPostContext } from '../../context/JobPostContext'
import axios from 'axios'
import { PostDetailsContext } from '../../context/PostDetailscontext'
import { useParams, useNavigate } from 'react-router-dom'
//import { WalletAddressContext } from '../../context/WalletAddressContext'
import { baseURL } from '../../constants/Constants'
const JobDetails = () => {

    const [post, setPost] = useContext(PostDetailsContext)
    const [isPost, setIsPost] = useState(false)
    //const [walletAddress, ] = useContext(WalletAddressContext)

    let navigate = useNavigate();
    let jobid = useParams()
    console.log(jobid)
    const fetch = async()=>{
      
 
        const url = `${baseURL}/api/recruiter/getJobPostById/${jobid.id}`
        try {
           const {data} = await axios.get(url)
        console.log('job Details', data)
        setPost(data)
        } catch (error) {
          console.log(error)
        }
       
        
      }
      useEffect(() => {
        fetch()
      // eslint-disable-next-line  
      }, [jobid.walletAddress])

      useEffect(()=>{
        if(Object.keys(post).length === 0 && post.constructor === Object){
          setIsPost(false)
        }else{
          setIsPost(true)
        }
      
      }, [post])
      
  return (
    <>
  {/* Page Title Start */}
  <section className="page-title title-bg6">
    <div className="d-table">
      <div className="d-table-cell">
        <h2>Job Details</h2>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>Job Details</li>
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
  {/* Job Details Section Start */}
  <section className="job-details ptb-100">
    <div className="container">
        {isPost?
         <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-12">
              <div className="job-details-text">
                <div className="job-card">
                  <div className="row align-items-center">
                    <div className="col-md-2">
                      <div className="company-logo">
                        <img src="assets/img/company-logo/1.png" alt="logo" />
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="job-info">
                        <h3>{post.job_title}</h3>
                        <ul>
                          <li>
                            <i className="bx bx-location-plus" />
                            {post.company_location}
                          </li>
                          <li>
                            <i className="bx bx-filter-alt" />
                            {post.job_title}
                          </li>
                          <li>
                            <i className="bx bx-briefcase" />
                           {post.job_type}
                          </li>
                        </ul>
                        <span>
                          <i className="bx bx-paper-plane" />
                          Apply Before: June 01,2021
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="details-text">
                  <h3>Description</h3>
                  <p>
                   {post.job_desc}
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
                <div className="details-text">
                  <h3>Requirements</h3>
                  <p>
                    {" "}
                    {post.job_req}
                  </p>
                  <ul>
                    <li>
                      <i className="bx bx-check" />
                      Work experience
                    </li>
                    <li>
                      <i className="bx bx-check" />
                      Skills (soft skills and/or technical skills)
                    </li>
                    <li>
                      <i className="bx bx-check" />
                      WPersonal qualities and attributes.
                    </li>
                    <li>
                      <i className="bx bx-check" />
                      Support software roll-outs to production.
                    </li>
                    <li>
                      <i className="bx bx-check" />
                      Guide and mentor junior engineers. Serve as team lead if
                      appropriate.
                    </li>
                  </ul>
                </div>
                <div className="details-text">
                  <h3>Job Details</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <span>Company</span>
                            </td>
                            <td>{post.company_name}</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Location</span>
                            </td>
                            <td>{post.company_location}</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Job Type</span>
                            </td>
                            <td>{post.job_type}</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Email</span>
                            </td>
                            <td>
                              <a href="mailto:hello@company.com">
                                {post.company_email}
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-md-6">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <span>Experince</span>
                            </td>
                            <td>{post.experience}</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Language</span>
                            </td>
                            <td>English</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Salary</span>
                            </td>
                            <td>{post.salary}</td>
                          </tr>
                          <tr>
                            <td>
                              <span>Website</span>
                            </td>
                            <td>
                              <a href="Link">{post.company_website}</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="theme-btn">
                  <button onClick={()=>navigate(`/apply/${post.walletAddress}`)} className="default-btn">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="job-sidebar">
            <h3>Posted By</h3>
            <div className="posted-by">
              <img src="assets/img/client-1.png" alt="client_image" />
              <h4>John Doe</h4>
              <span>CEO of Tourt Design LTD</span>
            </div>
          </div>
          <div className="job-sidebar">
            <h3>Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991517034!2d-74.25987556253516!3d40.697670063539654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1588772651198!5m2!1sen!2sbd"
              frameBorder={0}
              title="gg"
            />
          </div>
          <div className="job-sidebar">
            <h3>Keywords</h3>
            <ul>
              <li>
                <a href="link">Web Design</a>
              </li>
              <li>
                <a href="link">Data Sceince</a>
              </li>
              <li>
                <a href="link">SEO</a>
              </li>
              <li>
                <a href="link">Content Writter</a>
              </li>
              <li>
                <a href="link">Finance</a>
              </li>
              <li>
                <a href="link">Business</a>
              </li>
              <li>
                <a href="link">Education</a>
              </li>
              <li>
                <a href="link">Graphics</a>
              </li>
              <li>
                <a href="link">Video</a>
              </li>
            </ul>
          </div>
          <div className="job-sidebar social-share">
            <h3>Share In</h3>
            <ul>
              <li>
                <a href="link" target="_blank">
                  <i className="bx bxl-facebook" />
                </a>
              </li>
              <li>
                <a href="link" target="_blank">
                  <i className="bx bxl-twitter" />
                </a>
              </li>
              <li>
                <a href="link" target="_blank">
                  <i className="bx bxl-pinterest" />
                </a>
              </li>
              <li>
                <a href="link" target="_blank">
                  <i className="bx bxl-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      :
      <>
      <p>Pls wait! Job details loading...</p>
      </>
    }
     
    </div>
  </section>
  {/* Job Details Section End */}
</>

  )
}

export default JobDetails