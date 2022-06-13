/*
import {useMemo,useDeferredValue} from 'react'

function List({input}){
    const LIST_SIZE=20000
    const deferredInput=useDeferredValue(input)     //This statememt tells if there *1
    const list=useMemo(()=>{
        const l=[]
        for(let i=0;i<LIST_SIZE;i++){    //This loop takes  alot of time
            l.push(<div key={i}>{deferredInput}</div>>)
        }
        return l
    },[deferredInput])

    useEffect(()=>{
        console.log(`Input:${input}\nDeferred:${deferredInput}`)
    })

    return List
}

export default List

//*1 As long a sthere is a decent amount of time since the input changed last time keep it the same otherwise update the input
//Then replace everyinput with deferred input

//THE OUTPUT FOR USEEFFECT FUNCTION IS
//When i type a 
//Input:a DeferredInput:
//then
//Input:a DeferredInput:a


//When i type asdf 
//Input:a DeferredInput:
//then
//Input:as DeferredInput:
//then
//Input:asd DeferredInput:
//then
//Input:asdf DeferredInput:
//then   //Its been awhile now new list is rendered
//Input:asdf DeferredInput:asdf
*/