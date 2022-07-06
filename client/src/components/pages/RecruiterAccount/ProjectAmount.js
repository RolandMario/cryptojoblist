import React, {useContext, useState} from 'react'
import { WalletAddressContext } from '../../context/WalletAddressContext'
import { startPayment } from './LockedPayment'
import { useNavigate } from 'react-router-dom'

const ProjectAmount = () => {
    let navigate = useNavigate()

    const[walletAddress, ] = useContext(WalletAddressContext)

    const [amount, setAmount] = useState(0)
    const handlePayment = async(e)=>{
        e.preventDefault()
        await startPayment(walletAddress, amount)
    }
    
   
    console.log(amount)
  return (
    <>
    <div className="signup-section ptb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-3">
                  <form  className="signup-form">                
                    <div className="form-group">
                      <label>Enter Project Amount</label>
                      <input type="number"  value={amount} onChange={e => setAmount(e.currentTarget.value)} className="form-control" placeholder="5.0 bnb" required />
                    </div>
                    <div className="signup-btn text-center">
                      <button onClick={handlePayment}>Continue</button>
                      <button onClick={()=>navigate("/")}>Terminate</button>
                    </div>  
                  </form>
                </div>  
              </div>
            </div>
          </div>
        
    </> 
  )
}

export default ProjectAmount