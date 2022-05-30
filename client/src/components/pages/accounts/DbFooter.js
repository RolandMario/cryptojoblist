import React from 'react'

const DbFooter = () => {
  return (
    <>
     <div className="">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="job_newsletter_wrapper jb_cover">
            <div className="jb_newslwtteter_left">
              <h2> Looking For A Job</h2>
              <p>
                Your next level Product developemnt company assetsYour next
                level Product{" "}
              </p>
            </div>
            <div className="jb_newslwtteter_button">
              <div className="header_btn search_btn news_btn jb_cover">
                <a href="link">submit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* newsletter wrapper end */}
  {/* chat box Wrapper start */}
  <div id="chat-circle" className="btn btn-raised">
    <i className="fas fa-comment-alt" />
  </div>
  <div className="chat-box">
    <div className="chat-box-header">
      ChatBot
      <span className="chat-box-toggle">
        <i className="fas fa-times" />
      </span>
    </div>
    <div className="chat-box-body">
      <div className="chat-box-overlay"></div>
      <div className="chat-logs"></div>
      {/*chat-log */}
    </div>
    <div className="chat-input">
      <form>
        <input type="text" id="chat-input" placeholder="Send a message..." />
        <button type="submit" className="chat-submit" id="chat-submit">
          <i className="fas fa-paper-plane" />
        </button>
      </form>
    </div>
  </div>
    </>
  )
}

export default DbFooter