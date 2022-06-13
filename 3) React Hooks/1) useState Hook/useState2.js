/*
import React,{useState} from 'react';

function App(){
  const [count,setCount]=useState(()=>{
    console.log("Run Function")                 //This arrow function is run only once and 10 is the default value
    return 10
  })

  function decrementCount(){
    setCount(prevCount=>prevCount-1)
  }

  function incrementCount(){
    setCount(prevCount=>prevCount+1)
  }

  return(
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App;





import React,{useState} from 'react';

function countInitial(){
  console.log("Run Function")
  return 10
}

function App(){
  const [count,setCount]=useState(countInitial())     //This way the function runs eveytime we we click either buttons i.e change state

  function decrementCount(){
    setCount(prevCount=>prevCount-1)
  }

  function incrementCount(){
    setCount(prevCount=>prevCount+1)
  }

  return(
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}


export default App;



import React,{useState} from 'react';

function countInitial(){
  console.log("Run Function")
  return 10
}

function App(){
  const [count,setCount]=useState(()=>countInitial())     //This arrow function is run only once and 10 is the default value

  function decrementCount(){
    setCount(prevCount=>prevCount-1)
  }

  function incrementCount(){
    setCount(prevCount=>prevCount+1)
  }

  return(
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}


export default App;
*/