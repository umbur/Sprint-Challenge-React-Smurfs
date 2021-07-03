import React from 'react';

const Smurf = props => {
  return (
    <div className="smurf">
     <div className='smurfCard'>
      <strong>Name:</strong><p>{props.name}</p>
      <div className='height'>Height:</div><p>{props.height} tall</p>
      <div className='age'>Age:</div><p className='agep'>{props.age} smurf years old</p>
      <button onClick={e => props.deleteSmurf(e, props.id)}>Delete</button>
     </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

