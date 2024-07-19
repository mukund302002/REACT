import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards' 

function App() {
  const [count, setCount] = useState(0)
  
  let myObj={
    username: 'mukund',
    age:21
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Cards username='mukund agarwalla' button="hit me"/>
      <Cards username='not mukund' button="click me"/>
    </>
  )
}

export default App
