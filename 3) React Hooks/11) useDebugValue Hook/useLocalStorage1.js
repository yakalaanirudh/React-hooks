import {useState,useEffect,useCallBack,useDebugValue} from "react"

export function useLocalStorage(key,defaultValue){
    const [value,setValue]=useState(()=>{

    })

    useDebugValue(value)        //We are passing value because we want to dispay value's current State

    useEffect(()=>{

    },[key,value,LocalStorage])

    const remove=useCallback(()=>{

    })

    return [value,setValue,remove]
}