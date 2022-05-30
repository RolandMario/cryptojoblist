import React from 'react'

const ProfileDetails = () => {
  return (
    <>
    <div className="col-lg-9 col-md-12 col-sm-12 col-12">
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
      <div className="job_listing_left_fullwidth jb_cover">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="jp_job_post_side_img">
              <img src="images/pf1.jpg" alt="post_img" />
            </div>
            <div className="jp_job_post_right_cont edit_profile_wrapper">
              <h4>JPEG or PNG 500x500px Thumbnail</h4>
              <div className="width_50">
                <input
                  type="file"
                  id="input-file-now-custom-233"
                  className="dropify"
                  data-height={90}
                />
                <span className="post_photo">browse image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="browse_img_banner jb_cover">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contect_form3">
              <label>@username</label>
              <input type="text" name="name" placeholder="Luca Wallace" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contect_form3">
              <label>Email</label>
              <input type="email" name="email" placeholder="luca@example.com" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contect_form3">
              <label>Phone</label>
              <input type="number" name="number" placeholder="+91 9098085819" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contect_form3">
              <label>Website</label>
              <input type="email" name="email" placeholder="www.webstrot.com" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="select_box">
              <label>job description</label>
              <select>
                <option>it &amp; computer</option>
                <option>marketing</option>
                <option>mechanical</option>
                <option>doctor</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contect_form3">
              <label>address</label>
              <input type="text" name="name" placeholder="124/A Kalani Bagh" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contect_form3">
              <label>country</label>
              <input type="text" name="name" placeholder="India" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="select_box">
              <label>state</label>
              <select>
                <option>Madhya pradesh</option>
                <option>uttar pradesh</option>
                <option>himachal pradesh</option>
                <option>punjab</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="contect_form3">
              <label>city</label>
              <input type="text" name="name" placeholder="Dewas" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="select_box">
              <label>zip code</label>
              <select>
                <option>455001</option>
                <option>422501</option>
                <option>45310</option>
                <option>41600</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="browse jb_cover">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="job_filter_category_sidebar jb_cover">
              <div className="job_filter_sidebar_heading jb_cover">
                <h1> social networks</h1>
              </div>
              <div className="job_overview_header jb_cover">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contect_form3">
                      <label>google</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="https://google.com/webstrot"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contect_form3">
                      <label>facebook</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="https://www.facebook.com/webstrot"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contect_form3">
                      <label>twitter</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="https://www.twitter.com/webstrot"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contect_form3">
                      <label>linkedin</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="https://www.linkedin.com/webstrot"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="header_btn search_btn jb_cover">
                      <a href="link">add more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="job_filter_category_sidebar jb_cover">
              <div className="job_filter_sidebar_heading jb_cover">
                <h1> password &amp; security</h1>
              </div>
              <div className="job_overview_header jb_cover">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contect_form3">
                      <label>verification email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="webstrot@example.com"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contect_form3">
                      <label>current pasword</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="*************"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contect_form3">
                      <label>new pasword</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="*************"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="contect_form3">
                      <label> repeat new pasword</label>
                      <input
                        type="password"
                        name="password"
                        placeholder="*************"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="login_remember_box jb_cover">
              <label className="control control--checkbox">
                Enable Two Step Verification Via Email
                <input type="checkbox" />
                <span className="control__indicator" />
              </label>
              <div className="header_btn search_btn jb_cover">
                <a href="link">save changes</a>
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

export default ProfileDetails