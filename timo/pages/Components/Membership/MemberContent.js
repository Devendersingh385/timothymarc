import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

const MemberContent = () => {
  return (
    <>
         <Box sx={{ backgroundImage: `url('./membership-bg.jpg')` }} className="pt-28 pb-7 bg-cover bg-no-repeat bg-center overflow-hidden bg-fixed">
            <Container maxWidth='' spacing={{ xs: 0, md: 0 }} className='p-0'>
                <Grid container spacing={0} >
                    <Grid item xs={12} lg={12}>                        
                       <Box>
                            <Image 
                                src='/menu-logo.png' 
                                alt=''
                                width={220}
                                height={40}
                                className='mx-auto'
                            />
                            <Image 
                                src='/black.png' 
                                alt=''
                                width={995}
                                height={105}
                                className='mx-auto mt-12'
                            />                            
                       </Box>
                       <Box sx={{
                            maxWidth: '800px'                            
                       }}
                       className='mx-auto text-center'
                       >
                        <Typography variant='body1' className='text-lg mt-12' sx={{ color: '#686868', fontSize: '30px', lineHeight: 1.7, letterSpacing: '.2em' }} >A PRIVATE MEMBERSHIP CLUB OF BUSINESS VETERANS WITH <br className='sm:hidden lg:block' /> CUSTOM MARKETING CAMPAIGNS BUILT EXCLUSIVELY BY TIMOTHY <br className='sm:hidden lg:block' /> MARC</Typography>
                        <Typography variant='body1' className='text-lg mt-16' sx={{ color: '#686868', fontSize: '15px', lineHeight: 1.7, letterSpacing: '.2em' }} ><i>Membership is currently full</i></Typography>
                       </Box>
                    </Grid>                                   
                </Grid>                
            </Container>
        </Box> 
    </>
  )
}

export default MemberContent