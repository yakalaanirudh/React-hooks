/*
import React,{useEffect,useState} from 'react'

function List({getItems}){
    const [items,setItems]=useState([])

    useEffect(()=>{
        setItems(getItems())
        console.log('Updating Items')               //This is console.logged eveytime we change number and change theme 
    },[getItems])

    return items.map(item=> <div key={item}>{item}</div>)
}
*/