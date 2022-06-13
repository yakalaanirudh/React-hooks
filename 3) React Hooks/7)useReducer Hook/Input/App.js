import React,{useState} from 'react'

const ReducerTutorial=()=>{
    const [count,setCount]=useState(0)
    const [showText,setShowText]=useState(true)

    return(
        <div>
            <h1>{count}</h1>
            <button
                onClick={()=>{
                    setCount(count+1)
                    setShowText(!showText)
            }}
            >Click Here</button>
            {showText &&<p>This is a text</p>}
            
        </div>
    )
}

export default ReducerTutorial

/*
useReducer Hook is an alternative or replacement for the useState Hook
useReducer Hook enables us to update multiple states simultaneously
*/