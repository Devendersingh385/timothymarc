import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link';
import Navbar from './Navbar';
import { Box, Button, IconButton, SwipeableDrawer, Typography } from '@mui/material';
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Image from 'next/image';
import { Main } from 'next/document';


const HamburgeMenu = () => {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box className='hamburg' sx={{
            marginLeft: '100px'
        }}>
            {/* <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                sx={{ ...(open && { display: 'none' }), width: "40px", height: "40px", color: "white" }}
            >
                <MenuIcon />
            </IconButton>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerClose}
                sx={{ ...(!open && { display: 'none' }), width: "40px", height: "40px", color: "white" }}
            >
                <CloseIcon />
            </IconButton> */}

            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <MenuIcon sx={{
                            width: '35px',
                            height: '35px',
                            color: '#fff',                            
                        }}/>
                    </Button>
                    <SwipeableDrawer
                        className='w-screen'
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        <Card component="li" className='h-screen w-screen'>
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
                            >
                                <CloseIcon className='sideBar-header' onClick={toggleDrawer(anchor, false)} 
                                    sx={{
                                        width: '35px',
                                        height: '35px',
                                        color: '#fff',                            
                                    }}
                                />

                                <div className='sidebarMenu'>
                                    <div className='sidebarcol'>
                                        <ul>
                                            <li><Link href="">Home</Link></li>
                                            <li><Link href="">About</Link></li>
                                            <li><Link href="">Videos</Link></li>
                                            <li><Link href="">Testimonials</Link></li>
                                            <li><Link href="">Events</Link></li>
                                            <li><Link href="">Contact</Link></li>
                                        </ul>
                                    </div>
                                    <div className='sidebarcol2'>
                                        <h3>
                                            <Link href="">Products</Link>
                                        </h3>
                                        <ul>
                                            <li><Link href="">03 Day Bootcamp</Link></li>
                                            <li><Link href="">Secret Society Mastermind</Link></li>
                                            <li><Link href="">Timothy Marc Black</Link></li>
                                        </ul>
                                    </div>
                                    <div className='sidebarcol3'>
                                        <h3>
                                            <Link href="">Socials</Link>
                                        </h3>
                                        <ul>
                                            <li><Link href="">Facebook</Link></li>
                                            <li><Link href="">Twitter</Link></li>
                                            <li><Link href="">Instagram</Link></li>
                                            <li><Link href="">YouTube</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <Image className='menu-logo' src="/main-logo.png" alt='' width={175} height={35} />
                            </CardContent>
                        </Card>
                    </SwipeableDrawer>
                </React.Fragment>
            ))}

        </Box>
    )
}

export default HamburgeMenu