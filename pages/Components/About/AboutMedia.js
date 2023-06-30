/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const AboutMedia = () => {
  return (
    <>
   <Box className='pl-32 pe-16'>
      <Typography
        className=""
        sx={{
          fontSize: "28px",
          fontFamily: "Didot !important",
          lineHeight: 1.6,
          letterSpacing: '.1em',
          color: '#1e1e1e'
        }}
      >
        <i>You don't have a business until you sell something. And we’re the people who get things sold. Because we believe that in business, everything else is secondary to making your cash register ring. Whether you’re selling widgets, wagons, whiskey or wisdom... The process of getting somebody to pull out their credit card and buy your product is a science... and we're dedicated to applying this science for maximum profit and maximum customer satisfaction.</i>
      </Typography>
      <Typography
        variant="subtitle1"
        className=""
        sx={{
          fontSize: "18px", 
          marginTop: '50px',
          letterSpacing: '.05em',
          color: '#8bbfe4'
        }}
      >
        Timothy Marc, Founder and CEO
      </Typography>
   </Box>
    </>
  );
};

export default AboutMedia;
