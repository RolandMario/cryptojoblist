import React from 'react'

const CompanyPage = () => {
  return (
    <>
  <div className="col-lg-9 col-md-12 col-sm-12 col-12">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="job_filter_category_sidebar company_wrapper jb_cover">
          <div className="job_filter_sidebar_heading jb_cover">
            <h1>
              {" "}
              basic information{" "}
              <span>
                <a href="link" data-toggle="modal" data-target="#myModal1">
                  <i className="fas fa-edit" />
                </a>
              </span>
            </h1>
            <div
              className="modal fade delete_popup company_popup"
              id="myModal1"
              role="dialog"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="delett_cntn jb_cover">
                        <h1>
                          <i className="fas fa-edit" />
                          basic information
                        </h1>
                        <div className="category_wrapper jb_cover">
                          <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div className="category_lavel jb_cover">
                                <p>category :</p>
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div className="delete_jb_form">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Design & creative"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="category_wrapper jb_cover">
                          <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div className="category_lavel jb_cover">
                                <p>location :</p>
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div className="delete_jb_form">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="loss angles"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="category_wrapper jb_cover">
                          <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div className="category_lavel jb_cover">
                                <p>phone :</p>
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div className="delete_jb_form">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="+91 983622711"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="category_wrapper jb_cover">
                          <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div className="category_lavel jb_cover">
                                <p>email :</p>
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div className="delete_jb_form">
                                <input
                                  type="email"
                                  name="email"
                                  placeholder="webstrot@example.com"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="category_wrapper jb_cover">
                          <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div className="category_lavel jb_cover">
                                <p>company size :</p>
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div className="delete_jb_form">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder={100}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="padder_top jb_cover" />
                        <div className="header_btn search_btn applt_pop_btn">
                          <a href="link">save updates</a>
                        </div>
                        <div className="cancel_wrapper">
                          <a href="link" data-dismiss="modal">
                            cancel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="job_overview_header jb_cover">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
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
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
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
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="job_filter_category_sidebar company_wrapper jb_cover">
          <div className="job_filter_sidebar_heading jb_cover">
            <h1>
              about us{" "}
              <span>
                <a href="#" data-toggle="modal" data-target="#myModal2">
                  <i className="fas fa-edit" />
                </a>
              </span>
            </h1>
            <div
              className="modal fade delete_popup company_popup"
              id="myModal2"
              role="dialog"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="delett_cntn jb_cover">
                        <h1>
                          <i className="fas fa-edit" />
                          about us
                        </h1>
                        <div className="category_wrapper jb_cover">
                          <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div className="category_lavel jb_cover">
                                <p>write yourself:</p>
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div className="delete_jb_form">
                                <textarea
                                  className="require"
                                  name="message"
                                  rows={5}
                                  placeholder="Write Yourself"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="padder_top jb_cover" />
                        <div className="header_btn search_btn applt_pop_btn">
                          <a href="link">save updates</a>
                        </div>
                        <div className="cancel_wrapper">
                          <a href="link" data-dismiss="modal">
                            cancel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="job_overview_header pdd jb_cover">
            <p>
              Google is and always will be an engineering company. We hire
              people with a broad set of icalskills who are ready to tackle some
              of technology's greatest challenges and make an impact on milions,
              if not billions, of users. At Google, engineers not only
              revolutionize search, they routinely work on massive scalability
              and storage solutions,
              <br />
              <br /> large-scale applications and rely new platforms for
              developers around the world. From AdWords to rome, Android to Ye,
              Social to Local, Google engineers are changing the world. From
              AdWords to Chrome, Aoid to Ye, Social to.
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="job_filter_category_sidebar company_wrapper jb_cover">
          <div className="job_filter_sidebar_heading jb_cover">
            <h1>
              intro video
              <span>
                <a href="link" data-toggle="modal" data-target="#myModal4">
                  <i className="fas fa-edit" />
                </a>
              </span>
            </h1>
            <div
              className="modal fade delete_popup company_popup"
              id="myModal4"
              role="dialog"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="delett_cntn jb_cover">
                        <h1>
                          <i className="fas fa-edit" />
                          intro video
                        </h1>
                        <div className="category_wrapper jb_cover">
                          <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div className="category_lavel jb_cover">
                                <p>video link:</p>
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div className="delete_jb_form">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="youtube url or browse video"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="padder_top jb_cover" />
                        <div className="header_btn search_btn applt_pop_btn">
                          <a href="link">save updates</a>
                        </div>
                        <div className="cancel_wrapper">
                          <a href="link" data-dismiss="modal">
                            cancel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="job_overview_header pdd jb_cover">
            <div className="row">
              <div className="col-lg-9 col-md-8 col-sm-12 col-12">
                <div className="contect_form3">
                  <input
                    type="email"
                    name="email"
                    placeholder="youtube url or browse video"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 col-12">
                <div className="width_50 browsevideo">
                  <input
                    type="file"
                    id="input-file-now-custom-233"
                    className="dropify"
                    data-height={90}
                  />
                  <span className="post_photo">browse video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="job_filter_category_sidebar company_wrapper jb_cover">
          <div className="job_filter_sidebar_heading jb_cover">
            <h1>
              image gallery
              <span>
                <a href="link" data-toggle="modal" data-target="#myModal5">
                  <i className="fas fa-edit" />
                </a>
              </span>
            </h1>
            <div
              className="modal fade delete_popup company_popup"
              id="myModal5"
              role="dialog"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <button type="button" className="close" data-dismiss="modal">
                    ×
                  </button>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="delett_cntn jb_cover">
                        <h1>
                          <i className="fas fa-edit" />
                          gallery
                        </h1>
                        <div className="category_wrapper gallery_browse jb_cover">
                          <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div className="category_lavel jb_cover">
                                <p>gallery 01 :</p>
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div className="delete_jb_form gallery_link">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Title"
                                />
                              </div>
                              <div className="delete_jb_form gallery_link">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Link"
                                />
                              </div>
                              <div className="width_50 gallery_link">
                                <label>Image </label>
                                <input
                                  type="file"
                                  id="input-file-now-custom-23"
                                  className="dropify"
                                  data-height={90}
                                />
                                <span className="post_photo">browse image</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="category_wrapper gallery_browse jb_cover">
                          <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                              <div className="category_lavel jb_cover">
                                <p>gallery 02 :</p>
                              </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                              <div className="delete_jb_form gallery_link">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Title"
                                />
                              </div>
                              <div className="delete_jb_form gallery_link">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Link"
                                />
                              </div>
                              <div className="width_50 gallery_link">
                                <label>Image </label>
                                <input
                                  type="file"
                                  id="input-file-now-custom-231"
                                  className="dropify"
                                  data-height={90}
                                />
                                <span className="post_photo">browse image</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="padder_top jb_cover" />
                        <div className="header_btn search_btn applt_pop_btn">
                          <a href="link">save updates</a>
                        </div>
                        <div className="cancel_wrapper">
                          <a href="link" data-dismiss="modal">
                            cancel
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="job_overview_header pdd jb_cover">
            <ul className="image_gallery jb_cover">
              <li>
                <a href="link">
                  <img src="images/gallery1.jpg" alt="img" />
                </a>
              </li>
              <li>
                <a href="link">
                  <img src="images/gallery2.jpg" alt="img" />
                </a>
              </li>
              <li>
                <a href="link">
                  <img src="images/gallery3.jpg" alt="img" />
                </a>
              </li>
              <li>
                <a href="link">
                  <img src="images/gallery4.jpg" alt="img" />
                </a>
              </li>
            </ul>
            <div className="header_btn search_btn jb_cover">
              <a href="link">add image</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-md-12 col-sm-12 col-12">
        <div className="header_btn search_btn jb_cover">
          <a href="link">save changes</a>
        </div>
      </div>
    </div>
  </div>
  {/*employee dashboard wrapper end*/}
</>

  )
}

export default CompanyPage