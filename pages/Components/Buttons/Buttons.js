import React from 'react';
import Button from '@mui/material/Button';


const Buttons = ({title}) => {
  return (
    <>    
          <Button 
            size='large' 
            variant="contained" 
            sx={{
              backgroundColor: 'transparent',
              border: '2px solid #fff',
              padding: '10px 0 12px',
              textAlign: 'center',
              lineHeight: 1,
              fontWeight: 400,
              minWidth: '160px',
              borderRadius: 0,
              "&:hover": {
                backgroundColor: '#fff',
                color: '#000'
              }
            }}         
          >
            {title}            
          </Button>
    </>
  )
}

export default Buttons