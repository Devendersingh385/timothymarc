import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Buttons from '../Buttons/Buttons'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const EventsLists = () => {
  return (
    <>
        <Box sx={{ flexGrow: 1 }} className="pb-16 mt-48">
            <Container maxWidth='' spacing={{ xs: 0, md: 0 }} className='p-0'>
                <Grid container spacing={0} >
                    <Grid item xs={12} lg={4}>                        
                    <Card className='bg-cover bg-no-repeat bg-center overflow-hidden border-0 rounded-none shadow-none' sx={{ backgroundImage: `url('./event-1.jpg')`,  minHeight: '570px', }}>
                        <CardContent className='text-center flex items-center flex-col px-14 py-24'>
                            <Typography  className='text-white' sx={{ fontSize: '30px', fontFamily: 'Didot !important', lineHeight: 1.714 }} ><i>Past Event</i></Typography>
                            <Typography variant="h3" className='text-3xl font-bold text-white tracking-wider'>FREEDOM BUSINESS <br className='sm:hidden lg:block' /> THAILAND</Typography>
                            <Typography variant="h5" className='text-white tracking-wider mt-1' sx={{ fontSize: '26px' }}>25.01.13</Typography>
                            <Typography variant="subtitle1" className='text-white' 
                                sx={{
                                margin: '15px 50px',
                                fontSize: '17px',
                                lineHeight: 1.5

                            }}>In 2013 we ventured to Thailand for our first ever SSM Freedom Trip.
                            Over 30 members joined us for an incredible experience, with many
                            meeting each other face to face for the first time.</Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                    <Card className='bg-cover bg-no-repeat bg-center overflow-hidden border-0 rounded-none shadow-none' sx={{ backgroundImage: `url('./event-1.jpg')`,  minHeight: '570px', }}>
                        <CardContent className='text-center flex items-center flex-col px-14 py-24'>
                            <Typography  className='text-white' sx={{ fontSize: '30px', fontFamily: 'Didot !important', lineHeight: 1.714 }} ><i>Past Event</i></Typography>
                            <Typography variant="h3" className='text-3xl font-bold text-white tracking-wider'>FREEDOM BUSINESS <br className='sm:hidden lg:block' /> THAILAND</Typography>
                            <Typography variant="h5" className='text-white tracking-wider mt-1' sx={{ fontSize: '26px' }}>25.01.13</Typography>
                            <Typography variant="subtitle1" className='text-white' 
                                sx={{
                                margin: '15px 50px',
                                fontSize: '17px',
                                lineHeight: 1.5

                            }}>In 2013 we ventured to Thailand for our first ever SSM Freedom Trip.
                            Over 30 members joined us for an incredible experience, with many
                            meeting each other face to face for the first time.</Typography>
                        </CardContent>
                    </Card>
                    </Grid>                   
                    <Grid item xs={12} lg={4}>
                    <Card className='bg-cover bg-no-repeat bg-center overflow-hidden border-0 rounded-none shadow-none' sx={{ backgroundImage: `url('./event-1.jpg')`,  minHeight: '570px', }}>
                        <CardContent className='text-center flex items-center flex-col px-14 py-24'>
                            <Typography  className='text-white' sx={{ fontSize: '30px', fontFamily: 'Didot !important', lineHeight: 1.714 }} ><i>Past Event</i></Typography>
                            <Typography variant="h3" className='text-3xl font-bold text-white tracking-wider'>FREEDOM BUSINESS <br className='sm:hidden lg:block' /> THAILAND</Typography>
                            <Typography variant="h5" className='text-white tracking-wider mt-1' sx={{ fontSize: '26px' }}>25.01.13</Typography>
                            <Typography variant="subtitle1" className='text-white' 
                                sx={{
                                margin: '15px 50px',
                                fontSize: '17px',
                                lineHeight: 1.5

                            }}>In 2013 we ventured to Thailand for our first ever SSM Freedom Trip.
                            Over 30 members joined us for an incredible experience, with many
                            meeting each other face to face for the first time.</Typography>
                        </CardContent>
                    </Card>
                    </Grid>                   
                </Grid>                
            </Container>
        </Box> 
    </>
  )
}

export default EventsLists