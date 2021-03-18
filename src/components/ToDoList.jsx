import React from 'react';
import TasksList from 'TasksList';
import Add from 'Add';

const ToDoList = ()=>{

  return (
    <div className='toDoList-container'>
      <h1>To Do List</h1>
      <Add />
      <TasksList />
    </div>
  );
}