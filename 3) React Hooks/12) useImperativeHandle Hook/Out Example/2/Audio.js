import React from "react"
import track1 from "./track1.mp3"

/*
const Audio=(props,ref)=>{
    return (
        <audio src={track1} ref={audioRef} />
    )
}

export default React.forwardRef(Audio)
*/


const Audio=(props,ref)=>{
    return (
        <audio src={track1} ref={ref} />
    )
}

export default React.forwardRef(Audio)


/*
forwardRef allows us to pass another argument ref
(props) becomes (props,ref)

*/
