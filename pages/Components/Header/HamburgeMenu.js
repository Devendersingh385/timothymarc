import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link';
import Navbar from './Navbar';

const HamburgeMenu = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = ()=> {
        console.log('123')
        setOpen(true);
    }

  return (
    <>   
       
        <button onClick={handleOpen} type="button" className='menuToggle'>
            <div class="hambox">
                <span className='lineTop'></span>
                <span className='lineBottom'></span>
            </div>
        </button>
        {/* <button onClick={handleClose}>
            <CloseIcon />
        </button> */}
       
    </>
  )
}

export default HamburgeMenu