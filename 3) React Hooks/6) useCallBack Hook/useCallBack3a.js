/*
import React,{useState} from 'react'
import List from './List.js'

function App(){
    const [number,setNumber]=useState(1)
    const [dark,setDark]=useState(false)

    const getItems= useCallBack((incrementor)=>{                        
        return [number,number+incrementor,number+incrementor]       
    },[number])

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
