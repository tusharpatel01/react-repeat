import { useCallback, useEffect, useState } from 'react'



function App() {
  const [length, setlength] = useState(6)
  const [numberallowed, setnumbreallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")
  const passwordgenerator = useCallback(() => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) {
      string += "0123456789"
    }
    if (charallowed) {
      string += "!@#$%^&*(){}"
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char)

    }
    setpassword(pass)

  }, [length, numberallowed, charallowed, setpassword])

  useEffect(() => {
    passwordgenerator()
  }, [length, charallowed, numberallowed, passwordgenerator]
  )

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md py-3 rounded-lg px-4 my-8 text-orange-500 bg-gray-800 text-center'>
        <h1 className='text-white text-center my-3'> Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
          />
          <button className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0'>
            copy
          </button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label>length:{length}</label>

          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberallowed}
              id='numberinput'
              onChange={() => {
                setnumbreallowed((prev) => !prev);
              }}
            />
            <label>numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charallowed}
              id='charinput'
              onChange={() => {
                setcharallowed((prev) => !prev);
              }}
            />
            <label>characters</label>
          </div>

        </div>


      </div>
    </>
  )
}

export default App
