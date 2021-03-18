import React from 'react';
import '../../assets/utils/InputCustomized.css'

const Input = (props) =>{
  return (
    <input 
      id='input-customized' 
      className={props?.className} 
      placeholder={props?.placeholder} 
      onChange={props?.onChange}
      defaultValue={props?.value || undefined}
      ref={props?.ref}
      />
  );
};

export default Input;