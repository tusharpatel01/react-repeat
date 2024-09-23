import { useState } from 'react'


function App() {
let [counter,setcounter]=useState(50)

  // let counter=50
  const addvalue=()=>{
  // counter=counter+1;
  counter=counter+1;
  setcounter(counter)
  // console.log(counter);
   }
  const minusvalue=()=>{
    setcounter(counter-1);
  }

  const [count, setCount] = useState(0)

  return (
    
    <>
      <h1>tushar patel</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addvalue}>increase</button>
      <br />
      <button onClick={minusvalue}>descrease</button>
    </>
  )
}

export default App
