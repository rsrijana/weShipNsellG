import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { v4 as uuidv4} from 'uuid';
// import { useNavigate  } from 'react-router-dom';
import Box from "@mui/material/Box";
import {Divider, IconButton, Stack} from "@mui/material";
import {DeleteOutline} from "@mui/icons-material";
import {useEffect} from "react";

const UserModal = ({open, close, inputData}) => {
  // const [open, setOpen] = React.useState(true);
  const [file, setFile] = React.useState(null);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  // let navigate = useNavigate();
  const handleClose = ()=>{
    if(close){
      close(false);
    }
  };
  const removeImage=()=>{
    setFile(null);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'address') setAddress(value);
    if (name === 'phone') setPhoneNumber(value);
  };

  const handleSubmit =()=>{
    const userData = {
      name: name,
      email: email,
      address: address,
      phoneNumber: phoneNumber
    }

    if(inputData){
      inputData(userData);
    }

    handleClose();
     console.log('User data:', userData)
  }

  useEffect(()=>{
    const savedImage = localStorage.getItem('file');
    if(savedImage){
      setFile(savedImage);
    }
  },[])

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile)
    {
      const reader = new FileReader();
      reader.onloadend =()=>{
        const base64String = reader.result;
        setFile(base64String);
        localStorage.setItem('file', base64String);
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  return (

 <div className='dashboard'>
   <Dialog
       open={open}
       onClose={handleClose}
       fullWidth // This makes the Dialog take full width
       maxWidth="lg" // Set the maximum width to 'lg' for a larger dialog
       sx={{
         '& .MuiDialog-paper': {
           width: '100%', // Takes full available width
           maxWidth: '900px', // Set your desired maximum width here
         },
       }}
   >
     <DialogTitle>Add User</DialogTitle>
     <Divider/>
     <Stack direction="row" sx={{ padding: 5 }}>
       <div style={{ flex: '0 0 30%', maxWidth: '30%' }}>
         <input type="file" onChange={handleChange}/>

         {/* Render the image preview with delete button only if there's a file */}
         {file && (
             <Box
                 sx={{
                   position: 'relative',
                   width: '80%',
                   maxWidth: '300px',
                   '&:hover .overlay': {
                     opacity: 1, // Show overlay on hover
                   },
                 }}
             >
               <img
                   src={file}
                   alt="Selected file preview"
                   style={{ width: '100%', borderRadius: '10px' }}
               />
               <Box
                   className="overlay"
                   sx={{
                     position: 'absolute',
                     bottom: 5,
                     right: 0.7,
                     width: '97.5%',
                     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black see-through
                     color: '#f1f1f1',
                     transition: '0.5s ease', // Smooth transition for overlay
                     opacity: 0, // Initially hidden
                     padding: '3px', // Smaller padding to fit better
                     textAlign: 'center',
                     borderRadius: '5px',
                   }}
               >
                 {/* Delete button inside the overlay */}
                 <IconButton
                     onClick={removeImage}
                     sx={{
                       color: 'white',
                     }}
                 >
                   <DeleteOutline />
                 </IconButton>
               </Box>
             </Box>
         )}
       </div>
       <div style={{ flex: '1 1 70%', width: '70%' }}>
         <h2>Person Detail</h2>
         <TextField autoFocus required margin="dense" id={uuidv4()} name="name" label="Name" type="text"  fullWidth variant="standard"
         value = {name} onChange={handleInputChange}/>
         <TextField autoFocus required margin="dense" id={uuidv4()} name="email" label="Email Address" type="email" fullWidth variant="standard"
         value = {email} onChange={handleInputChange}/>
         <TextField autoFocus required margin="dense" id={uuidv4()} name="address" label="Address" type="text" fullWidth variant="standard"
         value = {address} onChange={handleInputChange}/>
         <TextField required margin="dense" id={uuidv4()} name="phone" label="Phone Number" type="tel" fullWidth variant="standard"
         value = {phoneNumber} onChange={handleInputChange}/>

         <h2>Ship Agent Detail</h2>
         <TextField autoFocus required margin="dense" id={uuidv4()} name="name" label="Name" type="text" fullWidth variant="standard"/>
         <TextField autoFocus required margin="dense" id={uuidv4()} name="email" label="Email Address" type="email" fullWidth variant="standard"/>
         <TextField autoFocus required margin="dense" id={uuidv4()} name="address" label="Address" type="text" fullWidth variant="standard"/>
         <TextField required margin="dense" id={uuidv4()} name="phone" label="Phone Number" type="tel" fullWidth variant="standard"/>
       </div>
     </Stack>
     <DialogActions>
       <Button variant="outlined" type="submit" onClick={handleSubmit}>
         Add
       </Button>
       <Button  onClick={handleClose}>
         Cancel
       </Button>
     </DialogActions>
   </Dialog>
  </div>
  )
}

export default UserModal
