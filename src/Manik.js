import React from "react";
class Manik extends React.Component{
   constructor(){
       super();
   }
   componentWillUnmount(){
       console.log("component will unmount")
   }
    render(){
        return(
            <div>
               <h3>Name: Manik Ali</h3>
            </div>
        )
    }
}

export default Manik;