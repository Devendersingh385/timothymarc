/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/joy/Typography';

const itemData = [
  {
    id: "1",
    title: "700+",
    subTitle: "Clients Worldwide",
    description:
      "Training, Marketing And Product Launches For Brand New Startups Through To Established Companies",
  },
  {
    id: "2",
    title: "58",
    subTitle: "Countries Globally",
    description:
      "We Help People And Organisations In Just About Every Major City In The World",
  },
  {
    id: "3",
    title: "11",
    subTitle: "Cities Visited",
    description:
      "Our Freedom Business Events Have Taken Us All Around The Globe",
  },
  {
    id: "4",
    title: "12",
    subTitle: "Week Training Course",
    description:
      "How To Build A Business That Funds A Life Of Freedom + Adventure",
  },
  {
    id: "5",
    title: "300+",
    subTitle: "Online Business Launches",
    description:
      "In A Diverse Range Of Industries And Professions",
  },
];

const WorkList = () => {
  return (
    <>
      {itemData.map((item) => (
        <Grid item xs={12} display="flex" alignItems="center" justifyContent="center"
        sx={{ 
          padding: '30px 75px 50px',
          borderRight: '1px solid #4f4f4f',
          "& .MuiGrid-container:last-child": {
            borderRight: 'unset'
          }
          
          
          }}>
          <Box
            key={item.id}
            sx={{
              width: "100%",
            }}
          >
            <Typography
                    variant="h3"
                    className="tracking-wider"
                    textColor="#d1d1d1"
                    sx={{
                      fontSize: "36px",
                      lineHeight: 1.6667,
                      letterSpacing: ".05em",
                      fontWeight: 700,
                      padding: 0
                    }}
                  >
                    {item.title}
                  </Typography>
            <Typography
                    variant="body1"                    
                    textColor="#a1a1a1"
                    sx={{
                      fontSize: "18px",
                      lineHeight: 1.5,
                      fontWeight: 400,
                      padding: 0
                    }}
                  >
                    {item.subTitle}
                  </Typography>
            <Typography
                    variant="body1"                    
                    textColor="#a1a1a1"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      marginTop: '10px',
                      lineHeight: '1.2',
                      padding: 0
                    }}
                  >
                    {item.description}
                  </Typography>
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default WorkList;
