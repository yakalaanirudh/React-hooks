/*
import { useId } from "react"

export default function EmailForm(){
    const id1=useId()
    const id2=useId()
    return(
        <>
            <label htmlFor={id1}>Email</label>
            <input id={id1} type="email" />
            <label htmlFor={id2}>Name</label>
            <input id={id2} type="text" />
        </>
    )
}
*/
//Instead of creating two different ids by using useId hook twice we can do like this

import { useId } from "react"

export default function EmailForm(){
    const id=useId()
    return(
        <>
            <label htmlFor={`${id}email`}>Email</label>
            <input id={`${id}email`} type="email" />
            <label htmlFor={`${id}name`}>Name</label>
            <input id={`${id}name`} type="text" />
        </>
    )
}
