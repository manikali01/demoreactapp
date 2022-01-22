import React from "react";
import Manik from "./Manik";
class User extends React.Component{
   constructor()
   {
     super();
     this.state = {
         firstName:"Manik",
         lastName: "Ali",
         show:true
     }
     //console.log("constructor")
   }
   componentDidMount(){
      // console.log("component did mount")
   }
   componentDidUpdate(){
      // console.log("component did update");
   }
   componentWillUnmount(){
      // console.log("component will unmount")
   }
   render(){ 
       //console.log("Render")
        return (
            <div>
                {
                    this.state.show ? <Manik/> : null
                }
                <button onClick={()=>{this.setState({show:!this.state.show})}}>toggle</button>
                
            </div>
        )
   }
}

export default User;