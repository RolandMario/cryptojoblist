import React from 'react'

const HomeIndex = () => {
  return (
    <>
    <div>
           {/* Pre-loader Start */}
          
           {/* Pre-loader End */}
           {/* Navbar Area Start */}
           {/* <TopBar/> */}
           {/* Navbar Area End */}
           {/* Banner Section Start */}
           <div className="banner-section banner-style-five">
             <div className="d-table">
               <div className="d-table-cell">
                 <div className="container"> 
                   <div className="banner-content text-center">
                     <h1>Find The Best Crypto Job For The Future</h1>
                     <p>Discover over 1000+ open Cryptocurrency Jobs,
                        Web3 Jobs and Blockchain Jobs on
                        KryptoJobs — the No.1 site to find and post jobs. 
                        Connect with companies hiring in a few clicks and begin your next experience in the industry.
                        </p>
                   </div>
                   <form className="find-form">
                     <div className="row">
                       <div className="col-lg-3">
                         <div className="form-group">
                           <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Job Title or Keyword" />
                           <i className="bx bx-search-alt" />
                         </div>
                       </div>
                       <div className="col-lg-3">
                         <div className="form-group">
                           <input type="text" className="form-control" id="exampleInputEmail2" placeholder="Location" />
                           <i className="bx bx-location-plus" />
                         </div>
                       </div>
                       <div className="col-lg-3">
                         <select className="category">
                           <option data-display="Category">Category</option>
                           <option value={1}>Web Development</option>
                           <option value={2}>Graphics Design</option>
                           <option value={4}>Data Entry</option>
                           <option value={5}>Visual Editor</option>
                           <option value={6}>Office Assistant</option>
                         </select>
                       </div>
                       <div className="col-lg-3">
                         <button type="submit" className="find-btn">
                           Find A Job
                           <i className="bx bx-search" />
                         </button>
                       </div>
                     </div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
           {/* Banner Section End */}
           {/* Category Section Start */}
           <section className="categories-section category-style-three pt-100 pb-70">
             <div className="container">
               <div className="section-title text-center">
                 <h2>Choose Your Category</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
               </div>
               <div className="row">
                 <div className="col-lg-3 col-md-4 col-sm-6">
                   <a href="job-list.html">
                     <div className="category-card">
                       <i className="flaticon-accounting" />
                       <h3>Solidity Developer</h3>
                       <p>301 open position</p>
                     </div>
                   </a>
                 </div>
                 <div className="col-lg-3 col-md-4 col-sm-6">
                   <a href="job-list.html">
                     <div className="category-card">
                       <i className="flaticon-graduation-cap" />
                       <h3>Web3 Developer</h3>
                       <p>210 open position</p>
                     </div>
                   </a>
                 </div>
                 <div className="col-lg-3 col-md-4 col-sm-6">
                   <a href="job-list.html">
                     <div className="category-card">
                       <i className="flaticon-wrench-and-screwdriver-in-cross" />
                       <h3>Full Stack Developer</h3>
                       <p>281 open position</p>
                     </div>
                   </a>
                 </div>
                 <div className="col-lg-3 col-md-4 col-sm-6">
                   <a href="job-list.html">
                     <div className="category-card">
                       <i className="flaticon-consultation" />
                       <h3>Bitcoin Technology</h3>
                       <p>122 open position</p>
                     </div>
                   </a>
                 </div>
                 <div className="col-lg-3 col-md-4 col-sm-6">
                   <a href="job-list.html">
                     <div className="category-card">
                       <i className="flaticon-heart" />
                       <h3>Blockchain Marketer</h3>
                       <p>335 open position</p>
                     </div>
                   </a>
                 </div>
                 <div className="col-lg-3  col-md-4 col-sm-6">
                   <a href="job-list.html">
                     <div className="category-card">
                       <i className="flaticon-computer" />
                       <h3> Web Designer :</h3>
                       <p>401 open position</p>
                     </div>
                   </a>
                 </div>
                 <div className="col-lg-3  col-md-4 col-sm-6 offset-md-2 offset-lg-0">
                   <a href="job-list.html">
                     <div className="category-card">
                       <i className="flaticon-worker" />
                       <h3>Solution Architect</h3>
                       <p>100 open position</p>
                     </div>
                   </a>
                 </div>
                 <div className="col-lg-3 col-md-4 col-sm-6">
                   <a href="job-list.html">
                     <div className="category-card">
                       <i className="flaticon-auction" />
                       <h3>Project manager </h3>
                       <p>201 open position</p>
                     </div>
                   </a>
                 </div>
               </div>
             </div>
           </section>
           {/* Category Section End */} 
           {/* Why Choose Section Start */}   
           <section className="choose-style-two why-choose">
             <div className="container">
               <div className="row align-items-center">
                 <div className="col-lg-8">
                   <div className="why-choose-text pt-100 pb-70">
                     <div className="section-title">
                       <h2>Why You Choose KryptoJobs?</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolorei.</p>
                     </div>
                     <div className="row">
                       <div className="col-sm-6">
                         <div className="media">
                           <i className="flaticon-group align-self-top mr-3" />
                           <div className="media-body">
                             <h5 className="mt-0">Best Talented People</h5>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           </div>
                         </div>
                       </div>
                       <div className="col-sm-6">
                         <div className="media">
                           <i className="flaticon-research align-self-top mr-3" />
                           <div className="media-body">
                             <h5 className="mt-0">Easy To Find Canditate</h5>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           </div>
                         </div>
                       </div>
                       <div className="col-sm-6">
                         <div className="media">
                           <i className="flaticon-discussion align-self-top mr-3" />
                           <div className="media-body">
                             <h5 className="mt-0">Easy To Communicate</h5>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           </div>
                         </div>
                       </div>
                       <div className="col-sm-6">
                         <div className="media">
                           <i className="flaticon-recruitment align-self-top mr-3" />
                           <div className="media-body">
                             <h5 className="mt-0">Global Recruitment Option</h5>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-lg-4 col-sm-8 offset-sm-2 offset-lg-0">
                   <img src="assets/img/choose.png" alt="why choose image" />
                 </div>
               </div>
             </div>
           </section>       
           {/* Why Choose Section End */} 
           {/* Compnay Location Section Start */}
           <section className="company-location pt-100 pb-70">
             <div className="container">
               <div className="section-title text-center">
                 <h2>Companies By Countries</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices.</p>
               </div>
               <div className="row">
                 <div className="col-lg-3 col-sm-6">
                   <a href="job-list.html">
                     <div className="location-img">
                       <img src="assets/img/location/1.jpg" alt="location image" />
                       <div className="location-text">
                         <div className="d-table">
                           <div className="d-table-cell">
                             <h3>Nigeria</h3>
                             <span>376 Jobs</span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </a>
                 </div>
                 <div className="col-lg-3 col-sm-6">
                   <a href="job-list.html">
                     <div className="location-img">
                       <img src="assets/img/location/2.jpg" alt="location image" />
                       <div className="location-text">
                         <div className="d-table">
                           <div className="d-table-cell">
                             <h3>Canada</h3>
                             <span>106 Jobs</span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </a>
                 </div>
                 <div className="col-lg-6 col-md-6 col-sm-12">
                   <a href="job-list.html">
                     <div className="location-img">
                       <img src="assets/img/location/3.jpg" alt="location image" />
                       <div className="location-text">
                         <div className="d-table">
                           <div className="d-table-cell">
                             <h3>USA</h3>
                             <span>476 Jobs</span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </a>
                 </div>
                 <div className="col-lg-6 col-md-6 col-sm-12">
                   <a href="job-list.html">
                     <div className="location-img">
                       <img src="assets/img/location/5.jpg" alt="location image" />
                       <div className="location-text">
                         <div className="d-table">
                           <div className="d-table-cell">
                             <h3>UK</h3>
                             <span>206 Jobs</span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </a>
                 </div>
                 <div className="col-lg-3 col-sm-6">
                   <a href="job-list.html">
                     <div className="location-img">
                       <img src="assets/img/location/4.jpg" alt="location image" />
                       <div className="location-text">
                         <div className="d-table">
                           <div className="d-table-cell">
                             <h3>Australia</h3>
                             <span>120 Jobs</span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </a>
                 </div>
                 <div className="col-lg-3 col-sm-6">
                   <a href="job-list.html">
                     <div className="location-img">
                       <img src="assets/img/location/6.jpg" alt="location image" />
                       <div className="location-text">
                         <div className="d-table">
                           <div className="d-table-cell">
                             <h3>Germany</h3>
                             <span>76 Jobs</span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </a>
                 </div>
               </div>
             </div>
           </section>
           {/* Compnay Location Section End */}
           {/* Job Section End */}   
           <section className="job-style-two pt-100 pb-70">
             <div className="container">
               <div className="section-title text-center">
                 <h2>Jobs You May Be Interested In</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
               </div>
               <div className="row">
                 <div className="col-lg-12">
                   <div className="job-card-two">
                     <div className="row align-items-center">
                       <div className="col-md-1">
                         <div className="company-logo">
                           <a href="job-details.html">
                             <img src="assets/img/company-logo/1.png" alt="logo" />
                           </a>
                         </div>
                       </div>
                       <div className="col-md-8">
                         <div className="job-info">
                           <h3>
                             <a href="job-details.html">Web Designer, Graphic Designer, UI/UX Designer </a>
                           </h3>
                           <ul>                                          
                             <li>
                               <i className="bx bx-briefcase" />
                               Graphics Designer
                             </li>
                             <li>
                               <i className="bx bx-briefcase" />
                               $35000-$38000
                             </li>
                             <li>
                               <i className="bx bx-location-plus" />
                               Wellesley Rd, London
                             </li>
                             <li>
                               <i className="bx bx-stopwatch" />
                               9 days ago
                             </li>
                           </ul>
                           <span>Full Time</span>
                         </div>
                       </div>
                       <div className="col-md-3">
                         <div className="theme-btn text-end">
                           <a href="job-details.html" className="default-btn">
                             Browse Job
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-lg-12">
                   <div className="job-card-two">
                     <div className="row align-items-center">
                       <div className="col-md-1">
                         <div className="company-logo">
                           <a href="job-details.html">     
                             <img src="assets/img/company-logo/2.png" alt="logo" />
                           </a> 
                         </div>
                       </div>
                       <div className="col-md-8">
                         <div className="job-info">
                           <h3>
                             <a href="job-details.html">Website Developer &amp; Software Developer</a>
                           </h3>
                           <ul>                                          
                             <li>
                               <i className="bx bx-briefcase" />
                               Web Developer
                             </li>
                             <li>
                               <i className="bx bx-briefcase" />
                               $3000-$8000
                             </li>
                             <li>
                               <i className="bx bx-location-plus" />
                               Garden Road, UK
                             </li>
                             <li>
                               <i className="bx bx-stopwatch" />
                               5 days ago
                             </li>
                           </ul>
                           <span>Full Time</span>
                         </div>
                       </div>
                       <div className="col-md-3">
                         <div className="theme-btn text-end">
                           <a href="job-details.html" className="default-btn">
                             Browse Job
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-lg-12">
                   <div className="job-card-two">
                     <div className="row align-items-center">
                       <div className="col-md-1">
                         <div className="company-logo">
                           <a href="job-details.html">
                             <img src="assets/img/company-logo/3.png" alt="logo" />
                           </a>
                         </div>
                       </div>
                       <div className="col-md-8">
                         <div className="job-info">
                           <h3>
                             <a href="job-details.html">Application Developer &amp; Web Designer</a>
                           </h3>
                           <ul>                                          
                             <li>
                               <i className="bx bx-briefcase" />
                               App Developer
                             </li>
                             <li>
                               <i className="bx bx-briefcase" />
                               $3000-$4000
                             </li>
                             <li>
                               <i className="bx bx-location-plus" />
                               State City, USA
                             </li>
                             <li>
                               <i className="bx bx-stopwatch" />
                               8 days ago
                             </li>
                           </ul>
                           <span>Part-Time</span>
                         </div>
                       </div>
                       <div className="col-md-3">
                         <div className="theme-btn text-end">
                           <a href="job-details.html" className="default-btn">
                             Browse Job
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-lg-12">
                   <div className="job-card-two">
                     <div className="row align-items-center">
                       <div className="col-md-1">
                         <div className="company-logo">
                           <a href="job-details.html">
                             <img src="assets/img/company-logo/4.png" alt="logo" />
                           </a>
                         </div>
                       </div>
                       <div className="col-md-8">
                         <div className="job-info">
                           <h3>
                             <a href="job-details.html">Frontend &amp; Backend Developer</a>
                           </h3>
                           <ul>                                          
                             <li>
                               <i className="bx bx-briefcase" />
                               Web Developer
                             </li>
                             <li>
                               <i className="bx bx-briefcase" />
                               $5000-$8000
                             </li>
                             <li>
                               <i className="bx bx-location-plus" />
                               Drive Post NY 676
                             </li>
                             <li>
                               <i className="bx bx-stopwatch" />
                               1 days ago
                             </li>
                           </ul>
                           <span>Full Time</span>
                         </div>
                       </div>
                       <div className="col-md-3">
                         <div className="theme-btn text-end">
                           <a href="job-details.html" className="default-btn">
                             Browse Job
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-lg-12">
                   <div className="job-card-two">
                     <div className="row align-items-center">
                       <div className="col-md-1">
                         <div className="company-logo">
                           <a href="job-details.html">
                             <img src="assets/img/company-logo/5.png" alt="logo" />
                           </a>
                         </div>
                       </div>
                       <div className="col-md-8">
                         <div className="job-info">
                           <h3>
                             <a href="job-details.html">IT Department &amp; Manager</a>
                           </h3>
                           <ul>                                          
                             <li>
                               <i className="bx bx-briefcase" />
                               Manager
                             </li>
                             <li>
                               <i className="bx bx-briefcase" />
                               $35000-$38000
                             </li>
                             <li>
                               <i className="bx bx-location-plus" />
                               Wellesley Rd, London
                             </li>
                             <li>
                               <i className="bx bx-stopwatch" />
                               7 days ago
                             </li>
                           </ul>
                           <span>Full Time</span>
                         </div>
                       </div>
                       <div className="col-md-3">
                         <div className="theme-btn text-end">
                           <a href="job-details.html" className="default-btn">
                             Browse Job
                           </a>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>
           {/* Job Section End */}        
           {/* Job Info Section Start */}
           <div className="job-info-two pt-100 pb-70">
             <div className="container">
               <div className="row">
                 <div className="col-md-6">
                   <div className="looking-job">
                     <div className="media">
                       <i className="flaticon-group align-self-start mr-3" />
                       <div className="media-body">
                         <h5 className="mt-0">Looking For a Job</h5>
                         <p>Your next role could be with one of these top leading organizations</p>
                         <a href="job-list.html">
                           Apply Now
                           <i className="bx bx-chevrons-right" />
                         </a>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-6">
                   <div className="recruiting-card">
                     <div className="media">
                       <i className="flaticon-resume align-self-start mr-3" />
                       <div className="media-body">
                         <h5 className="mt-0">Are You Recruiting?</h5>
                         <p>Your next role could be with one of these top leading organizations</p>
                         <a href="post-job.html">
                           Apply Now
                           <i className="bx bx-chevrons-right" />
                         </a>
                       </div>
                     </div>
                   </div>  
                 </div>
               </div>
             </div>
           </div>
           {/* Job Info Section End */}
           {/* Counter Section Start */}
           <div className="counter-section pt-100 pb-70">
             <div className="container">
               <div className="row counter-area">
                 <div className="col-lg-3 col-6">
                   <div className="counter-text">
                     <i className="flaticon-resume" />
                     <h2><span>1225</span></h2>
                     <p>Job Posted</p>
                   </div>
                 </div>
                 <div className="col-lg-3 col-6">
                   <div className="counter-text">
                     <i className="flaticon-recruitment" />
                     <h2><span>145</span></h2>
                     <p>Job Filed</p>
                   </div>
                 </div>
                 <div className="col-lg-3 col-6">
                   <div className="counter-text">
                     <i className="flaticon-portfolio" />
                     <h2><span>170</span></h2>
                     <p>Company</p>
                   </div>
                 </div>
                 <div className="col-lg-3 col-6">
                   <div className="counter-text">
                     <i className="flaticon-employee" />
                     <h2><span>125</span></h2>
                     <p>Members</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           {/* Counter Section End */} 
           {/* Candidate Section Start */}
           <section className="candidate-section ptb-100">
             <div className="container">
               <div className="section-title text-center">
                 <h2>Featured Candidates</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
               </div>
               <div className="condidate-slider owl-carousel owl-theme">
                 <div className="condidate-item">
                   <div className="candidate-img">
                     <img src="assets/img/candidate/1.jpg" alt="candidate image" />
                   </div>
                   <div className="candidate-social">
                     <a href="#" target="_blank"><i className="bx bxl-facebook" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-twitter" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-instagram" /></a>
                   </div>
                   <div className="candidate-text">
                     <h3><a href="candidate-details.html">Mibraj Alex</a></h3>
                     <ul>
                       <li>
                         <i className="bx bx-filter-alt" />
                         Construction &amp; Property
                       </li>
                       <li>
                         <i className="bx bx-location-plus" />
                         Botchergate, Carlisle               
                       </li>
                     </ul>
                     <div className="bottom-text">
                       <p>
                         <i className="bx bx-stopwatch" />
                         9D ago
                       </p>
                       <a href="#">
                         <i className="bx bx-heart" />
                       </a>
                     </div>
                   </div>
                 </div>
                 <div className="condidate-item">
                   <div className="candidate-img">
                     <img src="assets/img/candidate/2.jpg" alt="candidate image" />
                   </div>
                   <div className="candidate-social">
                     <a href="#" target="_blank"><i className="bx bxl-facebook" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-twitter" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-instagram" /></a>
                   </div>
                   <div className="candidate-text">
                     <h3><a href="candidate-details.html">Felica Kareon</a></h3>
                     <ul>
                       <li>
                         <i className="bx bx-filter-alt" />
                         SEO Expart
                       </li>
                       <li>
                         <i className="bx bx-location-plus" />
                         Georgetown, USA               
                       </li>
                     </ul>
                     <div className="bottom-text">
                       <p>
                         <i className="bx bx-stopwatch" />
                         8D ago
                       </p>
                       <a href="#">
                         <i className="bx bx-heart" />
                       </a>
                     </div>
                   </div>
                 </div>
                 <div className="condidate-item">
                   <div className="candidate-img">
                     <img src="assets/img/candidate/3.jpg" alt="candidate image" />
                   </div>
                   <div className="candidate-social">
                     <a href="#" target="_blank"><i className="bx bxl-facebook" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-twitter" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-instagram" /></a>
                   </div>
                   <div className="candidate-text">
                     <h3><a href="candidate-details.html">Malisha Patel</a></h3>
                     <ul>
                       <li>
                         <i className="bx bx-filter-alt" />
                         Project Management
                       </li>
                       <li>
                         <i className="bx bx-location-plus" />
                         Madison, USA               
                       </li>
                     </ul>
                     <div className="bottom-text">
                       <p>
                         <i className="bx bx-stopwatch" />
                         1D ago
                       </p>
                       <a href="#">
                         <i className="bx bx-heart" />
                       </a>
                     </div>
                   </div>
                 </div>
                 <div className="condidate-item">
                   <div className="candidate-img">
                     <img src="assets/img/candidate/1.jpg" alt="candidate image" />
                   </div>
                   <div className="candidate-social">
                     <a href="#" target="_blank"><i className="bx bxl-facebook" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-twitter" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-instagram" /></a>
                   </div>
                   <div className="candidate-text">
                     <h3><a href="candidate-details.html">Mibraj Alex</a></h3>
                     <ul>
                       <li>
                         <i className="bx bx-filter-alt" />
                         Construction &amp; Property
                       </li>
                       <li>
                         <i className="bx bx-location-plus" />
                         Botchergate, Carlisle               
                       </li>
                     </ul>
                     <div className="bottom-text">
                       <p>
                         <i className="bx bx-stopwatch" />
                         9D ago
                       </p>
                       <a href="#">
                         <i className="bx bx-heart" />
                       </a>
                     </div>
                   </div>
                 </div>
                 <div className="condidate-item">
                   <div className="candidate-img">
                     <img src="assets/img/candidate/4.jpg" alt="candidate image" />
                   </div>
                   <div className="candidate-social">
                     <a href="#" target="_blank"><i className="bx bxl-facebook" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-twitter" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-instagram" /></a>
                   </div>
                   <div className="candidate-text">
                     <h3><a href="candidate-details.html">Quence Joes</a></h3>
                     <ul>
                       <li>
                         <i className="bx bx-filter-alt" />
                         Web Developer
                       </li>
                       <li>
                         <i className="bx bx-location-plus" />
                         Augusta, Maine             
                       </li>
                     </ul>
                     <div className="bottom-text">
                       <p>
                         <i className="bx bx-stopwatch" />
                         8D ago
                       </p>
                       <a href="#">
                         <i className="bx bx-heart" />
                       </a>
                     </div>
                   </div>
                 </div>
                 <div className="condidate-item">
                   <div className="candidate-img">
                     <img src="assets/img/candidate/2.jpg" alt="candidate image" />
                   </div>
                   <div className="candidate-social">
                     <a href="#" target="_blank"><i className="bx bxl-facebook" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-twitter" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-instagram" /></a>
                   </div>
                   <div className="candidate-text">
                     <h3><a href="candidate-details.html">Felica Kareon</a></h3>
                     <ul>
                       <li>
                         <i className="bx bx-filter-alt" />
                         SEO Expart
                       </li>
                       <li>
                         <i className="bx bx-location-plus" />
                         Georgetown, USA               
                       </li>
                     </ul>
                     <div className="bottom-text">
                       <p>
                         <i className="bx bx-stopwatch" />
                         8D ago
                       </p>
                       <a href="#">
                         <i className="bx bx-heart" />
                       </a>
                     </div>
                   </div>
                 </div>
                 <div className="condidate-item">
                   <div className="candidate-img">
                     <img src="assets/img/candidate/3.jpg" alt="candidate image" />
                   </div>
                   <div className="candidate-social">
                     <a href="#" target="_blank"><i className="bx bxl-facebook" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-twitter" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-instagram" /></a>
                   </div>
                   <div className="candidate-text">
                     <h3><a href="candidate-details.html">Malisa Petel</a></h3>
                     <ul>
                       <li>
                         <i className="bx bx-filter-alt" />
                         Project Management
                       </li>
                       <li>
                         <i className="bx bx-location-plus" />
                         Madison, USA               
                       </li>
                     </ul>
                     <div className="bottom-text">
                       <p>
                         <i className="bx bx-stopwatch" />
                         1D ago
                       </p>
                       <a href="#">
                         <i className="bx bx-heart" />
                       </a>
                     </div>
                   </div>
                 </div>
                 <div className="condidate-item">
                   <div className="candidate-img">
                     <img src="assets/img/candidate/4.jpg" alt="candidate image" />
                   </div>
                   <div className="candidate-social">
                     <a href="#" target="_blank"><i className="bx bxl-facebook" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-twitter" /></a>
                     <a href="#" target="_blank"><i className="bx bxl-instagram" /></a>
                   </div>
                   <div className="candidate-text">
                     <h3><a href="candidate-details.html">Quence Joes</a></h3>
                     <ul>
                       <li>
                         <i className="bx bx-filter-alt" />
                         Web Developer
                       </li>
                       <li>
                         <i className="bx bx-location-plus" />
                         Augusta, Maine             
                       </li>
                     </ul>
                     <div className="bottom-text">
                       <p>
                         <i className="bx bx-stopwatch" />
                         8D ago
                       </p>
                       <a href="#">
                         <i className="bx bx-heart" />
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>
           {/* Candidate Section End */}
           {/* Testimonial Section Start */}
           <div className="testimonial-style-two testimonial-style-three pt-100">
             <div className="container">
               <div className="section-title text-center">
                 <h2>What Client’s Say About Us</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
               </div>
               <div className="row">
                 <div className="testimonial-slider-two owl-carousel owl-theme">
                   <div className="testimonial-items">
                     <div className="testimonial-text">
                       <i className="flaticon-left-quotes-sign" />
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                     </div>
                     <div className="testimonial-info-text">
                       <img src="assets/img/client-1.png" alt="client image" />
                       <h3>Alisa Meair</h3>
                       <p>CEO of  Company</p>
                     </div>
                   </div>
                   <div className="testimonial-items">
                     <div className="testimonial-text">
                       <i className="flaticon-left-quotes-sign" />
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                     </div>
                     <div className="testimonial-info-text">
                       <img src="assets/img/client-2.png" alt="client image" />
                       <h3>Adam Smith</h3>
                       <p>Web Developer</p>
                     </div>
                   </div>
                   <div className="testimonial-items">
                     <div className="testimonial-text">
                       <i className="flaticon-left-quotes-sign" />
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do mod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                     </div>
                     <div className="testimonial-info-text">
                       <img src="assets/img/client-1.png" alt="client image" />
                       <h3>John Doe</h3>
                       <p>Graphics Designer</p>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           {/* Testimonial Section End */} 
           {/* Blog Section Start */}
           <section className="blog-section pt-100 pb-70">
             <div className="container">
               <div className="section-title text-center">
                 <h2>News, Tips &amp; Articles</h2>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus</p>
               </div>
               <div className="row">
                 <div className="col-lg-4 col-sm-6">
                   <div className="blog-card">
                     <div className="blog-img">
                       <a href="blog-details.html">
                         <img src="assets/img/blog/1.jpg" alt="blog image" />
                       </a>
                     </div>
                     <div className="blog-text">
                       <ul>
                         <li>
                           <i className="bx bxs-user" />
                           Admin
                         </li>
                         <li>
                           <i className="bx bx-calendar" />
                           7 Feb, 2021
                         </li>
                       </ul>
                       <h3>
                         <a href="blog-details.html">
                           How to Indroduce in Yourself in Job Interview?
                         </a>
                       </h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                       <a href="blog-details.html" className="blog-btn">
                         Read More
                         <i className="bx bx-plus bx-spin" />
                       </a>
                     </div>
                   </div>
                 </div>
                 <div className="col-lg-4 col-sm-6">
                   <div className="blog-card">
                     <div className="blog-img">
                       <a href="blog-details.html">
                         <img src="assets/img/blog/2.jpg" alt="blog image" />
                       </a>
                     </div>
                     <div className="blog-text">
                       <ul>
                         <li>
                           <i className="bx bxs-user" />
                           Admin
                         </li>
                         <li>
                           <i className="bx bx-calendar" />
                           7 Feb, 2021
                         </li>
                       </ul>
                       <h3>
                         <a href="blog-details.html">
                           Looking for Highly Motivated Product to Build
                         </a>
                       </h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                       <a href="blog-details.html" className="blog-btn">
                         Read More
                         <i className="bx bx-plus bx-spin" />
                       </a>
                     </div>
                   </div>
                 </div>
                 <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
                   <div className="blog-card">
                     <div className="blog-img">
                       <a href="blog-details.html">
                         <img src="assets/img/blog/3.jpg" alt="blog image" />
                       </a>
                     </div>
                     <div className="blog-text">
                       <ul>
                         <li>
                           <i className="bx bxs-user" />
                           Admin
                         </li>
                         <li>
                           <i className="bx bx-calendar" />
                           7 Feb, 2021
                         </li>
                       </ul>
                       <h3>
                         <a href="blog-details.html">
                           The Reason Why Software Develope is the Best Job
                         </a>
                       </h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                       <a href="blog-details.html" className="blog-btn">
                         Read More
                         <i className="bx bx-plus bx-spin" />
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>
           {/* Blog Section End */}
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
           {/* Footer Section Start */}
         
           {/* Footer Section End */}
           {/* Back To Top Start */}
           <div className="top-btn">
             <i className="bx bx-chevrons-up bx-fade-up" />
           </div>
         </div>
     </>
  )
}

export default HomeIndex