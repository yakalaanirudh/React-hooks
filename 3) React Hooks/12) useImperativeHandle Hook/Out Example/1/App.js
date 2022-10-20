import React,{ useEffect,useRef} from "react"
import "./App.css"
import track1 from "./track1.mp3"

function App(){
    const AudioRef=useRef(null)

    useEffect(()=>{
        audioRef.current.play()
    },[])

    const handleClick=()=>{
        audioRef.current.pause()
    }

    return(
        <div>
            <audio src={track1} ref={audioRef} />
            <button onClick={handleClick}>Stop Playback</button>
        </div>
    )
}

export default App;

//useRef hook allows us to get access to a DOM node in this case a audio tag
//Ref forwarding is used to pass a ref from a parent component to a child component