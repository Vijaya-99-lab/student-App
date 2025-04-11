import logo from './logo.svg';
import react from 'react';
import Child1 from './Child1';
import Car from './Car'
import AppStyles from './App.css'
import {useState} from 'react'
import Todo from './Todo';
import styles from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

const [counter, setCounter] = useState(0)
let maxCount = 10;

  return (

    <div> 
    <h1> Counter App </h1>

<div className='Wrapper'>  
  <button className = 'minus' disabled = {counter == 0}  onClick = {()=> {
    if(counter > 0) {
      setCounter(counter-1)
    }
    }
  }  > - </button>
  <p> {counter} </p>
  <button className = 'plus' disabled = {counter == maxCount} onClick = {()=> {
    if(counter < maxCount) {
      setCounter (counter+1)
    }
  }} > + </button>

</div>

<Todo>  </Todo>
   </div>
  );  
}

export default App;
