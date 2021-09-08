import React, { useEffect, useState } from 'react';
import AddStudentForm from './AddStudentForm';
import EditStudentForm from './EditStudentForm';
import StudentsTable from './StudentsTable';
import './style.scss';

const StudentDetails = (props) => {
  const [editData, editStudentsData] = useState(null);
	const [studentsData, setStudentsData] = useState([
    {
      firstName: "Ravindra",
      lastName: "Karale",
      email: "karaleravi1005@gmail.com",
      gender: 'male',
      course: 'MCA',
      age: '28',
      married: 'no'
    }
  ]);
  
	useEffect(() => {
	}, []);

  const addStudentDetails = (student) => {
    setStudentsData([...studentsData, student])
  }
  
  const deleteStudent = (student) => {
    let filteredData = studentsData.filter(stud => stud !== student)
    setStudentsData(filteredData)
    if(editData && editData === student){
      editStudentsData(null)
    }
  }
  
  const editStudentDetails = (student) => {
    let filteredData = studentsData.filter(stud => stud !== editData)
    filteredData.push(student)
    setStudentsData(filteredData)
    editStudentsData(null)
  }


	return (
    <div className="main d-flex">
      <section className="student-form">
        {editData ? <EditStudentForm editData={editData} editStudentDetails={editStudentDetails} resetEditForm={() => editStudentsData(null)} /> :
          <AddStudentForm addStudentDetails={addStudentDetails} />}
      </section>
      <section className="student-table">
        <StudentsTable studentsData={studentsData} deleteStudent={deleteStudent} editStudent={(student) => editStudentsData(student)} />
      </section>
    </div>
	);
};

export default StudentDetails;
