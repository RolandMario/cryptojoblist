import { createContext, useState } from "react";


export const PostDetailsContext = createContext();

export const PostDetailsProvider =(props)=>{
    
    const [post, setPost] = useState({});
    return(
        <PostDetailsContext.Provider value={[post, setPost]}>
            {props.children}
        </PostDetailsContext.Provider>
    );

}