import React,{ useState } from 'react';
import { Grid, Box, Typography, TextField, Button} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import "../style/auth.css";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [touched, setTouched] = useState(false);
    const navigate = useNavigate();
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSignUp = () => {
        
        // fetch('https://dummyjson.com/users/add', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //       firstName: {firstName},
        //       lastName: {lastName},
        //       email: {email},
        //       password: {password}
        //     })
        //   })
        // .then(res => res.json())
        // .then(console.log(firstName,lastName,password,email));
    }
    const handleOnBlur = () => {
        setTouched(true)
    }
    return(
      <>
      <Grid container>
          <Grid item lg={6} xs={12} sm={6}>
            <form>
                <Box
                    component="form"
                    className="formBox"
                    noValidate
                    autoComplete="off"
                >
                    <Box className="formHead">
                        <Typography variant="h4">Create Account</Typography>
                        <Typography variant="h6">Please register below account detail</Typography>
                    </Box>
                    <Box className="textField">
                        <TextField
                        id="outlined-multiline-flexible"
                        label="First Name"
                        type="text"
                        multiline
                        maxRows={5}
                        value={firstName}
                        onChange={handleFirstName}
                        onBlur={handleOnBlur}
                        />
                        {touched ? (firstName !== "" ? "✅" : "❌") : null}
                    </Box>
                    <Box className="textField">
                        <TextField
                        id="outlined-password-input"
                        label="Last Name"
                        type="text"
                        autoComplete="current-password"
                        value={lastName}
                        onChange={handleLastName}
                        onBlur={handleOnBlur}
                        />
                         {touched ? (lastName !== "" ? "✅" : "❌") : null}
                    </Box>
                    <Box className="textField">
                        <TextField
                        id="outlined-password-input"
                        label="Email"
                        type="email"
                        autoComplete="current-password"
                        value={email}
                        onChange={handleEmail}
                        />
                    </Box>
                    <Box className="textField">
                        <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handlePassword}
                        />
                    </Box>
                    <Box className='darkBtn'>
                        <Button variant="contained" onClick={handleSignUp}>Sign Up</Button>
                    </Box>
                    <Box className="forgotPasText">
                        <Link>Forgot your password?</Link>
                    </Box>
                </Box>
            </form>
          </Grid>
          <Grid item lg={6} xs={12} sm={6}>
              <Box className="loginSide">
                  <Box className="doNotHaveAccount">
                      <Typography>Already an account holder?</Typography>
                  </Box>
                  <Box className='lightBtn'>
                      <Button variant="contained" onClick={()=>{navigate("/login");}}>Log In</Button>
                  </Box>
                  <Box className="termsCondition">
                      <Typography variant='h5'>Terms & conditions*</Typography>
                      <Typography variant='h6'>
                          Your privacy and security are important to us. 
                          For more information on how we use your data read our 
                          <Link to="/">privacy policy</Link>.</Typography>
                  </Box>
              </Box>
          </Grid>
      </Grid>
      </>  
   )
}

export default Register;