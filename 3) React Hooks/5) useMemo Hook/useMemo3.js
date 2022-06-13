/*
//This example is for referential equality
import React,{useState,useMemo,useEffect} from 'react';

function App(){
  const [number,setNumber]=useState(0)
  const [dark,setDark]=useState(false)
  const doubleNumber=useMemo(()=>{
      return slowFunction(number)
  },[number])                       
  const themeStyles={
    backgroundColor:dark?'black':'white',
    color:dark?'white':'black'
  }

  useEffect(()=>{
      console.log('Theme is changed')       //This is console.logged everytime when we change theme but we observe it is console.logged
  },[themeStyles])                          //eveytime we enter new number too because everytime     we run the functio
//A new thestyles object is created whose reference is different from the previous themestyles object.
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
