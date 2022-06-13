/*
import {useState,useTransition} from 'react'

function App(){
    const [input,setInput] =useState("")
    const [list,setList]=useState([])

    const LIST_SIZE=20000

    function handleChange(e){
        setInput(e.target.value)
        const l=[]
        for(let i=0;i<LIST_SIZE;i++){    //This loop takes  alot of time
            l.push(e.target.value)
        }
        setList(l)
    }

    return(
        <>
            <input type="text" value={input} onChange={handleChange}/>
            {list.map((item,index)=>{
                return<div key={index}>{item}</div>
            })}
        </>
    )
}

//Initially when we type in the text input it is slow because the loop has to run 20000 times
//and print the list and print the value in the text box
//We can split this task into two tasks
//the appearance of the text in teh text box is of primary importance
//The rendering of the list components can take secondary importance
*/