import { createContext, useState } from "react";


export const SignInContext = createContext();

export const SignInProvider =(props)=>{
    
    const [isSignIn, setIsSignIn] = useState(false);
    return(
        <SignInContext.Provider value={[isSignIn, setIsSignIn]}>
            {props.children}
        </SignInContext.Provider>
    );

}