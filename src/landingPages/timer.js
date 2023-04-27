import { Box, Typography } from "@mui/material";
import React from "react";

const Timer = () => {
    return(
        // <div className="backgroundForDealSection">
        //     <div className="textDealSection">
        //         <p>We offer a hot deal offer every festival</p>
        //         <h5>Deal of the day!</h5>
        //         <div>
        //             <div>
        //                 <h1>663</h1>
        //                 <p>DAY</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        
        <Box className="backgroundForDealSection">
            <Box className="textDealSection">
                <Typography>We offer a hot deal offer every festival</Typography>
                <Typography variant="h5">Deal of the day!</Typography>
                
            </Box>
        </Box>
    )
}

export default Timer;