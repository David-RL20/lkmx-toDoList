import React, { useState } from 'react';
import { connect } from 'react-redux';
import IconCustomized from './utils/IconCustomized';
import InputCustomized from './utils/InputCustomized';
import {deleteTask,editTask} from '../../actions'
import {AiOutlineEdit, AiOutlineDelete, AiOutlineSave}from 'react-icons/ai';
import '../assets/Task.css';

const Task = (props)=>{
  const [editing , setEditing] = useState(false);
  const [value , setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  }
  const deleteTask = ()=>{
    props.deleteTask({
      id: props?.data.id
    })
  }

  const editTask = () => {
    props.editTask({
      id: props?.data.id,
      name: value
    });
    setEditing(false);
  }
  return (
    (editing)? 
      <div className='task-container'>
        <InputCustomized className='task-container__input' onChange={onChange} value={props?.data.name} />
        <IconCustomized onClick={editTask} className='task-container__saveIcon'> <AiOutlineSave/> </IconCustomized>
      </div>
      :
      <div className='task-container'>
        <div className='task-container__name'>
          {props?.data.name}
        </div>
        <IconCustomized onClick={()=>{setEditing(true)}} className='task-container__editIcon'>
          <AiOutlineEdit/>
        </IconCustomized>
        <IconCustomized onClick={deleteTask} className='task-container__deleteIcon'>
          <AiOutlineDelete/>
        </IconCustomized>
      </div>
  )
}
const mapDispatchToProps = {
  deleteTask,
  editTask,
}
export default connect(null,mapDispatchToProps)(Task);