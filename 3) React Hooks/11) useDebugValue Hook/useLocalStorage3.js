import {useState,useEffect,useCallBack,useDebugValue} from "react"

export function useLocalStorage(key,defaultValue){
    const [value,setValue]=useState(()=>{

    })
          
    useDebugValue(getValueslowly(value))       


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

/*Every time useLOcalStorage runs use DebugValue runs which in turn makes the above function run making the app slow
When we type something into first name input field text appears late

To counter this actually useDebugValue takes two arguments
*/