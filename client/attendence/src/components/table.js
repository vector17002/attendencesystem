import React from 'react';
import { Rows } from './rows';
const Table = ({students}) => {
 students = students.sort((p1, p2) => (p1.name > p2.name) ? 1 : (p1.name < p2.name) ? -1 : 0);
  return (
    <div >
         <table className="table table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>Roll No.</th>
                    <th>Name</th>
                    <th>Mark Present</th>
                    <th>Status</th>
                    <th>CheckIn</th>
                    <th>CheckOut</th>
                </tr>
            </thead>
            <tbody>
            {students.map((student)=><Rows student={student}/>)}
        </tbody>
        </table>
    </div>
  )
}

export default Table