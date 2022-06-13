/*
import React,{useState,useEffect} from 'react'

export default function App(){
    const [name,setName]=useState('')
    const [renderCount,setRenderCount]=useState(0)


useEffect(()=>{
    setRenderCount(prevRenderCount=>prevRenderCount+1)              //This rerenders first causing it to re render again 
})                                                                  //which causes it to rerender again,forming an infinite loop.

return(
    <>
        <input value={name} onChange={e=>setName(e.target.value)}/>
        <div>My name is {name}</div>
        <div>I rendered {renderCount} times</div>
    </>
    )
}

//A huge drawback of this is when we update the state we cause the app to re-render
*/