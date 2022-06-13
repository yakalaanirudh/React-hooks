/*
import {useMemo} from 'react'

function List({input}){
    const LIST_SIZE=20000
    const list=useMemo(()=>{
        const l=[]
        for(let i=0;i<LIST_SIZE;i++){    //This loop takes  alot of time
            l.push(<div key={i}>{input}</div>>)
        }
        return l
    },[input])

    return List
}

export default List
*/