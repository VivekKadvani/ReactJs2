import './App.css';
import React,{useState} from 'react'
function App() {
  
  const [num , setNum] =useState(1)
  function inc(){
    setNum(num+1);
  }
  function dec(){
    if(num!=0)
    setNum(num-1)
  }


return (
    <div className="App">
      <h1 className='number'>{num}</h1>
      <div className='btns'>
        <button className='btn' onClick={inc}>Increment</button>
        <button className='btn' onClick={dec}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
