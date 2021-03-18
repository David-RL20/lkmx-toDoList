import React from 'react';
import ListEmptyComponent  from './ListEmpty';
import Task from './Task';
import { connect } from 'react-redux';

const TasksList = (props) => {
  const taskListLenght = props?.tasks.length;

  return (
    <div className='taskList-container' >
      {
        (taskListLenght > 0)
        ? props?.tasks.forEach((task) => {
          return <Task data={task} />;
        })
        : <ListEmptyComponent />
      }
    </div>
  );
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(TasksList);
