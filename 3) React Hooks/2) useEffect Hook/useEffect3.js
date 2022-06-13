/*
import React,{useState,useEffect} from 'react';


function App(){
  const [windowWidth,setWindowWidth]  =useState(window.innerWidth)

  return(
    <div>{windowWidth}</div>                      //Now the new window width will be console.logged only if it is refreshed
  )
}
  
export default App;


//
//
import React,{useState,useEffect} from 'react';
function App(){
  const [windowWidth,setWindowWidth]  =useState(window.innerWidth)

  const handleResize=()=>{
    setWindowWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',handleResize)      //The frontend dispalys the current window size without refreshing
  },[])

  return(
    <div>{windowWidth}</div>                      
  )
}
  
export default App;


//
//
import React,{useState,useEffect} from 'react';


function App(){
  const [windowWidth,setWindowWidth]  =useState(window.innerWidth)

  const handleResize=()=>{
    setWindowWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',handleResize)

    return()=>{
        window.removeEventListener('resize',handleResize)       //This removes the event listener added
    }
  },[])

  return(
    <div>{windowWidth}</div>                      
  )
}
  
export default App;
//The return statement is the cleanup for the function executed earlier
//Actually the return statement is executed first in useEffect Hook so that 
//1)we can remove an event listener
//2)we can unsubscribe from an API subscribed in the functioon earlier
*/