import React, { useState } from 'react';
import { Typography, Box, Tabs, Tab, Grid } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import './landingPage.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
        >
            {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
    );
}
  
const Product = () => {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const handleChangeIndex = (index) => {
        setValue(index);

    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return(
        <>
            <Box className="ourProductsHead">
                <Typography variant="h3">Our Products</Typography>
            </Box>
            <Tabs value={value} onChange={handleChange} centered className="borderBottom">
                <Tab label="SPECIAL PRODUCT" />
                <Tab label="NEW PRODUCT" />
                <Tab label="BESTSELLER" />
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                   <Grid container>
                        <Grid item xs={3}>
                            <Box className="productMainDiv">
                                <img src="assets/images/cat3.jpg" alt=""/>
                                <Box>
                                    <FavoriteIcon/>
                                    <ShoppingBagIcon/>
                                    <RemoveRedEyeIcon/>
                                </Box>
                            </Box>
                        </Grid> 
                        <Grid item xs={3}>
                            <Box>
                                <img src="assets/images/cat3.jpg" alt=""/>
                            </Box>
                        </Grid> 
                        <Grid item xs={3}>
                            <Box>
                                <img src="assets/images/cat3.jpg" alt=""/>
                            </Box>
                        </Grid> 
                        <Grid item xs={3}>
                            <Box>
                                <img src="assets/images/cat3.jpg" alt=""/>
                            </Box>
                        </Grid> 
                   </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                   NEW PRODUCT
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    BESTSELLER
                </TabPanel>
            </SwipeableViews>
        </>
    )
}   

export default Product;