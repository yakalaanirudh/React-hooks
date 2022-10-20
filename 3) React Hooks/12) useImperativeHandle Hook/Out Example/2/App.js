import React,{ useEffect,useRef} from "react"
import "./App.css"
import Audio from "./Audio"

function App(){
    
    const AudioRef=useRef(null)

    useEffect(()=>{
        AudioRef.current.play()
    },[])

    const handleClick=()=>{
        AudioRef.current.pause()
    }
    
    return(
        <div>
            {/*
            <button onClick={handleClick}>Stop Playback</button>*/}
            <Audio ref={AudioRef}/>
        </div>
    )
}

export default App;
