import React from 'react';
import { Stack, IconButton, TextField, Badge, Menu, MenuItem, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import '../App.css';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className="main-container">
            <Stack
                direction="row"
                spacing={2}
                sx={{
                    padding: 2,
                    alignItems: 'center',
                }}
            >
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                    <TextField
                        className="search-input"
                        variant="outlined"
                        placeholder="Search..."
                        InputProps={{
                            startAdornment: (
                                <SearchIcon position="start" sx={{ color: 'text.secondary' }} />
                            ),
                        }}
                        sx={{ marginRight: 2 , paddingLeft: 6}}
                    />

                    <IconButton aria-label="notifications">
                        <Badge badgeContent={4} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>

                    <IconButton aria-label="user profile" onClick={handleClick}>
                        <Avatar>
                            <PersonIcon />
                        </Avatar>
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </Stack>
        </div>
    );
};

export default Header;
