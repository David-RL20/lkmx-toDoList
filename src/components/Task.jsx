import React, { useState } from 'react';
import { connect } from 'react-redux';
import IconCustomized from './utils/IconCustomized';
import InputCustomized from './utils/InputCustomized';
import '../assets/Task.css';

const Task = (props)=>{
  const [editing , setEditing] = useState(false);
  const [value , setValue] = useState(props?.data.name);

  const onChange = (event) => {

  }
  return (
    (editing)? 
      <div className='task-container'>
        <InputCustomized onChange={onChange}>{props?.data.name}</InputCustomized>
        <IconCustomized className='task-container__saveIcon'></IconCustomized>
      </div>
      :
      <div className='task-container'>
      </div>
  )
}

export default connect(null,null)(Task);