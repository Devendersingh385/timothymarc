import React, { useEffect, useState } from 'react';
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
import HamburgeMenu from './HamburgeMenu';




const Header = () => {
const [scroll, setScroll] = useState(false)

useEffect(()=>{
    window.addEventListener("scroll", ()=> {
        setScroll(window.scrollY > 10)
    })
},[])

  return (
    <>
    <Box className={scroll ? 'main-header scrolled fixed top-0 left-0 right-0 z-10' : 'main-header fixed top-0 left-0 right-0 z-10'}>
        <Container maxWidth="">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                    <Grid xs={12} className="pb-0" >
                        <ul className='flex items-center justify-between'>
                            <li>
                                {
                                    scroll 
                                    ?
                                    <Link href='/'>
                                    <Image
                                        src='/logo-white.png'
                                        alt=''
                                        width={37}
                                        height={38}
                                        /> 
                                </Link>
                                :
                                <Link href="/">                                   
                                <Image
                                    src='/main-logo.png'
                                    alt=''
                                    width={241}
                                    height={45}
                                    /> 
                                </Link>
                                }  
                            </li>
                            <li className='flex align-middle justify-center'>
                                <Buttons title='Get Started' />
                                <HamburgeMenu  />
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


