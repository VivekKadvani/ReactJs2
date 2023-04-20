import './App.css';
import Header from './Header';
import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
// import Field from './Field';

function App() {
  const[form,setForm] =useState({})
  // const[task,setTask] = useState("")
  // const[Priority,setPr] = useState("")
  const[data , setData] = useState([])

  const addData = ()=>{
    setData([ ...data, form])
    // setTask("")
    // setPr("")
    setForm({form, task:"",Priority:""})
  }
  const removeItem = (index)=>{
    let arr = data;
    arr.splice(index,1);
    setData([...arr]);
  }
  return(
    <div className='App'>
      <Header/>
      <div className='record'>
      <Stack direction="row" spacing={2}>
        <TextField value ={form.task} onChange={(event)=>{setForm({...form,task : event.target.value})}} id="outlined-basic" label="Task" variant="outlined" />
        
        <TextField value ={form.Priority} onChange={(event)=>{setForm({...form,Priority:event.target.value})}} id="outlined-basic" label="Priority" variant="outlined" />
        
        <Button variant="contained" onClick={addData} color='success'><AddRoundedIcon /></Button>
      </Stack>
      </div>
      <div className='data'>
        <div className='listhead'>
          <h4>Task</h4>
          <h4>Priority</h4>
          <h4>remove</h4>
        </div>
        {
          data.map((element, index)=>{
            return(
              <div key={index} className='list'>
                <h4>{element.task}</h4>
                <h4>{element.Priority}</h4>
                <h4><Button variant="contained" onClick={()=>removeItem(index)} color='error'><DeleteRoundedIcon /></Button></h4>
              </div>
            )
          })
        }
      </div>
    </div>    
    )




    // const [num , setNum] =useState(1)
  // function inc(){
  //   setNum(num+1);
  // }
  // function dec(){
  //   if(num!=0)
  //   setNum(num-1)
  // }
// return (
//     <div className="App">
//       <h1 className='number'>{num}</h1>
//       <div className='btns'>
//         <button className='btn' onClick={inc}>Increment</button>
//         <button className='btn' onClick={dec}>Decrement</button>
//       </div>
//     </div>
//   );
}

export default App;
