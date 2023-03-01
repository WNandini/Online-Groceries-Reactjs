import React from "react";
import Container from '@mui/material/Container';
import { Grid, Box, Typography } from "@mui/material";
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Badge from '@mui/material/Badge';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import './header.css';

const Header = () => {
    return(
        <Container maxWidth="false">
            <Grid container className="headerMainDiv">
                <Grid item xs={3}>
                    <Box className="logo">
                        <img src="assets/icons/logo.svg" alt="Logo"/>
                    </Box>
                </Grid>
                <Grid item xs={5}>
                    <Box className="searchAlignment">
                        <Box className="searchField">
                        <FormControl variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                placeholder="Search our store"
                                endAdornment={<InputAdornment position="end">
                                    <SearchIcon style={{backgroundColor: '#000',color: '#fff',}} className="searchIcon"/>
                                </InputAdornment>}
                                aria-describedby="outlined-weight-helper-text"
                            />
                        </FormControl>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box className="headerIconDiv">
                        <Box><MenuIcon/></Box> 
                        <Box className="accountMainDiv">
                            <Box className="accountIconMain"><AccountCircleIcon/></Box>
                            <Box className="accountText">
                                <Typography variant="h4">Account</Typography>
                                <Box className="registerText"> 
                                    <Typography>Register</Typography>
                                    <Divider orientation="vertical" flexItem style={{margin: '5px'}}/>
                                    <Typography>Login</Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Badge badgeContent={4} classes={{ badge: "badgeColor" }}>
                                <FavoriteIcon/>
                            </Badge>
                        </Box>
                        <Box>
                            <Badge badgeContent={4} classes={{ badge: "badgeColor" }}>
                                <ShoppingBagIcon />
                            </Badge>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Header;