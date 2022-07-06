import Web3 from 'web3'

export const  startPayment = async (account, amount) => { // new line
    
   // //console.log({amount, destinationAddress});
  const destinationAddress = '0x45a36a8e118c37e4c47ef4ab827a7c9e579e11e2'
  let receiptStatus;
 
 try {
 
   
    const web3 = new Web3(window.ethereum);
         let tokens = web3.utils.toWei(amount.toString(), 'ether')
         
          const transactionResponse = await web3.eth.sendTransaction({
           from: web3.utils.toChecksumAddress(account),
           to: destinationAddress,
           value: web3.utils.toBN(tokens)
    
          })
    
 
      console.log("Transaction Response", transactionResponse)
      receiptStatus = transactionResponse.status
      console.log('receipt status', receiptStatus)
 
   } catch (error) {
 
     console.log({error});
 
   }
   if(receiptStatus === true){
     
   
         }        
    
   }