import React from "react";
import { useTheme } from '@mui/material/styles';
import { Box, Icon, Button, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import './landingPage.css';
import Timer from "./timer";
import Product from "./products";
import objectCollection from '../objectCollection.js';

const Landingpage = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

    const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
    setActiveStep(step);
    };

    return(
        <>
            {/* Carousal Section Start*/}
            <Box>                
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {objectCollection.SliderImages.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                        <>
                            <Box    
                                className="carousalImages"
                                component="img"
                                sx={{
                                display: 'block',
                                position: 'relative',
                                overflow: 'hidden',
                                width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />                            
                                <Box className={step.id === 1 ? ["carouselText","centerAlign"]: "displayNone"}>
                                    <Typography variant='p'>Top Selling</Typography>
                                    <Typography variant='h2'>Fresh for your health</Typography>
                                        <Box className="shopNowBtn"><Button>Shop now</Button></Box>
                                </Box>
                                <Box className={step.id === 2 ? ["carouselText","leftAlign"]: "displayNone"}>
                                    <Typography variant='p'>Summer vege sale</Typography>
                                    <Typography variant='h2'>Fresh fruits & <br/>vegetables</Typography>
                                        <Box className="shopNowBtn"><Button>Shop now</Button></Box>
                                </Box>
                                <Box className={step.id === 3 ? ["carouselText","rightAlign"]: "displayNone"}>
                                    <Typography variant='p'>Organic Indian Masala</Typography>
                                    <Typography variant='h2'>Prod of Indian <br/>100% packaging</Typography>
                                        <Box className="shopNowBtn"><Button>Shop now</Button></Box>
                                </Box>
                                <Box>
                            </Box>
                        </>
                        ) : null}
                    </div>
                    ))}
                </AutoPlaySwipeableViews>
            </Box>
            <Box className="leftRightMainDiv">
                <Box className="leftRightIcon">
                    <Icon onClick={handleNext} className="leftIcon"><KeyboardDoubleArrowLeftIcon/></Icon>
                    <Icon onClick={handleBack} className="rightIcon"><KeyboardDoubleArrowRightIcon/></Icon>
                </Box>
            </Box>
            {/* Carousal Section End*/}
            {/* Banner Section Start */}
            <Box className="bannerMainBox">
                <Grid container>    
                    <Grid xs={12} lg={6}>
                        <Box className="bannerImage1">
                            <img src='assets/images/banner1.jpg' alt="banner1"/>
                            <Box className="bannerText1">
                                <Typography variant="h3">Fresh fruit, vegetable on our product</Typography>
                                <Box className="shopBtnBanner"><Button>Shop Now</Button></Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={12} lg={6}>
                        <Box className="bannerImage2">
                            <img src='assets/images/banner2.jpg' alt="banner2"/>
                            <Box className="bannerText2">
                                <Typography variant="h3">Vegetable eggplant 100% fresh food</Typography>
                                <Box className="shopBtnBanner"><Button>Shop Now</Button></Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            {/* Banner Section End */}
            {/* Shop By Category Start */}
            {/* <Box className="shopByCatMainBox">
                <Box className="shopByCategoryHead">
                    <Typography variant="h3">Shop By Category</Typography>
                </Box>
                <Box className="imageContainerCarousal">
                    {objectCollection.CarousalImages.map((id,item) => {
                        <Box key={id} className="imageContainer">
                        <img src={item.images} alt='cat5'/>
                        <Box className="blackLayer"/>
                    </Box> 
                    })}
                    <Box className="imageContainer">
                        <img src='assets/images/cat5.jpg' alt='cat5'/>
                        <Box className="blackLayer"/>
                    </Box> 
                    <Box className="imageContainer">
                        <img src='assets/images/cat5.jpg' alt='cat5'/>
                        <Box className="blackLayer"/>
                    </Box> 
                    <Box className="imageContainer">
                        <img src='assets/images/cat5.jpg' alt='cat5'/>
                        <Box className="blackLayer"/>
                    </Box>
                </Box>               
            </Box> */}
            {/* <Timer/> */}
            <Product/>
            {/* <Box className="ourProductsHead">
                <Typography variant="h3">Our Products</Typography>
            </Box> */}
            {/* <Typography className="viewAllProduct">View All Product</Typography> */}
            {/* <Grid container>
            {objectCollection.Product.slice(0,4).map((item) => (
                <Grid item xs={3} key={item.id}>
                    <Box className="productMainDiv">
                        <img src={item.images} alt=""/>
                        <Box className="ProductDetails">
                            <h4>{item.name}</h4>
                            <h5>{item.price}</h5>
                        </Box>
                    </Box>
                </Grid>
            ))} */}
                {/* {objectCollection.Product.map((item) => 
                
                )} */}

            {/* </Grid>  */}
            {/* Shop By Category End*/}
        </>
    )
}

export default Landingpage;