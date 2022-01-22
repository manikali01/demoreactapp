
import './App.css';
import React, { useState } from 'react';
function App() {
   React.useEffect(()=>{
    
   });
    const [count,setCount] = useState(0);
   return (
      <div className='App'>
         <h1>useEffect in React</h1>{count}<br></br>
         <button onClick={()=>{setCount(count + 1)}}>Update Counter</button>
      </div>
   )

}

export default App;
