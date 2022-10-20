import {useState,useRef} from "react"
import CustomInput from "./CustomInput"

function App(){
    const [value,setValue] =useState("red")
    const inputRef=useRef()

    return (
        <> 
            <CustomInput ref={inputRef} value={value} onChange={e=>setValue(e.target.value)} />
            <br />
            <button onClick={()=>inputRef.current.alertHi()}>Focus</button>
        
        </>
    )
}
export default App

/*
<button onClick={()=>inputRef.current.alertHi()}>Focus</button>
newValue for our ref is alertHi

*/