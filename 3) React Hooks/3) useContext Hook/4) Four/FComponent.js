import React,{ useContext } from "react"
import { CounterContext } from "./CounterContext"

function FComponent(){             /*We exported props as counter*/
    const {counter,setCounter}=useContext(CounterContext)          /*Pass the name of the context*/
    return(
        <div>
            <h1>Function Component</h1>
            <h2>{counter}</h2>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
            <button onClick={()=>setCounter(counter-1)}>Decrement</button>
            <Fchild counter={counter}/>
        </div>
    )
}

const Fchild=()=>{
    const {counter,setCounter}=useContext(CounterContext)          /*Pass the name of the context This is to use it in the child Component*/
    return(
        <div>
            <h1>Function Child Component</h1>
            <h2>{counter}</h2>
            <button onClick={()=>setCounter(counter+1)}>Increment</button>
            <button onClick={()=>setCounter(counter-1)}>Decrement</button>
            <h2>This is a function child component</h2>
        </div>
    )
}

export default FComponent   