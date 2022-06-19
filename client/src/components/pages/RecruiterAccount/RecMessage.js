import React from 'react'

const RecMessage = () => {
  return (
    <>
    <div className="col-lg-9 col-md-12 col-sm-12 col-12">
  <div className="dashboard-message-wrapper">
    <div className="message-lists">
      <form action="#" className="message-search">
        <input type="text" placeholder="Search Friend......" />
        <button>
          <i className="fas fa-search" />
        </button>
      </form>
      <a href="link" className="message-single">
        <div className="thumb">
          <img src="images/rc1.png" className="img-fluid" alt="" />
        </div>
        <div className="body">
          <h6 className="username">Laural K.</h6>
          <span className="send-time">12 min</span>
        </div>
      </a>
      <a href="link" className="message-single">
        <div className="thumb">
          <img src="images/rc2.png" className="img-fluid" alt="" />
        </div>
        <div className="body">
          <h6 className="username">Paul Cox</h6>
          <span className="send-time">22 min</span>
        </div>
      </a>
      <a href="link" className="message-single active">
        <div className="thumb">
          <img src="images/rc3.png" className="img-fluid" alt="" />
        </div>
        <div className="body">
          <h6 className="username">Carlos</h6>
          <span className="text-number">16 min</span>
        </div>
      </a>
      <a href="link" className="message-single">
        <div className="thumb">
          <img src="images/rc4.png" className="img-fluid" alt="" />
        </div>
        <div className="body">
          <h6 className="username">Dahlia</h6>
          <span className="send-time">45 min</span>
        </div>
      </a>
      <a href="link" className="message-single">
        <div className="thumb">
          <img src="images/rs5.jpg" className="img-fluid" alt="" />
        </div>
        <div className="body">
          <h6 className="username">Nathan</h6>
          <span className="send-time">45 min</span>
        </div>
      </a>
      <a href="link" className="message-single">
        <div className="thumb">
          <img src="images/rs4.jpg" className="img-fluid" alt="" />
        </div>
        <div className="body">
          <h6 className="username">nicloss</h6>
          <span className="send-time">26 min</span>
        </div>
      </a>
    </div>
    <div className="message-box">
      <div className="message-box-header">
        <h5>carlos</h5>
        <div className="navbar navbar-expand-sm drop">
          {/* Links */}
          <ul className="navbar-nav">
            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="link"
                id="navbardrop1"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa fa-ellipsis-h" />
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="link">
                  <i className="fa fa-link" />
                  &nbsp;&nbsp;Copy this link
                </a>
                <a className="dropdown-item" href="link">
                  <i className="fa fa-tag" />
                  &nbsp;&nbsp;Report
                </a>
                <a className="dropdown-item" href="link">
                  <i className="fa fa-flag" />
                  &nbsp;&nbsp;Hide
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ul className="dashboard-conversation">
        <li className="conversation in">
          <div className="avater">
            <img src="images/rc3.png" className="img-fluid" alt="" />
          </div>
          <div className="message">
            <span>
              This is Photoshop's version of Lom Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis{" "}
            </span>
          </div>
          <span className="send-time">2.32 am</span>
        </li>
        <li className="conversation out">
          <div className="avater">
            <img src="images/rc1.png" className="img-fluid" alt="" />
          </div>
          <div className="message">
            <span>
              This is Photoshop's version of Lom Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis{" "}
            </span>
          </div>
          <span className="send-time">2.32 am</span>
        </li>
        <li className="conversation in">
          <div className="avater">
            <img src="images/rc3.png" className="img-fluid" alt="" />
          </div>
          <div className="message">
            <span>
              This is Photoshop's version of Lom Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis{" "}
            </span>
          </div>
          <span className="send-time">2.34 am</span>
        </li>
        <li className="conversation out">
          <div className="avater">
            <img src="images/rc1.png" className="img-fluid" alt="" />
          </div>
          <div className="message">
            <span>
              This is Photoshop's version of Lom Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis{" "}
            </span>
          </div>
          <span className="send-time">2.34 am</span>
        </li>
        <li className="conversation in">
          <div className="avater">
            <img src="images/rc3.png" className="img-fluid" alt="" />
          </div>
          <div className="message">
            <span>
              This is Photoshop's version of Lom Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis{" "}
            </span>
          </div>
          <span className="send-time">2.34 am</span>
        </li>
      </ul>
      <div className="conversation-write-wrap">
        <form action="#">
          <textarea placeholder="Type a message" defaultValue={""} />
          <label className="send-file">
            <input type="file" />
            <i className="fas fa-image" />
          </label>
          <label className="send-image">
            <input type="file" />
            <i className="fas fa-file-image" />
          </label>
          <button className="send-message">
            <i className="fas fa-location-arrow" />
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default RecMessage