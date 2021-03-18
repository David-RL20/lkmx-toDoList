import React,{ useState } from 'react';
import InputCustomized from './utils/InputCustomized';
import { connect } from 'redux';
import '../assets/Add.css';
const Search = (props) => {
  const [value, setValue] = useState('');
  const AddTask = () => {

  }

  const onChange = () => {

  }

  return (
    <div className='search-container'>
      <InputCustomized 
        className='search-container__input' 
        placeholder='Escribe una tarea'
        onChange = {onChange}
      />
      <button className='search-container__button' onClick={AddTask}>Agregar</button>
    </div>
  );
};

const mapStateToProps = () => state;

export default connect(mapStateToProps, null)(Search);