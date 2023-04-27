import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import "../style/auth.css";

const Login = () => {
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email:"",
        password:""
    })
    const [inputError, setInputError] = useState({
        emailError: "",
        passwordError: ""
    })
    console.log(inputValue,"input")
    // const handleValidation = (name,value) => {
    //     if(name==='email'){
    //         if(email === ''){
    //             setEmailError({
    //                 [name]: value
    //             })
    //             ("Please enter email")
    //         }
    //         else if(email !== ""){
    //             if(email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
    //                 setEmailError("")
    //             }else{
    //                 setEmailError("Please enter valid email")
    //             }
    //         }else{
    //             setEmailError("")
    //         }
    //     }
    //     if(name==='password'){
    //         if(password === ""){
    //             setPasswordError("Please enter password")
    //         }
    //     }
    // }
    const handleValidation = () => {
        console.log(inputError)
    }
    const handleInput = (e) =>{
      const {name, value} = e.target;
      handleValidation()
      setInputValue({
        ...inputValue,
        [name]:value
    })

    }
    // const handleEmail = (e) => {
    //     const {name, value} = e.target;
    //     handleValidation(name, value)
    //     setEmail(value);
    // }

    // const handlePassword = (e) => {
    //     const {name, value} = e.target;
    //     handleValidation(name, value);
    //     setPassword(value);
    // }   
    
    const handleSignIn = async () => {           
        const response = await fetch(`https://dummyjson.com/users`)
        const newData = await response.json()
        // setData(newData)
        const data = newData;
        console.log("Data",data);
        
        let newArray = data.users.filter(function (el)
        {
            return el.email === inputValue.email && el.password === inputValue.password
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
                    <Box className="textField">
                        <TextField
                        id="outlined-multiline-flexible"
                        label="Email"
                        name="email"
                        multiline
                        maxRows={5}
                        // value={email}
                        value={inputValue.email}
                        // onChange={handleEmail}
                        onChange={handleInput}
                        />
                        {/* <h5>{emailError}</h5> */}
                    </Box>
                    <Box className="textField">
                        <TextField
                        id="outlined-password-input"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        // value={password}
                        value={inputValue.password}
                        // onChange={handlePassword}
                        onChange={handleInput}
                        />
                        {/* <h5>{passwordError}</h5> */}
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