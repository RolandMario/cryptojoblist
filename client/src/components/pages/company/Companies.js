import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Companies = () => {
  
  const [recData, setRecData] = useState([])
  const [pageNo, setPageNo] = useState(0)
  const pages = [0, 1, 2, 3]

  const url = `${process.env.REACT_APP_API_URL}/server/getCompanyProfile?pageNo=${pageNo}`;

  const fetchRecruiterdetails = async()=>{     
    try {
     
      const {data} = await axios.get(url)
      
      setRecData(data.rows)
    } catch (error) {
      console.log("error getting company info", error)
    }
   

  }

  useEffect(() => {
    
      fetchRecruiterdetails();
      
   // eslint-disable-next-line
  }, [])
  return (
    <>
    <div>
          {/* Page Title Start */}
          <section className="page-title title-bg9">
            <div className="d-table">
              <div className="d-table-cell">
                <h2>Company</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Company</li>
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
          {/* Companies Section Start */}
          <section className="company-section company-style-two pt-100 pb-70">
            <div className="container">
              <div className="section-title text-center">
                <h2>Top Companies</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
              </div>
              <div className="row">
                {recData?.map(companyData=>{
                  return(
                    <div className="col-lg-3 col-sm-6" key={companyData.walletAddress}>
                  <div className="company-card">
                    <div className="company-logo">
                      <a href="job-list.html">
                        <img src={`${process.env.REACT_APP_API_URL}/${companyData?.cover_logo}`} alt="company logo" />
                      </a>
                    </div>
                    <div className="company-text">
                      <h3>{companyData.company_name}</h3>
                      <p>
                        <i className="bx bx-location-plus" />
                        {companyData.city}, {companyData.country}
                      </p>
                      <a href="job-list.html" className="company-btn">
                        View Company
                      </a>
                    </div>
                  </div>
                </div>
                  )
                })}
                
         
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="link" tabIndex={-1} aria-disabled="true">
                      <i className="bx bx-chevrons-left bx-fade-left" />
                    </a>
                  </li>
                  {pages.map((item)=>{
                     return(<li className="page-item"><button className="page-link" onClick={()=>setPageNo(item)} key={item}>{item}</button></li>)
                 
                  })}
                  <li className="page-item">
                    <a className="page-link" href="link">
                      <i className="bx bx-chevrons-right bx-fade-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </section>
          {/* Companies Section End */}
          {/* Subscribe Section Start */}
          <section className="subscribe-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="section-title">
                    <h2>Get New Job Notifications</h2>
                    <p>Subscribe &amp; get all related jobs notification</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <form className="newsletter-form" data-toggle="validator">
                    <input type="email" className="form-control" placeholder="Enter your email" name="EMAIL" required autoComplete="off" />
                    <button className="default-btn sub-btn" type="submit">
                      Subscribe
                    </button>
                    <div id="validator-newsletter" className="form-result" />
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* Subscribe Section End */}
        </div>
    </>
  )
}

export default Companies

