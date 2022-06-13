/*
import React,{useLayoutEffect,useEffect,useState,useRef} from "react"

export default function App(){
    const [show,setShow]=useState(false)
    const popup=useRef()
    const button=useRef()
    useLayoutEffect(()=>{
        if(popup.current==null||button.current==null)return
        const {bottom} =button.current.getBoundingClientReact()
        popup.current.style.top=`${bottom + 25}px`
    },[show])

    return(
        <>
            <button ref={button} onClick={()=>setShow(prev=>!prev)}>Click Here</button>
            {show &&(
                <div style={{position:"absolute"}} ref={popup}>This is a Popup</div>
            )}
        </>
    )
}

//Here unlike in useEffect the popup appears immediately because the function useLayoutEffect runs synchronously
//We use useLayoutEffect when we need to manipulate DOM elements after they are rendered to the screen
//because they have to run in a orderedway, wecant rearrange without they first appearing right
*/