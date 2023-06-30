import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AboutMedia from './AboutMedia';
import AboutContent from './AboutContent';
import Typography from "@mui/material/Typography";

const AboutUs = () => {
  return (
    <>
     <Box sx={{ padding: '6vw 0' }} >
            <Container maxWidth="xl">
                <Grid container spacing={2} display="flex" alignItems="start">
                    <Grid item xs={12} lg={12} className='pe-36'>                        
                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: '48px',
                            fontWeight: "400",
                            letterSpacing: '.025em',
                            marginBottom: "24px",
                        }}
                        >
                        Freedom + Adventure
                        </Typography>
                    </Grid>
                    <Grid item xs={12} lg={6} className='pe-36'>                        
                        <AboutContent />
                    </Grid>
                    <Grid item xs={12} lg={6} className='p-0'>
                        <AboutMedia />
                    </Grid>                   
                </Grid>                
            </Container>
        </Box>  
    </>
  )
}

export default AboutUs