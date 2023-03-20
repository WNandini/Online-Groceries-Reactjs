import React from "react";
import { Container, Grid, Box, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LoopIcon from '@mui/icons-material/Loop';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import '../style/footer.css';

const Footer = () => {
    return(
        <Container maxWidth="false" >
            <Grid container className="footerMainContainer">
                <Grid item lg={3} xs={12} sm={6}>
                    <Box className="iconMainBox">
                        <LocalShippingIcon className="icon" style={{color: "#fff", backgroundColor: '#f4ab2d',width: '45px',height: '45px'}}/>
                        <Typography variant="h6">Locations</Typography>
                    </Box>
                </Grid>
                <Grid item lg={3} xs={12} sm={6}>
                    <Box className="iconMainBox">
                        <CurrencyRupeeIcon className="icon" style={{color: "#fff", backgroundColor: '#f4ab2d',width: '45px',height: '45px'}}/>
                        <Typography variant="h6">Cash on delivery</Typography>
                    </Box>
                </Grid>
                <Grid item lg={3} xs={12} sm={6}>
                    <Box className="iconMainBox">
                        <LoopIcon className="icon" style={{color: "#fff", backgroundColor: '#f4ab2d',width: '45px',height: '45px'}}/>
                        <Typography variant="h6">30 days returns</Typography>
                    </Box>
                </Grid>
                <Grid item lg={3} xs={12} sm={6}>
                    <Box className="iconMainBox">
                        <HeadphonesIcon className="icon" style={{color: "#fff", backgroundColor: '#f4ab2d',width: '45px',height: '45px'}}/>
                        <Typography variant="h6">Online support</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container className="addressDiv">
                <Grid item lg={4} xs={12}>
                    <Box className="logoFooter">
                        <img src="assets/icons/logo.svg" alt="Logo"/>
                        <Typography>Lorem ipsum iasds simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</Typography>
                    </Box>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Box className="addressMainDiv">
                        <Box>
                            <LocationOnIcon style={{color: "#f4ab2d",width: '40px',height: '40px'}}/>
                            <Typography>Address</Typography>
                        </Box>
                        <Typography>38 block street arean licard hamonia road sydney, australia </Typography>
                    </Box>
                </Grid>
                <Grid item lg={4} xs={12}>
                    <Box className="phoneMainDiv">
                        <Box>
                            <LocalPhoneIcon style={{color: "#f4ab2d",width: '40px',height: '40px'}}/>
                            <Typography>Get in touch</Typography>
                        </Box>
                        <Typography>(+800) 1234 5678 90</Typography>
                        <Typography>support@demo.com</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Footer;