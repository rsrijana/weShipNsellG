import React from 'react';
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {DialogContent, Divider, IconButton, Stack, Typography} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { ShareOutlined} from "@mui/icons-material";
import Box from "@mui/material/Box";

const ViewUserModal = ({open, onClose, user}) => {
    return (
        <div className="Dashboard">
            <Dialog open={open} onClose={onClose}>

                    <Stack direction="row" spacing={6} sx={{ padding: 2, justifyContent: 'space-between' }}>
                        {/*<IconButton onClick={onBackButton}><ArrowBack/></IconButton>*/}
                        <DialogTitle >User Details </DialogTitle>
                        <Box display="flex" gap={2}>
                            <Button variant="contained" sx={{ textTransform: 'none' }}>Download PDF</Button>
                            <Button variant="outlined" sx={{ textTransform: 'none' }}>Download as Excel</Button>
                            <IconButton> <ShareOutlined/></IconButton>
                        </Box>
                    </Stack>
                <Divider/>
                <DialogContent>
                    {/* Render user details here */}

                    <Typography> Name: {user.name}</Typography>
                    <Typography> Email: {user.email}</Typography>
                    <Typography> Address: {user.address}</Typography>
                    <Typography> Phone Number: {user.phoneNumber}</Typography>

                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={onClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ViewUserModal;