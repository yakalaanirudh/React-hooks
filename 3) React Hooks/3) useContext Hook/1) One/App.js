import React,{ useState } from "react"
import CComponent from './CComponent'
import FComponent from './FComponent'

export default function App(){
    const [counter,setCounter]=useState(0)

    const increment=()=>{
        setCounter(counter+1)
    }

    const decrement=()=>{
        setCounter(counter-1)
    }

    return(
        <>
            <div>
                <h1>App Component</h1>
                <h2>{counter}</h2>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <FComponent counter={counter} />            
                <CComponent counter={counter}/>
            </div>
        </>
    )
}
