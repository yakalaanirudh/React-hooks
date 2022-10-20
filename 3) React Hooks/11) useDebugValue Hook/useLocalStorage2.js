import {useState,useEffect,useCallBack,useDebugValue} from "react"

export function useLocalStorage(key,defaultValue){
    const [value,setValue]=useState(()=>{

    })

    useDebugValue(key)          //We can have multiple values in useDebugValue hook 
    useDebugValue(value)        //We are passing value because we want to dispay value's current State


    useEffect(()=>{

    },[key,value,LocalStorage])

    const remove=useCallback(()=>{

    })

    return [value,setValue,remove]
}

/*
useDebugValue(key)
useDebugValue(value)

is same as
useDebugValue([key,value])

*/

/*
useDebugValue(value)

Next the hook state in react dev tools current value appears
//kyle
*/


/*
useDebugValue(key)
useDebugValue(value)
Next the hook state in react dev tools current value appears as well as its name 
//[firstName:Kyle]
*/