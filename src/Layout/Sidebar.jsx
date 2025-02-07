import React, { useState } from 'react';
import {
    Divider,
    Stack,
    Drawer,
    IconButton,
    MenuItem,
    useMediaQuery,
    Box,
    Typography,
    ThemeProvider
} from '@mui/material';
import {
    Home as HomeIcon, LocalShipping as LocalShippingIcon,
    Person as PersonIcon, Inventory as InventorySharpIcon,
    Menu as MenuIcon,
} from '@mui/icons-material';
import PostAddSharpIcon from '@mui/icons-material/PostAddSharp';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import InsertInvitationSharpIcon from '@mui/icons-material/InsertInvitationSharp';
import NotificationImportantSharpIcon from '@mui/icons-material/NotificationImportantSharp';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';
import CustomBtn from '../Utility/CustomBtn';
import { Link } from "react-router-dom";
import '../App.css';
import theme from "../Assets/theme";

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:1490px)');

    const buttons = [
        { name: 'Dashboard', icon: HomeIcon, link: '/' },
        { name: 'Organization', icon: BusinessRoundedIcon, link: '/organization'},
        { name: 'Fulfillment Center', icon: LocalShippingIcon, link: '/fulfillment-center' },
        { name: 'User', icon: PersonIcon, link: '/user' },
        { name: 'Inventory', icon: InventorySharpIcon, link: '/inventory' },
        { name: 'Shipping', icon: PostAddSharpIcon, link: '/shipping' },
        { name: 'Customer Orders', icon: NoteAddIcon, link: '/orders' },
        { name: 'Calendar', icon: InsertInvitationSharpIcon, link: '/calendar' },
        { name: 'Issues', icon: NotificationImportantSharpIcon, link: '/issues' }

    ];

    const handleButtonClick = (name) => {
        console.log(`${name} button clicked`);
    };

    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
            <ThemeProvider theme={theme}>
                <Box >
                    {isMobile ? (
                        <Box>
                            <IconButton className="hamburger-btn"  color="1c252e" aria-label="menu" onClick={toggleDrawer}
                                        sx={{ padding: '24px 12px ' }}>
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                                <div className={open ? 'sideMenu expanded' : 'sideMenu collapsed'} style={{ width: open ? 220 : 0 }}>
                                    <Typography variant='h5' align="center" padding="29px 10px">
                                        #ShipandSELL
                                    </Typography>
                                    <Divider />
                                    {buttons.map((button, index) => (
                                        <Link key={index} to={button.link} style={{ textDecoration: 'none' }} onClick={toggleDrawer}>
                                            <MenuItem>
                                                <CustomBtn
                                                    name={button.name}
                                                    IconComponent={button.icon}
                                                    onClick={() => handleButtonClick(button.name)}
                                                />
                                            </MenuItem>
                                        </Link>
                                    ))}
                                    <Divider />
                                    <Typography variant='h5' align="center" padding="29px 10px">
                                        user type: admin
                                    </Typography>
                                </div>
                            </Drawer>
                        </Box>
                    ) : (

                        <div className='sideMenu'>
                            <Typography variant='h5' align="center" padding="29px 10px">
                                #ShipandSELL
                            </Typography>
                            <Divider />
                            {buttons.map((button, index) => (
                                <Stack key={index} direction="column" spacing={2}>
                                    <Link to={button.link} style={{ textDecoration: 'none' }}>
                                        <CustomBtn
                                            name={button.name}
                                            IconComponent={button.icon}
                                            onClick={() => handleButtonClick(button.name)}
                                        />
                                    </Link>
                                </Stack>
                            ))}
                            <Divider />
                            <Typography fontSize="20px"  padding="28px 25px">
                                user type: admin
                            </Typography>
                        </div>
                    )}
                </Box>
            </ThemeProvider>
    );
}

export default Sidebar;
