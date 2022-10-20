function CustomInput({style,...props}){

    return(
        <input
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

export default CustomInput