import * as React from 'react';
// import  {useEffect} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { v4 as uuidv4} from 'uuid';
import { useNavigate  } from 'react-router-dom';

const UserForm = () => {
  const [open, setOpen] = React.useState(true);
  
  let navigate = useNavigate();
  const handleClose = ()=>{
    setOpen(false);
    navigate('/user');
  };

  return (
 <div className='dashboard'>
    <React.Fragment>
      <Dialog  open={open}
        onClose={handleClose}>
        <DialogTitle>Add Users</DialogTitle>
        <DialogContent>
          <TextField autoFocus required margin="dense" id={uuidv4()} name="name" label="Name" type="text" fullWidth variant="standard"/>
          <TextField autoFocus required margin="dense" id={uuidv4()} name="email" label="Email Address" type="email" fullWidth variant="standard"/>
          <TextField autoFocus required margin="dense" id={uuidv4()} name="address"label="Address"type="text" fullWidth variant="standard" />
          <TextField required margin="dense" id={uuidv4()} name="phone" label="Phone Number" type="tel" fullWidth variant="standard" />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={handleClose}>Add</Button>
          </DialogActions>
      </Dialog>
    </React.Fragment>
  </div>
  )
}

export default UserForm
