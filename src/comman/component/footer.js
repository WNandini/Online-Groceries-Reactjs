import React from "react";
import { Container, Grid, Box, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LoopIcon from '@mui/icons-material/Loop';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useNavigate } from 'react-router-dom';
import '../style/footer.css';

const Footer = () => {
    const navigate = useNavigate();
    return(
        <>
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
                        <Typography onClick={()=>{navigate("/map")}} style={{color: 'rgb(244, 171, 45)',cursor: 'pointer'}}>Map</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        <Grid container className="copyRightMainDiv">
            <Grid item lg={6} xs={12}>
                <Box className="copyRightDiv"><Typography variant="h6">Copyright @ 2023 spacingtech all rights reserved</Typography></Box>
            </Grid>
            <Grid item lg={6} xs={12}>
                <Box className="socialMediaIcon">
                    <WhatsAppIcon style={{backgroundColor: "#fff", color: '#f4ab2d',padding: '5px', borderRadius: '50%', margin: '0px 10px'}}/>
                    <FacebookIcon style={{backgroundColor: "#fff", color: '#f4ab2d',padding: '5px', borderRadius: '50%', margin: '0px 10px'}}/>
                    <TwitterIcon style={{backgroundColor: "#fff", color: '#f4ab2d',padding: '5px', borderRadius: '50%', margin: '0px 10px'}}/> 
                    <InstagramIcon style={{backgroundColor: "#fff", color: '#f4ab2d',padding: '5px', borderRadius: '50%', margin: '0px 10px'}}/>
                    <PinterestIcon style={{backgroundColor: "#fff", color: '#f4ab2d',padding: '5px', borderRadius: '50%', margin: '0px 10px'}}/>
                    <YouTubeIcon style={{backgroundColor: "#fff", color: '#f4ab2d',padding: '5px', borderRadius: '50%', margin: '0px 10px'}}/> 
                </Box>
            </Grid>
        </Grid>
        </> 
    )
}

export default Footer;