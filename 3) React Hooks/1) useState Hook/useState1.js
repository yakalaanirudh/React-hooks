/*
import React,{useState} from 'react';

function App(){
  const [count,setCount]=useState(10)            //[currentState,function that will allow us to update the current state]  =useState(default value)

  function decrementCount(){
    setCount(count-1)                           //setCount:-same name as second element of the usestate array
  }

  function incrementCount(){
    setCount(count+1)
  }

  return(
    <>
      <button onclick={decrementCount}>-</button>
      <span>{count}</span>
      <button onclick={incrementCount}>+</button>
    </>
  )
}


export default App;

function decrementCount(){
    setCount(count-1)           //We dont use this because the last setCount(count-1) overwrites the earlier two setCount(count-1)
    setCount(count-1)           //So the count is chnaged by one only.
    setCount(count-1)           //The sequence will be 0,-1,-2,-3 though they are three statements
}


function decrementCount(){
    setCount(prevCount=>prevCount+1)        //In this version the count will be decreases by 3 for every click
    setCount(prevCount=>prevCount+1)        //The sequence will be 0,-3,-6,-9
    setCount(prevCount=>prevCount+1)
}

*/