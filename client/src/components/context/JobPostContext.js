import { createContext, useState } from "react";


export const JobPostContext = createContext();

export const JobPostProvider =(props)=>{
    
    const [jobPostData, setJobPostData] = useState([]);
    return(
        <JobPostContext.Provider value={[jobPostData, setJobPostData]}>
            {props.children}
        </JobPostContext.Provider>
    );

}