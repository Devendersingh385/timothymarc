/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BlackButton from "../Buttons/BlackButton";

const AboutContent = () => {
  return (
    <>
      <Box sx={{
        color:'#1e1e1e'
      }}>        
        
        <Typography
          variant="body1"
          sx={{
            fontSize: '18px',
            lineHeight: '1.7',
            letterSpacing: '.05em',
            fontWeight: "400",
            marginBottom: "20px",
            padding: 0
          }}
        >
          Timothy Marc is for startup and established entrepreneurs who want to build a business that funds a life of freedom and adventure.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '18px',
            lineHeight: '1.7',
            letterSpacing: '.05em',
            fontWeight: "400",
            marginBottom: "20px",
            padding: 0
          }}
        >
          We work with individuals and organisations to launch wildly profitable online businesses and marketing campaigns from scratch, in the shortest possible time, so that you have the true freedom to wake up and do exactly what you want with your time.
        </Typography>
        <BlackButton title='More' url='/timeline' />
      </Box>
    </>
  );
};

export default AboutContent;
