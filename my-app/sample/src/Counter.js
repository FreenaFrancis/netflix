import React, {useState} from 'react'
import './App.css';
function Counter(props){
    const [Count,setCount] =useState(0) 
 
 const addCount=()=> {
setCount(Count+1)
console.log(Count)};
 
const subCount=()=> {
    setCount(Count-1)
    console.log(Count)};
     
 return (
  <div className="App">
    <h1>{Count }</h1>
    <button onClick={addCount}>add</button>
    <button onClick={subCount}>sub</button>
  </div>
    
    );
}
export default Counter