import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import './style.scss';

const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '400px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));

const StudentsTable = ({ studentsData, deleteStudent, editStudent }) => {
  const classes = useStyles();


  return (
      <div className="data-table">
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>Sr.No.</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Course</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Married</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {studentsData.map((student, index) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {index+1}
                            </TableCell>
                            <TableCell>
                                {student.firstName}
                            </TableCell>
                            <TableCell >{student.lastName}</TableCell>
                            <TableCell >{student.email}</TableCell>
                            <TableCell >{student.gender}</TableCell>
                            <TableCell >{student.course}</TableCell>
                            <TableCell >{student.age}</TableCell>
                            <TableCell >{student.married}</TableCell>
                            <TableCell >
                                <div className="action-icons">
                                    <span><DeleteIcon onClick={() => deleteStudent(student)}/></span>
                                    <span><EditOutlinedIcon onClick={() => editStudent(student)}/></span>
                                    <span></span>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
      </div>
  );
}

export default StudentsTable;