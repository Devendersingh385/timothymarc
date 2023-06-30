import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

const AwardList = ({ title }) => {
  return (
    <>
        <Box sx={{ flexGrow: 1 }} className="py-28">
            <Container maxWidth='' spacing={{ xs: 0, md: 0 }} className='p-0'>
                <Grid container spacing={0} className='justify-center'>
                    <Grid item xs={12} lg={8} className='mx-auto'> 
                        <Typography variant='h3' className='text-center pb-8 tracking-wider' sx={{ fontSize: '24px', fontFamily: 'Didot !important', lineHeight: 1.714 }} ><i>{title}</i></Typography>
                        <Box className='flex justify-center items-center'>                            
                            <Image 
                                src='/freedom-business.png' 
                                alt=''
                                width={182}
                                height={106}
                                className='mx-auto'
                            />
                            <Image 
                                src='/business-live.png' 
                                alt=''
                                width={182}
                                height={106}
                                className='mx-auto'
                            />
                            <Image 
                                src='/awards.png' 
                                alt=''
                                width={182}
                                height={106}
                                className='mx-auto'
                            />
                            <Image 
                                src='/studies.png' 
                                alt=''
                                width={182}
                                height={106}
                                className='mx-auto'
                            />
                        </Box>                       
                    </Grid>                                       
                </Grid>                
            </Container>
        </Box>     
    </>
  )
}

export default AwardList