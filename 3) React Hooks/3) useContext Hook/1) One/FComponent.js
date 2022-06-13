import React from "react"

function FComponent({counter}){             /*We exported props as counter*/
    return(
        <div>
            <h1>Function Component</h1>
            <h2>{counter}</h2>
            <Fchild counter={counter}/>
        </div>
    )
}

const Fchild=({counter})=>{
    return(
        <div>
            <h1>Function Child Component</h1>
            <h2>{counter}</h2>
            <h2>This is a function child component</h2>
        </div>
    )
}

export default FComponent   