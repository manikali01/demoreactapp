import React, {useState} from "react";
function FormValidation() {
    const [user,setUser] = useState("");
    const [password,setPassword] = useState("");
    const [userError,setUserError] = useState(false);
    const [passError,setPassError] = useState(false);
    function loginHangle(e){
       e.preventDefault();
        if(!userError && ! passError && !user.length == 0 && !password.length ==0){
            alert("you have no error")
        }else{
            alert("you have arror cant submit")
        }
    }
    function userHandler(e){
       let item = e.target.value;
       if(item.length < 3){
           setUserError(true);
       }else
       {
           setUserError(false);
           setUser(item)
       }
    }
    function passwordHanler(e){
       let passField = e.target.value;
       if(passField.length < 3){
           setPassError(true);
       }else{
           setPassError(false);
           setPassword(passField);
       }
    }
    return (
        <div>
           <h1>Login</h1>
           <form onSubmit={loginHangle}>
               <input type="text" onChange={userHandler} placeholder="Enter User Id"/><br/>{userError ? <span>User errr</span> : ""}<br/><br/>
               <input type="password" onChange={passwordHanler} placeholder="Enter Password"/><br/>{passError ? <span>Pass Error</span>:""}<br/><br/>
               <button type="submit">Login</button>
           </form>
        </div>
    )

}

export default FormValidation;