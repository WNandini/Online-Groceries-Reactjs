import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import "../style/auth.css";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState(null);

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://dummyjson.com/users`)
            const newData = await response.json()
            setData(newData)
        };

        fetchData();
    }, [])    
    
    const handleSignIn = () => {
        // For method to check that value exist in array of object or not 

            // for(let i=0;i<data.users.length;i++){
            //     if(data.users[i].email === email && data.users[i].password === password){
            //         navigate('/')
            //     }
            // }

        // Filter method to check that value exist in array of object or not 

            // let newArray = data.users.filter (function (el)
            //     {
            //         return el.email === email && el.password === password
            //     }
            // )
            // if(newArray.length === 1){
            //     navigate('/')
            // }

            // let result = data.users.filter((el)=>{
            //         return (el.email===email && el.password === password) ? navigate('/') :null
            // })
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
                        multiline
                        maxRows={5}
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
                        <Button variant="contained" onClick={handleSignIn}>Sign In</Button>
                    </Box>
                    <Box className="forgotPasText">
                        <Link>Forgot your password?</Link>
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