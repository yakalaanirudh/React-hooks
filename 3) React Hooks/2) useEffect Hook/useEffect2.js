/*
import React,{useState,useEffect} from 'react';


function App(){
  const [resourceType,setResourceType]  =useState('posts')

useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response=>response.json())
  .then(json=>console.log(json))                                //This console.logs the entire data from the API               
},[resourceType])                                       

  
  return(
    <>
      <div>
        <button onClick={()=>{setResourceType('posts')}}>Posts</button>
        <button onClick={()=>{setResourceType('users')}}>Users</button>
        <button onClick={()=>{setResourceType('comments')}}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  )
}
  
export default App;




import React,{useState,useEffect} from 'react';


function App(){
  const [resourceType,setResourceType]  =useState('posts')
  const [items,setItems]=useState([])

useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then(response=>response.json())
  .then(json=>setItems(json))                                //This console.logs the entire data from the API               
},[resourceType])                                       

  
  return(
    <>
      <div>
        <button onClick={()=>{setResourceType('posts')}}>Posts</button>
        <button onClick={()=>{setResourceType('users')}}>Users</button>
        <button onClick={()=>{setResourceType('comments')}}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {items.map(item=>{
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}
  
export default App;
*/ 