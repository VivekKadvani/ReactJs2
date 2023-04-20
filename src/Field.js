import React from 'react'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import Button from '@mui/material/Button';
const Field = ({task,Priority,index}) => {
  return (
    <div className='list'>
          <h4>{task}</h4>
          <h4>{Priority}</h4>
          <h4><Button variant="contained"  color='error'><DeleteRoundedIcon /></Button></h4>
    </div>
  )
}

export default Field