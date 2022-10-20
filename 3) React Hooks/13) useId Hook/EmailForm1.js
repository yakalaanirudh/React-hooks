/*
export default function EmailForm(){
    return(
        <>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
        </>
    )
}
*/

//WE can use a id generator manually but if Server renders some id from ssr and browser accidenatlly renders same id from client side
//rendering we will have  a problem
//This is where the hook useId comesin
/*
export default function EmailForm(){
    const id=Math.random()
    return(
        <>
            <label htmlFor={id}>Email</label>
            <input id={id} type="email" />
        </>
    )
}
*/

import { useId } from "react"
//The id is unique for each time we render that component
//That is the email label at top has different id from email label at bottom
//And everytime we re render the page they have same id's if everything is same so there is consistency
export default function EmailForm(){
    const id=useId()
    return(
        <>
            <label htmlFor={id}>Email</label>
            <input id={id} type="email" />
        </>
    )
}