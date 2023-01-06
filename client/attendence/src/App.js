import './App.css';
import Table from './components/table';
import {client} from './client'
import React , {useState , useEffect} from 'react';
import {Add } from './components/add'

function App() {
  const [students, setStudents] = useState([]);
  const [present, setPresent] = useState([]);
  function eraseCache(){
  window.location = window.location.href+'?eraseCache=true';
  }
 
  useEffect(()=>{
    const query = `*[_type =='student']`;
      client.fetch(query)
      .then((data)=>{
        setStudents(data)
      })        
  },[])
  useEffect(()=>{
    const presentQuery = `*[_type == 'student' && status == true]`
    client.fetch(presentQuery).then((data)=>{
      setPresent(data)
    })
  },[])
  const refresh=(students)=>{
     students.map((student)=>{
      const id = student._id;
      client.patch(id).set({status:false ,checkin :'', outcheck:''}).commit().then(()=>{
           
      })
     })
     eraseCache()
  }
  return (
     <div className='container'>
     <p className='heading h1'>Attendence Software</p>
     <Add/>
     <Table className='table' students={students}/>
     <div style={{display:'flex' , flexDirection:'row' , justifyContent: 'space-between'}}>
     <div className="col-auto">
      <button type="button" className="btn btn-danger mb-3" onClick={()=>refresh(students)}>Refresh</button>
    </div>
     <div className="col-auto">
      <button type="button" className="btn btn-dark mb-3" onClick={eraseCache}>Mark Attendence</button>
    </div>
    </div>
     <p className='heading h5'>Total number of students present: {present.length} </p>
     </div>
  );
}

export default App;
