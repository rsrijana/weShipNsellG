import React from 'react'
import Button from '@mui/material/Button';
const CustomBtn  = ({ name, IconComponent, onClick }) => {
    return (
            <Button 
              variant="text" 
              startIcon={<IconComponent />} 
              onClick={onClick} 
              sx ={{
                textTransform: 'none',
                color: '#637381', 
                backgroundColor:'#f9fafb', fontSize:'14px', 
                height:'50px',
                letterSpacing:'normal',
                textAlign:'left',
                justifyContent: 'flex-start' // Align text to the left
               
              }}
            >
              {name}
            </Button>
    );
}

export default CustomBtn
