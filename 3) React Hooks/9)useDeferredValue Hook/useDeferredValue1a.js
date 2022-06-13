/*
import { useState } from "react";
import List from "./useDeferredValue1b"

function App(){
    const [input,setInput]=useState("")

    function handleChange(e){
        setInput(e.target.value)
    }

    return(
        <>
            <input type="text" value={input} onChange={handleChange}></input>
            <List input={input} />
        </>
    )
}

export default App

//Initially when we type into the text input box it takes a bit of time to render the character onto the screen
//Debounce:-When we type into the search box it will wait a hundred milli seconds till no key is pressed
//to show the suggestions tab in the search box extension
*/