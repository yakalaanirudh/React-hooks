/*
import React,{useState,useEffect} from 'react'

function App(){
    const [count,setCount] =useState(0)

    useLayoutEffect(()=>{
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

//useLayoutEffect is perfect for doing things which should be done in a ordered way since it is synchronous
//Like moving dom elements as it needs to be done after the elements are rendered
*/