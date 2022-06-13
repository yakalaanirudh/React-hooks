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

    return List
}

export default List

//*1 As long a sthere is a decent amount of time since the input changed last time keep it the same otherwise update the input
//Then replace everyinput with deferred input

//THE PROCESS IS
//First the initial value (input) is stored in deferredInput
//Then the list with useMemo is run using the past value
//The new input is displayed on DOM.
//Then system recognises it has been a while since any change occured and it then displays the list with the new value
*/
