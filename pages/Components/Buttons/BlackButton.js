import React from 'react';
import Button from '@mui/material/Button';

const BlackButton = ({ title, url}) => {
  return (
    <>
        <Button 
            size='large' 
            variant="outlined" 
            href={url}
            sx={{
              backgroundColor: 'transparent',
              fontSize: '16px',
              border: '2px solid #000',
              padding: '10px 30px 12px 32px',
              textAlign: 'center',
              lineHeight: 1.3,
              fontWeight: 600,
              borderRadius: 0,
              letterSpacing: '.1em',
              marginTop: '25px',
              transition: 'all .4s ease',
              textTransform: 'capitalize',
              color: '#000',
              "&:hover": {
                backgroundColor: '#000',
                color: '#fff',
                border: '2px solid #000',
              }
            }}         
          >
            {title}            
          </Button>
    </>
  )
}

export default BlackButton