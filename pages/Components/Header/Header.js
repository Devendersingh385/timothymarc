import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Navbar from './Navbar';
import SearchInput from './SearchInput';
import Cart from './Cart';
import SocialLink from './SocialLink';
import Image from 'next/image';
import Buttons from '../Buttons/Buttons';


const Header = () => {
  return (
    <>
    <Box className='fixed top-0 left-0 right-0 z-10' sx={{
        padding: '30px 40px'
    }}>
        <Container maxWidth="">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid xs={12} className="pb-0" >
                        <ul className='flex items-center justify-between'>
                            <li>
                                <Link href="/">                                   
                                    <Image
                                        src='/main-logo.png'
                                        alt=''
                                        width={241}
                                        height={45}
                                        /> 
                                </Link>
                            </li>
                            <li>
                                <Buttons title='Get Started' />
                            </li>                             
                        </ul> 
                    </Grid>                                       
                </Grid>
            </Box>
        </Container>
    </Box>
    </>
  )
}

export default Header


