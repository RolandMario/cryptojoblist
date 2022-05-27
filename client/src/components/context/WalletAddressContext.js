import { createContext, useState } from "react";


export const WalletAddressContext = createContext();

export const WalletAddressProvider =(props)=>{
    
    const [walletAddress, setWalletAddress] = useState("");
    return(
        <WalletAddressContext.Provider value={[walletAddress, setWalletAddress]}>
            {props.children}
        </WalletAddressContext.Provider>
    );

}