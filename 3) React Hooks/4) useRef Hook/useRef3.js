/*
import React,{useState,useRef} from 'react';


function App(){
  const [name,setName]=useState('')
  const inputRef=useRef()

  function target(){
    inputRef.current.focus()          //Now the input tag will be highlighted       
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