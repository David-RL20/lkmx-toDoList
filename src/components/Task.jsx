import React, { useState } from 'react';
import { connect } from 'react-redux';
import IconCustomized from './utils/IconCustomized';
import InputCustomized from './utils/InputCustomized';
import {AiOutlineEdit, AiOutlineDelete, AiOutlineSave}from 'react-icons/ai';
import '../assets/Task.css';

const Task = (props)=>{
  const [editing , setEditing] = useState(false);
  const [value , setValue] = useState(props?.data.name);

  const onChange = (event) => {
    setValue(event.target.value);
  }
  return (
    (editing)? 
      <div className='task-container'>
        <InputCustomized className='task-container__input' onChange={onChange} value={props?.data.name} />
        <IconCustomized className='task-container__saveIcon'> <AiOutlineSave/> </IconCustomized>
      </div>
      :
      <div className='task-container'>
        <div className='task-container__name'>
          {props?.data.name}
        </div>
        <IconCustomized onClick={()=>{setEditing(true)}} className='task-container__editIcon'>
          <AiOutlineEdit/>
        </IconCustomized>
        <IconCustomized className='task-container__deleteIcon'>
          <AiOutlineDelete/>
        </IconCustomized>
      </div>
  )
}

export default connect(null,null)(Task);