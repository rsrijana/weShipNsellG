import React from 'react'
import {Stack} from '@mui/material';
import {
    Home as HomeIcon, LocalShipping as LocalShippingIcon,
    Person as PersonIcon, Inventory as InventorySharpIcon,
} from '@mui/icons-material'; // Import icons in a single line
import PostAddSharpIcon from '@mui/icons-material/PostAddSharp';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import InsertInvitationSharpIcon from '@mui/icons-material/InsertInvitationSharp';
import NotificationImportantSharpIcon from '@mui/icons-material/NotificationImportantSharp';
import CustomBtn from '../Utility/CustomBtn';
import '../App.css'
import {Link} from "react-router-dom";


const Sidebar = () => {
    const buttons = [
        {name: 'Dashboard', icon: HomeIcon, link: '/'},
        {name: 'Fulfillment Center', icon: LocalShippingIcon, link: '/fulfillment-center'},
        {name: 'User', icon: PersonIcon, link: '/user'},
        {name: 'Inventory', icon: InventorySharpIcon, link: '/inventory'},
        {name: 'Shipping', icon: PostAddSharpIcon, link: '/shipping'},
        {name: 'Customer Orders', icon: NoteAddIcon, link: '/orders'},
        {name: 'Calendar', icon: InsertInvitationSharpIcon, link: '/calendar'},
        {name: 'Issues', icon: NotificationImportantSharpIcon, link: '/issues'}
    ];

    // Handler for button clicks (optional)
    const handleButtonClick = (name) => {
        console.log(`${name} button clicked`);
    };
    return (
        <div className='sideMenu'>
            <h2>Ship and SELL</h2>
            {buttons.map((button, index) => (
                <Stack direction="column" spacing={2}>
                    <Link to={button.link} style={{textDecoration: 'none'}}>
                        <CustomBtn
                            key={index}
                            name={button.name}
                            IconComponent={button.icon}
                            onClick={() => handleButtonClick(button.name)}
                        />
                    </Link>
                </Stack>)
            )}
        </div>
    )
}

export default Sidebar