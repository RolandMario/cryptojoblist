import React, {useState, useContext, useEffect} from 'react'
import { WalletAddressContext } from '../../context/WalletAddressContext'
import axios from 'axios'

import { useNavigate } from 'react-router-dom'

const LoginOption = () => {

    let navigate = useNavigate()
    const [walletAddress, ] = useContext(WalletAddressContext)
    const [loginAs, setLoginAs] = useState("")

    const login = async()=>{
        
        if(loginAs ===  "Recruiter"){
            const url = `${process.env.REACT_APP_API_URL}/server/getRecruiter?addr=${walletAddress}`
            try {
                const {data} = await axios.get(url)
            if(data){
                 navigate("/recruiter-account")
                     }
            } catch (error) {
                console.log(error)
            }
            
        }else if(loginAs === "Candidiate"){
            const url = `${process.env.REACT_APP_API_URL}/server/getCandidiateByQuery?addr=${walletAddress}`
            try {
                const {data} = await axios.get(url)
                if(data){
                    navigate("/account")
                        }
            } catch (error) {
                
            }
            
        } 



    }

    useEffect(() => {
        if(loginAs !=="")
      login()
    // eslint-disable-next-line
    }, [loginAs])
    
  return (
    <>
     {/* Job Info Section Start */}
     <div className="job-info-two pt-100 pb-70">
             <div className="container">
               <div className="row">
                 <div className="col-md-6">
                   <div className="looking-job">
                     <div className="media">
                       <i className="flaticon-group align-self-start mr-3" />
                       <div className="media-body">
                         <h5 className="mt-0">Login as a Candidiate</h5>
                         <p>Your next role could be with one of these top leading organizations</p>
                         <button onClick={()=>setLoginAs("Candidiate")}>
                           LOGIN NOW
                          
                         </button>
                       </div>
                     </div>
                   </div>
                 </div>
                 <div className="col-md-6">
                   <div className="recruiting-card">
                     <div className="media">
                       <i className="flaticon-resume align-self-start mr-3" />
                       <div className="media-body">
                         <h5 className="mt-0">Login as a Recruiter?</h5>
                         <p>Your next role could be with one of these top leading organizations</p>
                         <button onClick={()=>setLoginAs("Recruiter")}>
                            LOGIN NOW
                           
                         </button>
                       </div>
                     </div>
                   </div>  
                 </div>
               </div>
             </div>
           </div>
           {/* Job Info Section End */}
    </>
  )
}

export default LoginOption