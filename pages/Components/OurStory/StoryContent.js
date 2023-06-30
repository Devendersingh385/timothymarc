/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from '@mui/joy/Typography';
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Buttons from "@/timo/pages/Components/Buttons/Buttons";
import LinkButton from "../Buttons/LinkButton";

const StoryContent = () => {
  return (
    <>
      <Box>
        <Container
          maxWidth=""
          spacing={{ xs: 0, md: 0 }}
          sx={{
            padding: 0,
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} lg={6} className="overflow-hidden">
              <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
                <CardCover sx={{
                    height: '535px',
                    borderRadius: '0',
                    ":after": {
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        transition: '0.2s all ease-out',
                        content: '""',
                        zIndex: '1',
                        background: 'rgba(0,0,0,.5)',                        
                    },
                    video: {
                      borderRadius: '0 !important'
                    }
                }}>
                  <video
                    className="rounded-none"
                    autoPlay
                    loop
                    muted
                    poster="https://assets.codepen.io/6093409/river.jpg"                    
                  >
                    <source
                      src="./story.mp4"
                      type="video/mp4"
                    />
                  </video>
                </CardCover>
                <CardContent 
                 className="text-center flex items-center flex-col"
                 sx={{ padding: "96px 56px" }}
                >                  
                  <Typography
                    level="h6"
                    fontWeight="lg"
                    textColor="#fff"
                    mt={{ xs: 8, sm: 8 }}
                    sx={{
                    fontSize: "28px",
                    fontFamily: "Didot !important",
                    lineHeight: 1.6,
                    letterSpacing: '.1em',
                    fontWeight: 400,
                    }}
                >
                    <i>Watch</i>
                </Typography>
                <Typography
                    variant="h3"
                    className="tracking-wider"
                    textColor="#fff"
                    sx={{
                      fontSize: "43px",
                      lineHeight: 1,
                      fontWeight: 700,
                      letterSpacing: ".05em",
                      fontFamily: "Aileron !important",
                    }}
                  >
                    THE STORY
                  </Typography>
                  <LinkButton title='Play' url='https://vimeo.com/156204212' />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} lg={6} className="overflow-hidden">
              <Card
                className="bg-cover bg-no-repeat bg-center overflow-hidden"
                sx={{
                  backgroundImage: `url('./story-cover.jpg')`,
                  minHeight: "535px",
                  borderRadius: 0,
                  boxShadow: "unset",
                  transition: "transform 3s ease,-webkit-transform 3s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                <CardContent
                  className="text-center flex items-center flex-col"
                  sx={{ padding: "96px 56px" }}
                >
                   <Typography
                    level="h6"
                    fontWeight="lg"
                    textColor="#fff"
                    mt={{ xs: 8, sm: 8 }}
                    sx={{
                    fontSize: "28px",
                    fontFamily: "Didot !important",
                    lineHeight: 1.6,
                    letterSpacing: '.1em',
                    fontWeight: 400,
                    }}
                >
                    <i>About</i>
                </Typography>
                <Typography
                    variant="h3"
                    className="tracking-wider"
                    textColor="#fff"
                    sx={{
                      fontSize: "43px",
                      lineHeight: 1,
                      fontWeight: 700,
                      letterSpacing: ".05em",
                      fontFamily: "Aileron !important",
                    }}
                  >
                    TIMOTHY MARC
                  </Typography> 
                  <LinkButton title='More' url='/about' /> 
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default StoryContent;
