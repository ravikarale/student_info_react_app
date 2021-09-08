import React, { useEffect, useState } from 'react';
import './style.scss';
import { makeStyles } from '@material-ui/core';
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

const AddStudentForm = ({ addStudentDetails }) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('female');
  const [course, setCourse] = useState('');
  const [age, setAge] = useState('');
  const [married, setMarried] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(firstName, lastName, email, gender, course, age, married);
    addStudentDetails({
      firstName: firstName,
      lastName: lastName,
      email: email,
      gender: gender,
      course: course,
      age: age,
      married: married
    })
    resetForm()
  };

  const resetForm = () => {
    setFirstName("")
    setLastName("")
    setEmail("")
    setGender("")
    setCourse("")
    setAge("")
    setMarried("")
  }

  return (
    <form className={`${classes.root}`} onSubmit={handleSubmit}>
      <h1>Add Student</h1>
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

      <FormControl component="fieldset" className={`MuiTextField-root`}>
        <FormLabel className={`d-flex MuiTextField-root`} component="legend">Gender</FormLabel>
        <RadioGroup row aria-label="gender" required name="gender" value={gender} defaultValue={gender} onChange={(e) => setGender(e.target.value)}>
          <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
          <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
          <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />
        </RadioGroup>
      </FormControl>

      <FormControl variant="filled" className={`MuiTextField-root ${classes.formControl}`}>
        <InputLabel htmlFor="filled-age-native-simple">Course</InputLabel>
        <Select
          native
          required
          value={course}
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
        <FormGroup value={married} aria-label="position" row onChange={(e) => setMarried(e.target.value)} >
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
        <Button variant="contained" onClick={resetForm}>
          Reset
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </form>

  );
};

export default AddStudentForm;