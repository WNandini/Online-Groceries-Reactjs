import React,{ useState } from 'react';
import { Grid, Box, Typography, TextField, Button} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import "../style/auth.css";

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('')
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const navigate = useNavigate();

    const handleValidation = (name, value) => {
        if(name === 'FirstName'){
            if(value === ''){
                setFirstNameError('Please enter first name')
            }else{
                setFirstNameError('')
            }
        }
        if(name === 'LastName'){
            if(value === ''){
                setLastNameError('Please enter last name')
            }else{
                setLastNameError('')
            }
        }
        if(name === 'Email'){
            if(value === ''){
                setEmailError('Please enter email')
            }else{
                setEmailError('')
            }
        }
        if(name === 'Password'){
            if(value === ''){
                setPasswordError('Please enter password')
            }else{
                setPasswordError('')
            }
        }
    }

    const handleFirstName = (e) => {
        const {name, value} = e.target;
        handleValidation(name, value)
        setFirstName(value)
    }

    const handleLastName = (e) => {
        const {name, value} = e.target;
        handleValidation(name, value)
        setLastName(e.target.value)
    }

    const handleEmail = (e) => {
        const {name, value} = e.target;
        handleValidation(name, value)
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        const {name, value} = e.target;
        handleValidation(name, value)
        setPassword(e.target.value)
    }
    
    const handleSignUp = () => {
        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName: {firstName},
              lastName: {lastName},
              email: {email},
              password: {password}
            })
          })
        .then(res => res.json())
        .then(console.log(firstName,lastName,password,email));
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
                            name="FirstName"
                            type="text"
                            multiline
                            maxRows={5}
                            value={firstName}
                            onChange={handleFirstName}
                            />
                            <h5>{firstNameError}</h5>
                        </Box>
                        <Box className="textField">
                            <TextField
                            id="outlined-password-input"
                            label="Last Name"
                            type="text"
                            name="LastName"
                            autoComplete="current-password"
                            value={lastName}
                            onChange={handleLastName}
                            />
                            <h5>{lastNameError}</h5>
                        </Box>
                        <Box className="textField">
                            <TextField
                            id="outlined-password-input"
                            label="Email"
                            type="email"
                            name="Email"
                            autoComplete="current-password"
                            value={email}
                            onChange={handleEmail}
                            />
                            <h5>{emailError}</h5>
                        </Box>
                        <Box className="textField">
                            <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            name="Password"
                            autoComplete="current-password"
                            value={password}
                            onChange={handlePassword}
                            />
                            <h5>{passwordError}</h5>
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
                        <Button variant="contained" onClick={()=>{navigate("/login")}}>Log In</Button>
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