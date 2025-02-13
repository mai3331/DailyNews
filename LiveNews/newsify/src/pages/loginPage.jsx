import { SignIn } from "@clerk/clerk-react";
import React from "react";

const Login=()=>{


    return(
        <>
        <div className="d-flex align-items-center justify-content-center"style={{ height: 'calc(100vh - 80px)' }}>
             <SignIn signUpUrl="/signUp"/>

        </div>
       
       
        
        </>
    )
}
export default Login