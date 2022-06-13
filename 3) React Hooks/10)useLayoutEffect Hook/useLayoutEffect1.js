/*
import React,{useState,useEffect} from 'react'

function App(){
    const [count,setCount] =useState(0)

    useEffect(()=>{
        console.log(count)
    },[count])

    return(
        <>
            <button onClick={()=>setCount(c=>c+1)}>Increment</button>
            <div>{count}</div>
        </>
    )
}

export default App

//The difference between useEffect and useLayoutEffect is useEffect is asynchronous while useEffect is synchronous
//In useEffect the function in the useEffect hook is run async
/*useEffect(()=>{
    console.log(count)
},[count])
*/

