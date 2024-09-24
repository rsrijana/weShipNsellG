import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { v4 as uuidv4} from 'uuid';
import Box from "@mui/material/Box";
import {Divider, IconButton, Stack} from "@mui/material";
import {DeleteOutline} from "@mui/icons-material";
import {useEffect} from "react";

const AddUserModal = ({open, close, inputData, editData}) => {
  // const [open, setOpen] = React.useState(true);
  const [file, setFile] = React.useState(null);
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    role:""
  });

  const clearFiled =()=>{
    setUser({
      name:"", email: "",
      address: "", phoneNumber: "",role: ""
    })
  }

  const handleClose = ()=>{
    if(close){
      close(false);
    }
  };
  const removeImage=()=>{
    setFile(null);
  }

  const handleSubmit =()=>{
    if(editData){
      editData(user);
    }
    else{
      inputData(user);
      clearFiled();
    }
    handleClose();
  }

  useEffect(()=>{
    const savedImage = localStorage.getItem('file');
    if(savedImage){
      setFile(savedImage);
    }
    if (editData) {
      setUser({
        name: editData.name || "",
        email: editData.email || "",
        address: editData.address || "",
        phoneNumber: editData.phoneNumber || "",
        role: editData.role || ""
      });
    }
  },[editData])

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
     <DialogTitle>{ editData? "Edit User": "Add User" }</DialogTitle>
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
       <div style={{flex: '1 1 50%', width: '70%', display: 'flex', flexDirection: 'column', gap: '16px'}}>
         <h2>Person Detail</h2>
         <TextField label="Name" fullWidth value={user.name}
                    onChange={(e) => setUser({...user, name: e.target.value})}/>
         <TextField label="Email" fullWidth value={user.email}
                    onChange={(e) => setUser({...user, email: e.target.value})}/>
         <TextField label="Address" fullWidth value={user.address}
                    onChange={(e) => setUser({...user, address: e.target.value})}/>
         <TextField label="Phone Number" fullWidth value={user.phoneNumber}
                    onChange={(e) => setUser({...user, phoneNumber: e.target.value})}/>
         <select
             value={user.role}
             onChange={(e) => setUser({...user, role: e.target.value})}
             required
             style={{padding: '10px', borderRadius: '4px', borderColor: 'rgba(0, 0, 0, 0.23)'}}
         >
           <option value="" disabled>Select Role</option>
           <option value="SUPER_ADMIN">SUPER_ADMIN</option>
           <option value="MERCHANT_ADMIN">MERCHANT_ADMIN</option>
           <option value="MERCHANT_OPS">MERCHANT_OPS</option>
           <option value="MERCHANT_ACCOUNT_MANAGER">MERCHANT_ACCOUNT_MANAGER</option>
         </select>

       </div>
     </Stack>
     <DialogActions>
       <Button variant="outlined" type="submit" onClick={handleSubmit}>
         {editData ? "Update" : "Add"}
       </Button>
       <Button onClick={handleClose}>
         Cancel
       </Button>
     </DialogActions>
   </Dialog>
 </div>
  )
}

export default AddUserModal
