import React from "react";

class Student extends React.Component {
   constructor(){
       super();
       this.state = {
           name:"Manik Ali"
       }
   }
  changeName(){
      this.setState({
          name: "Nayeb Ali"
      })
  }
   render(){
      
        return (
            <div style={{background:'red',padding:'20px'}}>
                <h1>Name: {this.state.name}</h1>
                <p>Email: {this.props.email}</p>
                <button onClick={()=>{this.changeName()}}>Click to Update Name</button>
            </div>
        )
   }
}

export default Student;