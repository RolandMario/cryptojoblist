import React,{useContext, useState, useReducer} from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import { useNavigate} from 'react-router-dom'
import { WalletAddressContext } from '../../context/WalletAddressContext'
import axios from 'axios'
//import {baseURL} from '../../constants/Constants'
const SignUp = () => {

  let initialState ={
    isLoading: "",
    success: "",
    existed: "",
    failed: ""
  }

  const signUpReducer = (state, action)=>{
      switch (action.type) {
        case "signup":{
          return{
              ...state,
              isLoading: "processing..., pls wait!",
              success: "",
              failed: "",
              existed: ""
              
          }
      }
      case "succeed":{
        return{
            ...state,
            success: "Done!",
            isLoading: "",
            failed: "",
            existed: ""
            
        }
    }
    case "exist":{
      return{
          ...state,
          success: "",
          isLoading: "",
          failed:"",
          existed: "Already registered"
      }
  }
  case "failure":{
    return{
        ...state,
        success: "",
        isLoading: "",
        failed:" Something went wrong, try again",
        existed: ""
    }
}
        default:
          return state
      }
  }
  const [walletAddress, ] = useContext(WalletAddressContext)
  const [state, dispatch] = useReducer(signUpReducer, initialState)

  const [style, setStyle] = useState("cat");
  const [styleCandidiate, setStyleCandidiate] = useState("cat");
  const [category, setCategory] = useState("")

  const changeStyle = () => {
     setStyle("catSelected");
     setStyleCandidiate("cat")
     setCategory("Recruiter")

  };

  const changeStyleCand = () => {
    setStyleCandidiate("catSelected")
    setStyle("cat");
    setCategory("Candidiate")
 };
 

  let navigate = useNavigate();

  const formik = useFormik({
      initialValues:{
          username:"",
          email: "",
          password: ""
      },
      onSubmit: async(values)=>{
        dispatch({type:'signup'})
        
       
        
          let signupData = {
            "username":values.username,
            "email": values.email,
            "password": values.password,
            "walletAddress": walletAddress
          }
          
          try {
          if(category === "Recruiter"){
            const url = `${process.env.REACT_APP_API_URL}/server/addRecruiter`
          const {data} = await axios.post(url, signupData)
          console.log("return fron db",data)
            dispatch({type: "secceed"})
              navigate("/recruiter-account")
            }else if(category === "Candidiate"){
              const url = `${process.env.REACT_APP_API_URL}/server/addCandidiate`
              const {data} = await axios.post(url, signupData)
              console.log("return fron db",data)
              dispatch({type: "secceed"})
              navigate('/account')
            }
              
        } catch (error) {
          if(error.response.status === 400){
            dispatch({type: 'exist'})
          }
            
          else{
            dispatch({type: 'failure'})
            console.log("print error", error);
          }
             
        }
          
      }
  })

  return (
   <>
   <div>
          {/* Page Title Start */}
          <section className="page-title title-bg13">
            <div className="d-table">
              <div className="d-table-cell">
                <h2>Sign Up</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Sign Up</li>
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
          {/* Sign up Section Start */}
          <div className="signup-section ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
                  <form onSubmit={formik.handleSubmit} className="signup-form">
                  
                    <div className={style} onClick={changeStyle}>
                      <label>Recruiter</label>
                    </div>
                    <div className={styleCandidiate} onClick={changeStyleCand}>
                      <label>Candidiates</label>
                    </div>
                      
                    
                    <div className='signupState'>
                     <h4>{state.isLoading }{state.success}{state.failed}{state.existed}</h4> 
                    <label>Wallet Address</label>
                    <p>{walletAddress}</p>
                    </div>
                    <div className="form-group">
                      <label>Enter Username</label>
                      <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange} className="form-control" placeholder="Enter Username" required />
                    </div>
                    <div className="form-group">
                      <label>Enter Email</label>
                      <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} className="form-control" placeholder="Enter Your Email" required />
                    </div>
                    <div className="form-group">
                      <label>Enter Password</label>
                      <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} className="form-control" placeholder="Enter Your Password" required />
                    </div>
                    <div className="signup-btn text-center">
                      <button type="submit">Sign Up</button>
                    </div>
                    <div className="other-signup text-center">
                      <span>Or sign up with</span>
                      <ul>
                        <li>
                          <a href="link">
                            <i className="bx bxl-google" />
                          </a>
                        </li>
                        <li>
                          <a href="link">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="link">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="link">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="create-btn text-center">
                      <p>
                        Have an Account?
                        <Link to="/sign-in">
                          Sign In
                          <i className="bx bx-chevrons-right bx-fade-right" />
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>  
              </div>
            </div>
          </div>
          {/* Sign Up Section End */}
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

export default SignUp

