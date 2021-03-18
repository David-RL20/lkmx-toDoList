import React from 'react';
import '../../assets/utils/IconCustomized.css'

const Icon = (props) => {
  return (
    <button className={`icon-customized ${props.class}`} onClick={props?.onClick}>
      {props.children}
    </button>
  );
}

export default Icon;