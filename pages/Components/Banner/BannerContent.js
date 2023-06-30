/* eslint-disable react/jsx-no-undef */
import React from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from '@mui/joy/Typography';
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Link from 'next/link';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BannerContent = () => {
  return (
    <>
       <Box className='h-screen'>
        <Container
          maxWidth=""
          spacing={{ xs: 0, md: 0 }}
          sx={{
            padding: 0,
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} lg={12} className="overflow-hidden">
              <Card component="li" className='h-screen'>
                <CardCover sx={{                    
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
                    className="rounded-none h-screen"
                    autoPlay
                    loop
                    muted
                    poster="https://assets.codepen.io/6093409/river.jpg"                    
                  >
                    <source
                      src="./banner-vid.mp4"
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
                    mt={{ xs: 12, sm: 18 }}
                    sx={{
                    fontSize: "2.8vw",
                    fontFamily: "Didot !important",
                    lineHeight: 1.18,
                    letterSpacing: '.05em',
                    fontWeight: 400,
                    }}
                >
                    <i>Are you</i>
                </Typography>
                <Typography
                    variant="h1"
                    className="tracking-wider"
                    textColor="#e9e9e9"
                    sx={{
                      fontSize: "3.82vw",
                      lineHeight: .9,
                      fontWeight: 100,
                      letterSpacing: ".075em",
                      fontFamily: "Aileron !important",
                      textTransform: 'uppercase',
                      marginTop: '25px'
                    }}
                  >
                    Looking To Grow <br className='hidden lg:block'/>
                    An Online Business?
                  </Typography>
                  <Box sx={{
                        marginTop: '70px'
                    }}>
                    <Link href="https://vimeo.com/156204212" underline="none" color='dark' sx={{
                        svg: {
                            r: '50%',
                            cx: '50%',
                            cy: '50%',
                            strokeWidth: '2px',
                            strokeDasharray: 377,
                            strokeDashoffset: 377,
                            transition: 'all 1.5s ease',
                            Animation: 'playStroke 3s ease'
                        },
                        "&:hover svg": {
                            strokeDashoffset: 0
                        }
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg"><circle className="stroke" stroke="#ffffff" fill="transparent"></circle></svg>
                        <PlayCircleIcon sx={{
                            width: '105px',
                            height: '105px',
                            color: '#fff'
                        }} />
                        <br className='hidden lg:block' />
                        <Typography
                        variant="body2"
                        className="tracking-wider"
                        textColor="#e9e9e9"
                        sx={{
                        fontSize: "15px",
                        lineHeight: .9,
                        letterSpacing: ".05em",
                        marginTop: '5px'
                        }}
                    >
                        <i>Watch Video</i>
                    </Typography>
                    </Link>
                  </Box>
                  <Link href='' className='animate-bounce absolute bottom-8'><KeyboardArrowDownIcon sx={{ color: '#fff', width: '40px', height: '40px' }}/></Link>
                </CardContent>
              </Card>
            </Grid>           
          </Grid>
        </Container>
      </Box> 
    </>
  )
}

export default BannerContent