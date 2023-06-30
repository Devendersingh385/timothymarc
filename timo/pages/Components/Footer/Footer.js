import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <>
    <Box     
        sx={{
            background: '#1e1e1e',
            padding: '80px',
            Link : {
                fontSize: '14px',
                color: '#717171'
            }
            

    }}
    > 
    <Container maxWidth="" spacing={0} sx={{ padding: 0 }}>
        <Grid container spacing={0}>
        <Grid item xs={9} sx={{ padding: 0 }}>
            <Image 
                src='/footer-logo.png' 
                alt=''
                width={200}  
                height={40}              
                className='mt-4'
                />
            <Typography 
                variant="body2" 
                display="block" 
                gutterBottom
                sx={{
                    color: '#717171'
                }}
                >
                TIMOTHY MARC, ALL RIGHTS RESERVED
            </Typography>
        </Grid>                
        <Grid item xs={2} sx={{ padding: 0 }}>
            <List>
                <ListItem disablePadding>
                    <Link 
                        href="https://www.facebook.com/timothymarcofficial" 
                        className='text-sm no-underline'
                        sx={{                           
                           color: '#717171' 
                        }}>
                        <ListItemText primary="Facebook" />
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link 
                        href="https://twitter.com/timothymarc/"
                        className='text-sm no-underline'
                        sx={{                           
                           color: '#717171' 
                        }}
                        >
                        <ListItemText primary="Twitter" />
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link 
                        href="https://www.instagram.com/freedombusiness/"
                        className='text-sm no-underline'
                        sx={{                           
                           color: '#717171' 
                        }}>
                        <ListItemText primary="Instagram" />
                    </Link>
                </ListItem>
                <ListItem disablePadding>
                    <Link 
                        href="https://www.youtube.com/c/TimothyMarcOfficial"
                        className='text-sm no-underline'
                        sx={{                           
                           color: '#717171' 
                        }}>
                        <ListItemText primary="YouTube" />
                    </Link>
                </ListItem>
            </List>
        </Grid>                
        <Grid item xs={1} sx={{ padding: 0 }}>
            <List>
                    <ListItem disablePadding>
                        <Link 
                            href="https://www.facebook.com/timothymarcofficial"
                            className='text-sm no-underline'
                            sx={{                           
                            color: '#717171' 
                            }}>
                            <ListItemText primary="Privacy Policy" />
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link 
                            href="https://twitter.com/timothymarc/"
                            className='text-sm no-underline'
                            sx={{                           
                            color: '#717171' 
                            }}
                            >
                            <ListItemText primary="Site Disclaimer" />
                        </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link 
                        href="https://www.instagram.com/freedombusiness/"
                        className='text-sm no-underline'
                        sx={{                           
                           color: '#717171' 
                        }}
                        >
                            <ListItemText primary="Return Policy" />
                            </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link 
                        href="https://www.youtube.com/c/TimothyMarcOfficial"
                        className='text-sm no-underline'
                        sx={{                           
                           color: '#717171' 
                        }}
                        >
                            <ListItemText primary="Terms & Conditions" />
                            </Link>
                    </ListItem>
                    <ListItem disablePadding>
                        <Link 
                        href="https://www.youtube.com/c/TimothyMarcOfficial"
                        className='text-sm no-underline'
                        sx={{                           
                           color: '#717171' 
                        }}
                        >
                            <ListItemText primary="Delivery Information" />
                            </Link>
                    </ListItem>
                </List>
        </Grid>
        </Grid>
    </Container>
    </Box>
    </>
  )
}

export default Footer