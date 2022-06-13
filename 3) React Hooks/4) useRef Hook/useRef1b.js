/*
import React,{useState,useEffect,useRef} from 'react'

export default function App(){
    const [name,setName]=useState('')
    const renderCount=useRef(0)
    //useRef actually returns an object which has one property {current:0}


useEffect(()=>{
    renderCount.current=renderCount.current+1              
})                                                                  

return(
    <>
        <input value={name} onChange={e=>setName(e.target.value)}/>
        <div>My name is {name}</div>
        <div>I rendered {renderCount.current} times</div>
    </>
    )
}
//This is the correct way of doing it.
*/
