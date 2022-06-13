import React,{ useContext } from "react"
import { CounterContext } from "./CounterContext"

function FComponent({counter}){             /*We exported props as counter*/
    const value=useContext(CounterContext)          /*Pass the name of the context*/
    return(
        <div>
            <h1>Function Component</h1>
            <h2>{counter}</h2>
            <h2>{value}</h2>
            <Fchild counter={counter}/>
        </div>
    )
}

const Fchild=({counter})=>{
    const value=useContext(CounterContext)          /*Pass the name of the context This is to use it in the child Component*/
    return(
        <div>
            <h1>Function Child Component</h1>
            <h2>{counter}</h2>
            <h2>{value}</h2>
            <h2>This is a function child component</h2>
        </div>
    )
}

export default FComponent   