/*
//This example is for referential equality
import React,{useState,useMemo,useEffect} from 'react';

function App(){
  const [number,setNumber]=useState(0)
  const [dark,setDark]=useState(false)
  const doubleNumber=useMemo(()=>{
      return slowFunction(number)
  },[number])                       
  const themeStyles=useMemo(()=>{       //This(useMemo) checks if this themestyles object ref is same as prev themestyles object reference
      return {
        backgroundColor:dark?'black':'white',
        color:dark?'white':'black'
      }
  },[dark])                     //Now when we change our number Theme is changed is not console.logged but only when we change theme 
//It is printed
  useEffect(()=>{
      console.log('Theme is changed')       
  },[themeStyles])                          

  return(
    <>
      <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))} />
      <button onClick={()=>setDark(prevDark=>!prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(num){
  console.log('Calling Slow Function')
  for(let i=0;i<=10000000;i++){}
  return num*2
}
  
export default App;
