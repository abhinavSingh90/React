import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black  p-4
      rounded-2xl mb-4'>this is Abhinav</h1>

      <Card username="abhinav" bt="click"/>
      <Card username="gaurav" />

    </>
  )
}

export default App
