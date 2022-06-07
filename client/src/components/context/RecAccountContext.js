import { createContext, useState } from "react";


export const RecAccountContext = createContext();

export const RecAccountProvider =(props)=>{
    
    const [recAccountData, setRecAccountData] = useState('RecDashboard');
    return(
        <RecAccountContext.Provider value={[recAccountData, setRecAccountData]}>
            {props.children}
        </RecAccountContext.Provider>
    );

}