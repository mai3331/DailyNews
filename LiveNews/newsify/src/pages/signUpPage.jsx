import { SignUp } from "@clerk/clerk-react";
import React from "react";


const Signup=()=>{


    return(
        <>
           <div className="d-flex align-items-center justify-content-center"style={{ height: 'calc(100vh - 80px)' }}>
             <SignUp signInUrl="/login"/>

        </div>
      
        </>
    )
}
export default Signup