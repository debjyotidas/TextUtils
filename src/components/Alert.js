import React from 'react';

function Alert(props) {
    const Capitalize=(word)=>{
        const low = word.toLowerCase();
        return low.charAt(0).toUpperCase()+low.slice(1);
    }
  return (
        props.alerrt && <div className={`alert alert-${props.alerrt.type} alert-dismissible fade show`} role="alert">
         <strong>{Capitalize(props.alerrt.type)}:</strong>{props.alerrt.msg}
        </div>
 
  )
}

export default Alert