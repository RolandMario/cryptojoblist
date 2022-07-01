import { createContext, useReducer } from "react";
import Account from "../pages/accounts/Account";



export const ReducerContext = createContext();


let initialState ={
    isLoading: "",
    success: "",
    existed: "",
    failed: ""
  }

const candidiateReducer = (state, action)=>{
    switch (action.type) {
      case "authenticate":
        return{
            ...state,
            jobPosting: "",
            isLoading: "Authenticating User",
            success: "",
            failed: "",
            existed: ""
            
        };
    
    case "postJob":
      return{
          ...state,
          jobPosting: "persisting data into the database",
          isLoading: "",
          success: "",
          failed: "",
          existed: ""
          
      };
  
  case "succeeded":
    return{
        ...state,
        jobPosting: "",
        success: "Successful",
        isLoading: "",
        failed:"",
        existed: ""
    };

case "failure":
  return{
      ...state,
      jobPosting: "",
      success: "",
      isLoading: "",
      failed:" Error from the Server",
      existed: ""
  };

      default:
        return state;
    }
}
export const ReducerProvider =()=>{
    
    const [state, dispatch] = useReducer(candidiateReducer, initialState);
    return(
        
        <ReducerContext.Provider value={{state, dispatch}}>
            {/* {props.children} */}
          <Account />

        </ReducerContext.Provider>
    );

}

export const CandidiateAccount = ()=>{
    return <div>
        <ReducerProvider/>
    </div>;
}