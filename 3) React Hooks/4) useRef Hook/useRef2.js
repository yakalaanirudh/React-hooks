/*
import React,{useState,useEffect} from 'react';


function App(){
  const [name,setName]=useState('')
  const inputRef=useRef()

  function target(){
    console.log(inputRef.current)                 //Initially it console.logs the input tag  //Like when we console.log id in JS
  }

  return(
    <>
      <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)}/>
      <div>My name is {name}</div>
      <button onClick={target}>Focus</button>
    </>
  )
}
  
export default App;
*/