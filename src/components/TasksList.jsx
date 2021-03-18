import React from 'react';
import ListEmptyComponent  from './ListEmpty';
import Task from './Task';
import { connect } from 'react-redux';
import '../assets/TaskList.css'
const TasksList = (props) => {
  const taskListLenght = props?.tasks.length;

  return (
    <div className='taskList-container' >
      {
        (taskListLenght > 0)
        ? props?.tasks.map((task) => {
          return <Task key={task.id} data={task} />;
        })
        : <ListEmptyComponent />
      }
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(TasksList);
