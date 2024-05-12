import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(1)
  // let counter=1
  const addValue =()=>{
    console.log('clicked',counter);
    counter=counter+1;
    setCounter(counter);
  }
  return (
    <>

    
      <h1>this is abhinav</h1>
      <p>counter is :{counter}</p>
      <button onClick={addValue}>click me!!</button>
      <br/>
      {/* <button onClick={removeValue}>clickkk me!!!!</button> */}
    </>
  )
}

export default App
