import { useNavigate  } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from '@mui/icons-material/FilterList';
import {Stack} from '@mui/material';
import CustomBtn from '../Utility/CustomBtn';
import { Add } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Menu, MenuItem, IconButton, TextField} from "@mui/material";
import {red} from "@mui/material/colors";

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
    {
        field: 'action',
        headerName: 'Action',
        renderCell: (params) => (
            
            <ActionMenu />
        )
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31},
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31},
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150},
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const ActionMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleClick = (event) => {
        console.log("button clicked")
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (

        <div>
            <IconButton onClick={handleClick}>
            <MoreVertIcon />
            </IconButton>
            <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={handleClose} sx={{ fontSize: 12}}>
                <EditIcon sx={{ fontSize: 16,
                                marginRight: 1}} /> Edit
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ fontSize: 12, color:red[500]
            }}>
                <DeleteIcon sx={{ fontSize: 16, marginRight: 1, color:red[500]}} /> Delete
            </MenuItem>
            <MenuItem onClick={handleClose} sx={{ fontSize: 12 }}>
                <VisibilityIcon sx={{ fontSize: 16, marginRight: 1 }} /> View Details
            </MenuItem>
            </Menu>
        </div>
    );
};

export default function DataGridDemo() {
    let navigate = useNavigate();
    const handleClickOpen = () => {
    navigate('/add-user');
    console.log("user form clicked ")
  };
    return (
        <div className='dashboard'>
            <Stack direction = "row" spacing={2}
            sx={{ marginLeft: "auto" }}>
                <CustomBtn
                    name={'Add User' }
                    IconComponent={Add}
                    onClick={() => handleClickOpen()}
                     />
            </Stack>
            <Stack direction="row" spacing={2}
                   sx={{padding: 2}}>
                <TextField
                    variant="outlined"
                    placeholder="Search..."
                    InputProps={{
                        startAdornment: (
                            <SearchIcon position="start" sx={{color: 'text.secondary'}}/>
                        ),
                    }}
                    sx={{flex: 1, maxWidth: 270}}
                />
                <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center'}}>
                    <IconButton
                        aria-label="user profile"
                        // onClick={handleClick}
                    >
                            <FilterListIcon/>
                    </IconButton>
                </div>
            </Stack>
            <Box sx={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    );
}
