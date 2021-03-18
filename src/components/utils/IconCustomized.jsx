import React from 'react';
import '../../assets/utils/IconCustomized.css'

const Icon = (props) => {
  return (
    <div className={`icon-customized ${props.className}`} onClick={props?.onClick}>
      {props.children}
    </div>
  );
}

export default Icon;