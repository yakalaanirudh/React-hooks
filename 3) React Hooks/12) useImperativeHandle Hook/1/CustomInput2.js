import React from "react"

function CustomInput({style,...props},ref){

    return(
        <input
            ref={ref}
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
React.forwardRef() allows us to pass a ref in the function arguments

What we are doing it buy this we are forwarding the ref that is being passed into this CustomInput
we are taking it forwarding it into the input tag


*/