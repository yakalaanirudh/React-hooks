import {useState,useRef} from "react"
import CustomInput from "./CustomInput"

function App(){
    const [value,setValue] =useState("red")
    const inputRef=useRef()

    return (
        <> 
            <CustomInput ref={inputRef} value={value} onChange={e=>setValue(e.target.value)} />
            <br />
            <button onClick={()=>inputRef.current.focus()}>Focus</button>
        
        </>
    )
}
export default App

/*
<CustomInput ref={inputRef} value={value} onChange={e=>setValue(e.target.value)} />
The input field is not focussed

but if it is
<input ref={inputRef} value={value} onChange={e=>setValue(e.target.value)} />
The input field is focussed

It is because we cant give function componenets refs. For this we need to use forwardRef

*/

/*
The useImperativeHandle Hook allows us to expose a value, state, or function inside a child component to the parent component. 
*/
