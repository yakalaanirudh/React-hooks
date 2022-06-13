//useReducer hook is similar to useState hook except it can handle comple states better
import React,{ useState,useReducer } from 'react'

const initialState=0

function reducer(state,action){
    switch(action.type){
        case "increment":
            return state+1
        case "decrement":
            return state-1
        default:
            throw new Error()
    }
}

function App(){
    const [counter,setCounter]=useState(0)
    const [state,dispatch]=useReducer(reducer,initialState)           //It takes two parameters First is reducer function 
    //which is going to take the state and action and based on action it is going to change the state
    //Second parameter is the initial value of the state


    return(
        <div>
            <h1>useReducer Hook</h1>
            <h2>{state}</h2>
            <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        </div>
    )
}

export default App