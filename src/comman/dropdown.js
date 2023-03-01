import React from "react";
import { Container, Box, Typography,Divider, Grid } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import './dropdown.css'

const Dropdown = () => {
    return(
       <>
        <Container maxWidth="false" className="dropDownContainer">
            <Box className="dropdownMainDiv">
                <Box className="menu-bar">
                    <ul>
                        <li className="active">
                            <a href="#">Home <KeyboardArrowDownIcon/></a>
                                <Box className="sub-menu-1">
                                    <ul>
                                        <li className="hover-me">
                                            <a href="#">Vegist home 01<KeyboardArrowRightIcon/></a>
                                            <Box className="sub-menu-2">
                                                <ul>
                                                    <li><a href="#">Vegist home 01</a></li>
                                                    <li><a href="#">Vegist home 01 (RTL)</a></li>
                                                    <li><a href="#">Vegist home 01 (BOX)</a></li>
                                                </ul>
                                            </Box>
                                        </li>
                                        <li><a href="#">Vegist home 02</a></li>
                                        <li><a href="#">Vegist home 03</a></li>
                                        <li><a href="#">Vegist home 04</a></li>
                                        <li><a href="#">Vegist home 05</a></li>
                                        <li><a href="#">Vegist home 06</a></li>
                                    </ul>
                                </Box>
                        </li>
                        <Divider orientation="vertical" flexItem/>
                        <li><a href="#">Shop<KeyboardArrowDownIcon/></a>
                            <Box className="shop-1">
                                <Grid container>
                                    <Grid item xs={3}>
                                        <Typography variant="h3">Fresh food</Typography> 
                                        <Typography variant="h5">Fruit & nut</Typography>
                                        <Typography variant="h5">Snack foods</Typography>
                                        <Typography variant="h5">Organics nut gifts</Typography>
                                        <Typography variant="h5">Non-dairy</Typography>
                                        <Typography variant="h5">Blackberry organic</Typography>
                                        <Typography variant="h5">Fresh & healthy food</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="h3">Mixedfruits</Typography>
                                        <Typography variant="h5">Oranges</Typography>
                                        <Typography variant="h5">Ghee beverages</Typography>
                                        <Typography variant="h5">Ranch salad</Typography>
                                        <Typography variant="h5">Fresh avocado</Typography>
                                        <Typography variant="h5">Fresh blueberry</Typography>
                                        <Typography variant="h5">Fresh apple (5kg)</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="h3">Bananas & plantains</Typography>
                                        <Typography variant="h5">Fresh gala</Typography>
                                        <Typography variant="h5">Fifts mixed fruits</Typography>
                                        <Typography variant="h5">Fresh organic</Typography>
                                        <Typography variant="h5">Vegetable tomato</Typography>
                                        <Typography variant="h5">Fresh litchi 100% organic</Typography>
                                        <Typography variant="h5">Fresh blueberry</Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="h3">Apples berries</Typography>
                                        <Typography variant="h5">Pears produce</Typography>
                                        <Typography variant="h5">Fresh green orange</Typography>
                                        <Typography variant="h5">Blackberry 100% organic</Typography>
                                        <Typography variant="h5"> Fresh grassben</Typography>
                                        <Typography variant="h5">Deli roll cake</Typography>
                                        <Typography variant="h5">Fresh grassben</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                        </li>
                        <Divider orientation="vertical" flexItem/>
                        <li><a href="#">Collection<KeyboardArrowDownIcon/></a></li>
                        <Divider orientation="vertical" flexItem/>
                        <li><a href="#">Pages<KeyboardArrowDownIcon/></a></li>
                        <Divider orientation="vertical" flexItem/>
                        <li><a href="#">Blogs<KeyboardArrowDownIcon/></a></li>
                        <Divider orientation="vertical" flexItem/>
                        <li><a href="#">Buy vegist<KeyboardArrowDownIcon/></a></li>
                    </ul>
                </Box>
                <Box className="headphoneMainDiv">
                    <Box className="headphoneIcon"><HeadsetMicIcon/></Box>
                    <Box className="hotlineText">
                        <Typography variant="h2">Hotline:</Typography>
                        <Typography variant="h3">0123 456 789</Typography>
                    </Box>
                </Box>
            </Box>
        </Container>
        </>
    )
}

export default Dropdown;