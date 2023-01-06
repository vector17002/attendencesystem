import React, { useState } from 'react';
import {client} from '../client';

export const Add = () => {
  const [name , setName] = useState('');
  const [roll , setRoll] = useState('');

  const handleInputName=(e)=>{
     setName(e.target.value);
  }

  const handleInputRoll=(e)=>{
    setRoll(e.target.value)
  }

 const send =()=>{
    if(name && roll){
      const doc = {
        _type:'student',
        roll,
        name,
      }
      client.create(doc).then(()=>{
        alert("Student is added to the attendence list")
        window.location.reload();
      })
     }
     else{
      alert("Please fill both the fields")
     }
  }

  return (
    <form className="row g-3">
    <div className="col-auto">
      <input type="number" className="form-control" onChange={handleInputRoll} placeholder="Roll No."/>
    </div>
    <div className="col-auto">
      <input type="string" className="form-control" onChange={handleInputName} placeholder="Name"/>
    </div>
    <div className="col-auto">
      <button type="button" className="btn btn-primary mb-3" onClick={send}>Add Student</button>
    </div>
  </form>
  )
}
