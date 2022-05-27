import React from 'react'

const ProfileDetails = () => {
  return (
    <>
    <div className="col-md-8">
                  <div className="account-details">
                    <h3>Basic Information</h3>
                    <form className="basic-info">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" className="form-control" placeholder="Your Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Your Email</label>
                            <input type="email" className="form-control" placeholder="Your Email" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Your Phone</label>
                            <input type="number" className="form-control" placeholder="Your Phone" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Job Title</label>
                            <input type="text" className="form-control" placeholder="Job Title" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="account-btn">Edit</button>
                          <button type="submit" className="account-btn">Save</button>
                        </div>
                      </div>
                    </form>
                    <h3>Address</h3>
                    <form className="-candidate-address">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Your Country</label>
                            <input type="text" className="form-control" placeholder="Your Country" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Your City</label>
                            <input type="text" className="form-control" placeholder="Your City" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Zip Code</label>
                            <input type="number" className="form-control" placeholder="City Zip" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Region</label>
                            <input type="text" className="form-control" placeholder="Your Region" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="account-btn">Edit</button>
                          <button type="submit" className="account-btn">Save</button>
                        </div>
                      </div>
                    </form>
                    <h3>Other information</h3>
                    <form className="cadidate-others">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Age</label>
                            <input type="number" className="form-control" placeholder="Your Age" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Work Experience</label>
                            <input type="number" className="form-control" placeholder="Work Experience" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Language</label>
                            <input type="text" className="form-control" placeholder="Language" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Skill</label>
                            <input type="text" className="form-control" placeholder="Skills" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="account-btn">Edit</button>
                          <button type="submit" className="account-btn">Save</button>
                        </div>
                      </div>
                    </form>
                    <h3>Social links</h3>
                    <form className="candidates-sociak">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Facebook</label>
                            <input type="text" className="form-control" placeholder="www.facebook.com/user" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Twitter</label>
                            <input type="number" className="form-control" placeholder="www.twitter.com/user" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Linkedin</label>
                            <input type="text" className="form-control" placeholder="www.Linkedin.com/user" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Github</label>
                            <input type="text" className="form-control" placeholder="www.Github.com/user" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <button type="submit" className="account-btn">Edit</button>
                          <button type="submit" className="account-btn">Save</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
    </>
  )
}

export default ProfileDetails