import React, { useEffect, useState } from 'react';
import './style.scss';
import { makeStyles } from '@material-ui/core';
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import green from "@material-ui/core/colors/green";
import { TextField, Button, Radio, RadioGroup, FormGroup,
  FormControlLabel, FormControl, FormLabel, Select, InputLabel, Checkbox
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
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

const EditStudentForm = ({ editData, resetEditForm, editStudentDetails }) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState('');
  const [age, setAge] = useState('');
  const [married, setMarried] = useState('');

  useEffect(() => {
    if(editData){
      setFirstName(editData.firstName)
      setLastName(editData.lastName)
      setEmail(editData.email)
      setGender(editData.gender)
      setCourse(editData.course)
      setAge(editData.age)
      setMarried(editData.married)
    }
	}, [editData]);


  const handleSubmit = e => {
    e.preventDefault();
    editStudentDetails({
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
      course: course,
      age: age,
      married: married
    })
    clearForm()
  };

  const clearForm = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setGender("")
    setCourse("")
    setAge("")
    setMarried("")
    resetEditForm()
  }

  return (
    <form className={`${classes.root}`} onSubmit={handleSubmit}>
      <h1>Edit Student</h1>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <FormControl component="fieldset" className={`MuiTextField-root ${classes.formControl}`}>
        <FormLabel className={`d-flex MuiTextField-root`} component="legend">Gender</FormLabel>
        <RadioGroup row aria-label="gender" required name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
          <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
          <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
          <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
        </RadioGroup>
      </FormControl>

      <FormControl variant="filled" className={`MuiTextField-root ${classes.formControl}`}>
        <InputLabel htmlFor="filled-age-native-simple">Course</InputLabel>
        <Select
          native
          value={course}
          required
          onChange={(e) => setCourse(e.target.value)}
        >
          <option aria-label="Select Course" value="" />
          <option value={'B.Sc'}>B.Sc</option>
          <option value={'M.Sc'}>M.Sc</option>
          <option value={'BCA'}>BCA</option>
          <option value={'MCA'}>MCA</option>
        </Select>
      </FormControl>

      <TextField
        label="Age"
        variant="filled"
        type="number"
        required
        value={age}
        onChange={e => setAge(e.target.value)}
      />

      <FormControl component="fieldset" className={`MuiTextField-root`}>
        <FormLabel className={`d-flex MuiTextField-root`} component="legend">Are you married?</FormLabel>
        <FormGroup aria-label="position" value={married} row onChange={(e) => setMarried(e.target.value)}>
          <FormControlLabel
            value="yes"
            control={<Checkbox checked={married === "yes" ? true : false} color="primary" />}
            label="Yes"
            labelPlacement="end"
          />
          <FormControlLabel
            value="no"
            control={<Checkbox checked={married === "no" ? true : false} color="primary" />}
            label="No"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>

      <div>
        <Button variant="contained" onClick={clearForm}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Edit
        </Button>
      </div>
    </form>

  );
};

export default EditStudentForm;