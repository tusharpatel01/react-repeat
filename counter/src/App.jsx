import { useState } from 'react'


function App() {
let [counter,setcounter]=useState(0)

  // let counter=50
  const addvalue=()=>{
  // counter=counter+1;
  // counter=counter+1;
  setcounter(counter+1);
  // console.log(counter);
   }
  const minusvalue=()=>{
    setcounter(counter-1);
  }

  const [count, setCount] = useState(0)

  return (
    
    <>
      <h1 className=' bg-blue-500'>The counter App</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addvalue}>increase</button>
      <br />
      <button onClick={minusvalue}>descrease</button>
    </>
  )
}

export default App
