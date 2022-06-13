//useReducer hook is similar to useState hook except it can handle comple states better
import React,{ useState } from 'react'

function App(){
    const [counter,setCounter]=useState(0)

    const increment=()=>{
        setCounter(counter+1)
    }
    const decrement=()=>{
        setCounter(counter-1)
    }

    return(
        <div>
            <h1>useReducer Hook</h1>
            <h2>{counter}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default App