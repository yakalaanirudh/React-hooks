import React,{ useImperativeHandle } from "react"

function CustomInput({style,...props},ref){
    useImperativeHandle(ref,()=>{
        return {alertHi:()=>alert("hi")}
    },[])
    return(
        <input
            //ref={ref}
            {...props}
            style={{
                border:"none",
                backgroundColor:"lightpink",
                padding:"0.25em",
                borderBottom:"0.1em solid black",
                borderTopRightRadius:"0.25em",
                borderTopLeftRadius:"0.25em",
                ...style
            }}
        />
    )
}

export default React.forwardRef(CustomInput)

/*
useImperative Handle takes three arguments
1)ref   -This is the ref we want to completely overwrite
So we comment out that ref
2)Function -This functions return value is the new value for our ref
3)An array of dependencies
useImperativeHandle(ref,()=>{
        return {alertHi:()=>alert(props.value)}
    },[props.value])


*/