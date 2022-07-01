import React, { useContext } from 'react'
import axios from 'axios'
import { WalletAddressContext } from '../../context/WalletAddressContext'
import { useNavigate } from 'react-router-dom'
import Web3 from 'web3'
const OptionLogin = () => {

    let navigate = useNavigate()

    const [walletAddress, setWalletAddress] = useContext(WalletAddressContext)
    
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
              
           
          }
          
        } catch (error) {
          console.log(error)
        }
      }
    const login = async(who)=>{
        walletConnect()
        if(who ===  "Recruiter"){
            const url = `${process.env.REACT_APP_API_URL}/server/getRecruiter?addr=${walletAddress}`
            try {
                const {data} = await axios.get(url)
            if(data){
                 navigate("/recruiter-account")
                     }
            } catch (error) {
                console.log(error)
            }
            
        }else if(who === "Candidiate"){
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
                         <button onClick={()=>login("Candidiate")}>
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
                         <button onClick={()=>login("Recruiter")}>
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

export default OptionLogin