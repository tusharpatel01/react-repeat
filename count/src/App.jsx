import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const increase=()=>{
  setCount(count+1);
  
  }
  const descrease=()=>{
    setCount(count-1);
}
  return (
    <>
   <h1 
   style={{
    fontFamily:"cursive",
    color:"white"
   }}
   >
    counter app
   </h1>
<div style={{
  display:"flex",
  flexDirection:"column",
  margin:"10px",
  gap:"10px",
  
}}>
  <button>
    counter {count}
  </button>
  <button onClick={increase}>
    
    {`increase `}
  </button>
  <button onClick={descrease}>
  {`  descrease `}
  </button>
</div>
    </>
  )
}

export default App
