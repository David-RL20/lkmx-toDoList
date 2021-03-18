import React from 'react';
import TasksList from './TasksList';
import Add from './Add';
import '../assets/ToDoList.css'

const ToDoList = ()=>{

  return (
    <div className='toDoList-container'>
      <h1 className='toDoList-container__title'>To Do List</h1>
      <Add />
      <TasksList />
    </div>
  );
}

export default ToDoList;