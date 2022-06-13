//USEMEMO()
//useMemo remember sjust the end result

//USECALLBACK
//useCallBack remembers the entire function that is to be called

//useMemo is to memoize a calculation result between a function's calls and between renders
//useCallback is to memoize a callback itself (referential equality) between renders
//useRef is to keep data between renders (updating does not fire re-rendering)
//useState is to keep data between renders (updating will fire re-rendering)

/*
const getItems= useCallBack(()=>{                        
    return [number,number+1,number+2]       
},[number])

//USEMEMO()
In useMemo the function is only set to
return [number,number+1,number+2]

//USECALLBACK
In useCallBack the function is set to entire function
()=>{                        
    return [number,number+1,number+2]       
}

so here in usecallBack we can use that incrementor example as we can callback the whole function not just the returned value
*/