import React  from 'react'
import { client } from '../client';
export const Rows = ({student}) => {
  let time = new Date()
  time = time.toLocaleTimeString();
  const id = student._id;
  function changeStatusTrue(){
    client.patch(id).set({status : true , checkin: time}).commit().then(()=>{
    }) 
  }
  function changeStatusFalse(){
    client.patch(id).set({status : false , outcheck: time}).commit().then(()=>{
    }) 
  }

 return (
    <tr>
      <td>{student.roll}</td>
      <td>{student.name}</td>
      <td><div className="form-check">
  <input className="form-check-input" type="checkbox" value=""  onClick={student.status ? changeStatusFalse : changeStatusTrue }/>
  <label className="form-check-label" for="flexCheckDefault">
      {student.status ? "Checkout" : "Present"}
    </label>
 </div>

</td>
      <td>{student.status? "Present" : "Absent"}</td>
      <td>{student.checkin}</td>
      <td>{student.outcheck}</td>
    </tr>
  )
}
