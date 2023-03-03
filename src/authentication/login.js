import React from 'react';
import Header from "../comman/header";
import Dropdown from "../comman/dropdown";
import { Grid, Box, Typography, TextField, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import "./auth.css";

const Login = () => {
    return(
        <>
        <Header/>
        <Dropdown/>
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
                        />
                    </Box>
                    <Box className="textField">
                        <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        />
                    </Box>
                    <Box className='darkBtn'>
                        <Button variant="contained">Sign In</Button>
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
                        <Button variant="contained">Create account</Button>
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