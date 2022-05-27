import { createContext, useState } from "react";


export const AccountContext = createContext();

export const AccountProvider =(props)=>{
    
    const [accountData, setAccountData] = useState('Profile');
    return(
        <AccountContext.Provider value={[accountData, setAccountData]}>
            {props.children}
        </AccountContext.Provider>
    );

}