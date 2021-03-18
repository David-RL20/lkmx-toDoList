import React from 'react';
import '../../assets/utils/InputCustomized.css'

const Input = (props) =>{
  return (
    <input 
      id='input-customized' 
      className={props?.className} 
      placeholder={props?.placeholder} 
      onChange={props?.onChange}
    >
      {props?.children}
    </input> 
  );
};

export default Input;