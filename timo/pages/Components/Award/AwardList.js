import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Image from 'next/image';

const AwardList = () => {
  return (
    <>
        <Box sx={{ flexGrow: 1 }} className="pb-16 mt-48">
            <Container maxWidth='' spacing={{ xs: 0, md: 0 }} className='p-0'>
                <Grid container spacing={0} >
                    <Grid item xs={12} lg={7} className='mx-auto'> 
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