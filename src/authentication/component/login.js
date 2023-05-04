import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button, InputAdornment} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import "../style/auth.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    const handleValidation = (name, value) => {
        if(name === 'email'){
            if(value === ''){
                setEmailError("Please enter email")
            }else if(value !== ""){
                if(value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
                    setEmailError("")
                }else{
                    setEmailError("Please enter valid email")
                }
            }else{
                setEmailError("")
            }
        }
        if(name === 'password'){
            if(value === ''){
                setPasswordError('Please enter password')
            }else if(value !== ''){
                if(value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10}$/)){
                    setPasswordError('')
                }else{
                    setPasswordError('Please enter valid password')
                }
            }else{
                setPasswordError('')
            }
        }
    }

    const handleEmail = (e) => {
        const {name, value} = e.target;
        handleValidation(name, value)
        setEmail(value);
    }

    const handlePassword = (e) => {
        const {name, value} = e.target;
        handleValidation(name, value)
        setPassword(value);
    }   
    
    const handleSignIn = async () => {           
        const response = await fetch(`https://dummyjson.com/users`)
        const newData = await response.json()
        // setData(newData)
        const data = newData;
        console.log("Data",data);
        
        let newArray = data.users.filter(function (el)
        {   
            localStorage.setItem('Email',email)
            localStorage.setItem('Password',password)
            return el.email === email && el.password === password
        }
        )
        if(newArray.length === 1){
            navigate('/')
        }
    }

        return(
            <>
        <Grid container>
            <Grid item lg={6} xs={12} sm={6}>
                <Box
                    component="form"
                    className="formBox"
                    noValidate
                    autoComplete="off"
                    >
                    <Box className="formHead">
                        <Typography variant="h4">Login</Typography>
                        <Typography variant="h6">Please login below account detail</Typography>
                    </Box>
                    <Box className="textFieldEmail">
                        <TextField
                        id="outlined-multiline-flexible"
                        type="text"
                        label="Email"
                        multiline
                        maxRows={5}
                        value={email}
                        name="email"
                        onChange={handleEmail}
                        />
                        <h5>{emailError}</h5>
                    </Box>
                    <Box className="textFieldPassword">
                        <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        name='password'
                        onChange={handlePassword}
                        />
                        <h5>{passwordError}</h5>
                    </Box>
                    <Box className='darkBtn'>
                        <Button variant="contained" onClick={handleSignIn}>Sign In</Button>
                    </Box>
                    <Box className="forgotPasText">
                        <Link>Forgot your password?</Link><br/>
                    </Box>
                    <Box className="note">
                        <h4>Note - 
                        <span> Please use this email and password<br/>
                        Email = "rshawe2@51.la"
                        Password = "OWsTbMUgFc"</span>
                        </h4>
                    </Box>
                </Box>
            </Grid>
            <Grid item lg={6} xs={12} sm={6}>
                <Box className="createAccountBtnSide">
                    <Box className="doNotHaveAccount">
                        <Typography>Don't have an account?</Typography>
                    </Box>
                    <Box className='lightBtn'>
                        <Button variant="contained" onClick={() => {navigate('/register')}}>Create account</Button>
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

export default Login;