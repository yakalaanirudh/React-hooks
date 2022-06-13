/*
import React,{useState,useEffect} from 'react';


function App(){
  const [resourceType,setResourceType]  =useState('posts')

  //console.log("Render")                                 //This console.logs everytime the app renders


useEffect(()=>{                                           //Everything inside this arrow function is executed everytime our App renders
  console.log('Render') 
})                                       

  
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
//The app prints Render everytime we click on a DIFFERENT Button

//
//
//
import React,{useState,useEffect} from 'react';


function App(){
  const [resourceType,setResourceType]  =useState('posts')

  console.log("Render")                                   //This runs everytime


useEffect(()=>{                                           //Everything inside this arrow function is executed everytime our App renders
  console.log('Render') 
})                                       

  
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
//The app prints Render everytime we click on a DIFFERENT Button
//The render from first statement is run everytime 


import React,{useState,useEffect} from 'react';


function App(){
  const [resourceType,setResourceType]  =useState('posts')

  console.log("Render")


useEffect(()=>{                                           //Everything inside this arrow function is executed everytime our App renders
  console.log('Render') 
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
//The app prints Render everytime we click on a DIFFERENT Button


//
//
import React,{useState,useEffect} from 'react';


function App(){
  const [resourceType,setResourceType]  =useState('posts')

  console.log("Render")


useEffect(()=>{                                           //Everything inside this arrow function is executed everytime our App renders
  console.log('Render') 
},[])                                                     //If the array is empty the function is run everytime the app renders

  
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
//The app prints Render everytime we click on a DIFFERENT Button
*/ 