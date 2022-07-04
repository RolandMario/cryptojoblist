


   export  let initialState ={
        isLoading: "",
        success: "",
        existed: "",
        failed: ""
      }
    
      export const recReducer = (state, action)=>{
          switch (action.type) {
            case "signup":{
              return{
                  ...state,
                  isLoading: "processing..., pls wait!",
                  success: "",
                  failed: "",
                  existed: ""
                  
              }
          }
          case "succeed":{
            return{
                ...state,
                success: "Done!",
                isLoading: "",
                failed: "",
                existed: ""
                
            }
        }
        case "exist":{
          return{
              ...state,
              success: "",
              isLoading: "",
              failed:"",
              existed: "Already registered"
          }
      }
      case "failure":{
        return{
            ...state,
            success: "",
            isLoading: "",
            failed:" Something went wrong, try again",
            existed: ""
        }
    }
            default:
              return state
          }
      }

    //   const [state, dispatch] = useReducer(signUpReducer, initialState)


