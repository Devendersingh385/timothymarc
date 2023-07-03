import React from 'react';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { slide as Menu } from "react-burger-menu";

const theme = createTheme({
    typography: {
      smallText: {
        fontSize: 14,
        fontWeight: 400
      },      
    },
  });

const Navbar = () => {
  return (
        <>
        {/* <ThemeProvider theme={theme}>
            <Typography variant="smallText" className='px-3'><Link href="/" underline="none" color='dark'>Home</Link></Typography>
            <Typography variant="smallText" className='px-3'><Link href="#" underline="none" color='dark'>Service</Link></Typography>
            <Typography variant="smallText" className='px-3'><Link href="#" underline="none" color='dark'>About</Link></Typography>
            <Typography variant="smallText" className='px-3'><Link href="#" underline="none" color='dark'>Blog</Link></Typography>
            <Typography variant="smallText" className='px-3'><Link href="#" underline="none" color='dark'>Contact</Link></Typography>
            <Typography variant="smallText" className='px-3'><Link href="/products" underline="none" color='dark'>Products</Link></Typography>
            <Typography variant="smallText" className='px-3'><Link href="/login" underline="none" color='dark'>Login</Link></Typography>
            <Typography variant="smallText" className='px-3'><Link href="/signup" underline="none" color='dark'>Signup</Link></Typography>
        </ThemeProvider> */}
        <Menu>
          <Link className="menu-item" href="/">
            Home
          </Link>
          <Link className="menu-item" href="/salads">
            Salads
          </Link>
          <Link className="menu-item" href="/pizzas">
            Pizzas
          </Link>
          <Link className="menu-item" href="/desserts">
            Desserts
          </Link>
        </Menu>
        </>
  )
}

export default Navbar