/*
import React,{useLayoutEffect,useEffect,useState,useRef} from "react"

export default function App(){
    const [show,setShow]=useState(false)
    const popup=useRef()
    const button=useRef()
    useEffect(()=>{
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


//We can observe that the popup like modal got displayed on DOM immediately then it got repositione din accordance to the 
//positional definition in useEffect
//popup.current.style.top=`${bottom + 25}px`
//If we comment out the above line useEffect runs almost immediately
*/