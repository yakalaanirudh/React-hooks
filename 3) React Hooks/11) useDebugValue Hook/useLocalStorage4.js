import {useState,useEffect,useCallBack,useDebugValue} from "react"

export function useLocalStorage(key,defaultValue){
    const [value,setValue]=useState(()=>{

    })
          
    useDebugValue(value,v=>getValueSlowly(v))       


    useEffect(()=>{

    },[key,value,LocalStorage])

    const remove=useCallback(()=>{

    })

    return [value,setValue,remove]
}

function getValueSlowly(value){
    for (let i=0;i<30000000;i++){}
    return value
}

/*
useDebugValue takes two arguments the value and the function to which the argument should be passed
useDebugValue(value,v=>getValueSlowly(v)) 
what we are telling react is only run this function if
1)We are in development
2)We have react dev tools open to see what the result is 
other wise dont run the function
*/