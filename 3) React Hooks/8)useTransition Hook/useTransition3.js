/*
import {useState,useTransition} from 'react'

function App(){
    const[isPending,startTransition]=useTransition()
    const [input,setInput] =useState("")
    const [list,setList]=useState([])

    const LIST_SIZE=20000

    function handleChange(e){
        setInput(e.target.value)
        startTransition(()=>{                //The code in startTransition is low priority
            const l=[]
            for(let i=0;i<LIST_SIZE;i++){    //This loop takes  alot of time
                l.push(e.target.value)
        }
        setList(l)
        })
        
    }

    return(
        <>
            <input type="text" value={input} onChange={handleChange}/>
            {isPending 
                ?"Loading..."                               //This will be printed when th eitems are still to be rendered to DOM
                :list.map((item,index)=>{                                       
                return<div key={index}>{item}</div>
            })}
        </>
    )
}

//Now when we type a character into the textbox it shows up immediately
//Then the 20000 items below the input show because it is low priority
*/
