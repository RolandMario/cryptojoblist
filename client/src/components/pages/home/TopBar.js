import React, {useEffect, useContext, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Web3 from 'web3'
import axios from 'axios'
import { WalletAddressContext } from '../../context/WalletAddressContext'
const TopBar = () => {

 let param = useParams();


 console.log("param object",param)

const [walletAddress, setWalletAddress] = useContext(WalletAddressContext)

const [, setIsAddress] = useState(false)

let navigate = useNavigate()
  const walletConnect = async()=>{
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
      
          // Request account access if needed
          await window.ethereum.enable();
          // Acccounts now exposed
          const accounts = await web3.eth.getAccounts();
          console.log(accounts[0])
          setWalletAddress(accounts[0]);
          
        navigate("/sign-up")
      }
      
    } catch (error) {
      console.log(error)
    }
  }
  const signIn = async()=>{
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
      
          // Request account access if needed
          await window.ethereum.enable();
          // Acccounts now exposed
          const accounts = await web3.eth.getAccounts();
          console.log(accounts[0])
          setWalletAddress(accounts[0]);
          

          //verify address from the db using wallet address as the parameter
          const baseURL = 'http://176.58.122.154:8800' || "http://localhost:8800"
         
          const url = `${baseURL}/api/recruiter/getRecruiter?addr=${walletAddress}`
          const {data} = await axios.get(url)
         
          //if found
          if(data)
         
        navigate("/account")
        //else: {catch the error} user not found sign up for new user
      }
      
    } catch (error) {
      if(error.response.status === 400){
        console.log("user does not exists")
      }
    }
  }
useEffect(() => {
  if(walletAddress !== ""){
    setIsAddress(true)
  }
    setIsAddress(false)
 
}, [walletAddress])

 
  return (
    <>
    <div className="navbar-area">
            {/* Menu For Mobile Device */}
            <div className="mobile-nav">
              <Link to="/" className="logo">
                <img src="assets/img/logo.png" alt="logo" />
              </Link>
            </div>
            {/* Menu For Desktop Device */}
            <div className="main-nav">
              <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <Link className="navbar-brand" to="/">
                    <img src="assets/img/logo.png" alt="logo" />
                  </Link>
                  <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                      <li className="nav-item">
                      <Link to="/" className="nav-link">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="about-us" className="nav-link">About</Link>
                      </li>
                      <li className="nav-item">
                        <a href="link" className="nav-link dropdown-toggle">Jobs</a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/find-job" className="nav-link">Find A Job</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/post-job" className="nav-link">Post A Job</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/job-lists" className="nav-link">Job List</Link>
                          </li>
                         
                        </ul>
                      </li>                
                      <li className="nav-item">
                        <a href="link" className="nav-link dropdown-toggle">Talents</a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/talents" className="nav-link">Browse Talents</Link>
                          </li>
                    
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="link" className="nav-link dropdown-toggle">Companies</a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/companies" className="nav-link">Browse Companies</Link>
                          </li>
                         
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="link" className="nav-link dropdown-toggle">Blog</a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/blog" className="nav-link">Crypto News</Link>
                          </li>
                         
                        </ul>
                      </li>
                      <li className="nav-item">
                            <Link to="/contact-us" className="nav-link">Contact Us</Link>
                          </li>
                    </ul>
                    <div className="other-option">
                      <button  className="signup-btn" onClick={
                        ()=>walletConnect()
                        
                        }>Sign Up</button>
                      <button className="signin-btn"
                      onClick={
                        ()=>signIn()
                      }
                      >Sign In</button>
                    </div>
                    {/* {isAddress?<p>wallet address</p>:<p></p>} */}
                  </div>
                </nav>
              </div>
            </div>
          </div>
    </>
  )
}

export default TopBar