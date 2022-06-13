/*
import React,{useState} from 'react';


function App(){
  const [state,setState]=useState({count:4,theme:'blue'})     
  const count=state.count
  const theme=state.theme


  function decrementCount(){  
    setState(prevState=>{
      return {count:prevState.count-1}
    })
  }

  function incrementCount(){
    //setCount(prevCount=>prevCount+1)
  }

  return(
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}


export default App;


//The Output is 
//4blue
//3
//2
//1
//Beacuse useState overwrites the previous state completely



import React,{useState} from 'react';


function App(){
  const [state,setState]=useState({count:4,theme:'blue'})     
  const count=state.count
  const theme=state.theme


  function decrementCount(){  
    setState(prevState=>{
      return {...prevState,count:prevState.count-1}       //...prevState does is it copies all previous state values
    })                                                    //Then the syntax after comma updates the part we want to modify
  }

  function incrementCount(){
    //setCount(prevCount=>prevCount+1)
  }

  return(
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}


export default App;


//The Output is 
//4blue
//3blue
//2blue
//1blue
//Beacuse useState overwrites the previous state of count.





import React,{useState} from 'react';


function App(){
  const [count,setCount]=useState(4)
  const [theme,setTheme]=useState('blue')    
  


  function decrementCount(){  
    setCount(prevCount=>prevCount-1)
  }

  function incrementCount(){
    //setCount(prevCount=>prevCount+1)
  }

  return(
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}


export default App;


//The Output is 
//4blue
//3blue
//2blue
//1blue
//Beacuse we seperated the count and theme states and we are updating only count state





import React,{useState} from 'react';


function App(){
  const [count,setCount]=useState(4)
  const [theme,setTheme]=useState('blue')    
  


  function decrementCount(){  
    setCount(prevCount=>prevCount-1)
    setTheme('red')
  }

  function incrementCount(){
    setCount(prevCount=>prevCount+1)
    setTheme('red')
  }

  return(
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  )
}


export default App;



//The Output is
//7red
//6red
//5red
//4blue
//3red
//2red
//1red
//Beacuse we seperated the count and theme states and we are updating only count state
*/

