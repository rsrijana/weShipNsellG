import { Button } from '@mui/material'
import React from 'react'

const CustomModal = () => {

    handleOpen = ()=>{
        console.log("add user botton is clicked")
    }
  return (
    <div className='dashboard'>
      <Button variant='outlined' onClick={handleOpen}>
        
      </Button>
    </div>
  )
}

export default CustomModal
