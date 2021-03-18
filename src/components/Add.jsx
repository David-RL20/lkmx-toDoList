import React,{ useState } from 'react';
import InputCustomized from './utils/InputCustomized';
import { connect } from 'react-redux';
import { addTask } from '../../actions';
import '../assets/Add.css';
const Add = (props) => {
  const [value, setValue] = useState('');
  
  //Generando un nuevo id
  //Auto incrementable
  const AddTask = () => {
    let _id = new Number(props?.tasks.length + 1);
    props.addTask({
      id: _id,
      name: value,
    })
    //Reset add input
    const a = document.getElementsByClassName('add-container__input');
    a[0].value='';
  }

  const onChange = (event) => {
    setValue(event.currentTarget.value);
  }

  return (
    <div className='add-container'>
      <InputCustomized 
        className='add-container__input' 
        placeholder='Escribe una tarea'
        onChange = {onChange}
      />
      <button className='add-container__button' onClick={AddTask}>Agregar</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state
};
const mapDispatchToProps = {
  addTask
}
export default connect(mapStateToProps, mapDispatchToProps)(Add);