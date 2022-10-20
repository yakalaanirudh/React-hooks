import {useState,useRef} from "react"
import ConfirmationModal from "./ConfirmationModal"

function App(){
    const [open,setOpen]=useState(false)
    const modalRef=useRef()

    return(
        <>
            <button onClick={()=>setOpen(true)}>Open</button>
            <button>Focus Close</button>
            <button>Focus Confirm</button>
            <button>Focus Deny</button>
            <ConfirmationModal ref={modalRef} isOpen={open} onclose={()=>setOpen(false)} />
        </>
    )
}

export default App