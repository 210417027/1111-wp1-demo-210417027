import React, { useState } from 'react';

const T14_27_UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'hachen',
    age: 20,
    message: 'random message'
  });

  const changeMessage = () => {
    setPerson({...person, message: '210417027 hachen'});
  }

  return <>
     <h3>{person.name}</h3>
     <h3>{person.age}</h3>
     <h4>{person.message}</h4>
     <button className="btn" onClick={changeMessage}>Change Message</button>
  </>;
};

export default T14_27_UseStateObject;
