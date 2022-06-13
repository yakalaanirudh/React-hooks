/*
import React,{useState,useMemo} from 'react';

function App(){
  const [number,setNumber]=useState(0)
  const [dark,setDark]=useState(false)
  const doubleNumber=useMemo(()=>{
      return slowFunction(number)
  },[number])                       //We are telling run this function only when the number gets changed
  const themeStyles={
    backgroundColor:dark?'black':'white',
    color:dark?'white':'black'
  }

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
