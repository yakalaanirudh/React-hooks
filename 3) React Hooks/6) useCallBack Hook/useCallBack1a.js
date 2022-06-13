/*
import React,{useState} from 'react'
import List from './List.js'

function App(){
    const [number,setNumber]=useState(1)
    const [dark,setDark]=useState(false)

    const getItems=()=>{                        //This array is recreated everytime we change state so that statement is console.logged
        return [number,number+1,number+2]       //everytime we change not only the number but also theme too
    }

    const theme={
        backgroundColor:dark?'#333':'#FFF',
        color:dark?'#FFF':'#333'
    }


    return(
        <div style={theme}>
            <input type='number' value={number} onChange={e=>setNumber(parseInt(e.target.value))} />
            <button onClick={()=>setDark(prevDark=>!prevDark)}>Toggle Theme</button>
            <List getItems={getItems} />
        </div>
    )
}
*/
