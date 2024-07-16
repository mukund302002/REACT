import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'






function App() {

  let [counter,setCounter] = useState(15)



  const addValue = () => {
    if(counter>=20)
    {
      counter=20
    }
    else{
      counter=counter+1
    }

    setCounter(counter)
  }

  const decValue = () => {
    if(counter<=0)
      {
        counter=0
      }
      else{
        counter=counter-1
      }
    setCounter(counter)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value is {counter}</h2>
      <button
      onClick={addValue}>
        Add value
      </button>
      <br />
      <button
      onClick={decValue}>
        Decrease value
      </button>
    </>
  )
}

export default App
