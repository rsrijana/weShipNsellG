import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from '@mui/icons-material/FilterList';
import { Stack, ThemeProvider } from '@mui/material';
import CustomBtn from '../Utility/CustomBtn';
import { Add } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem, IconButton, TextField } from "@mui/material";
import { red } from "@mui/material/colors";
import { Container } from "@mui/material";
import AddUserModal from "../Utility/AddUserModal";
import ViewUserModal from "../Utility/ViewUserModal";
import theme from "../Assets/theme";

const ActionMenu = ({ params, onDelete, openEditModal }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isSetViewDetail, setViewDetail] = useState(false);
    const [isUser, setUser] = useState("");

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenViewDetail = () => {
        setUser(params.row);
        setViewDetail(true);
    };

    const handleDelete = () => {
        onDelete(params.id);
        handleClose();
    };

    const handleCloseViewDetail = () => {
        setViewDetail(false);
        handleClose();
    };

    const editUserData = () => {
        openEditModal(params.row);
        handleClose();
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
                <MenuItem onClick={editUserData} sx={{ fontSize: 12 }}>
                    <EditIcon sx={{ fontSize: 16, marginRight: 1 }} /> Edit
                </MenuItem>
                <MenuItem onClick={handleDelete} sx={{ fontSize: 12, color: red[500] }}>
                    <DeleteIcon sx={{ fontSize: 16, marginRight: 1, color: red[500] }} /> Delete
                </MenuItem>
                <MenuItem onClick={handleOpenViewDetail} sx={{ fontSize: 12 }}>
                    <VisibilityIcon sx={{ fontSize: 16, marginRight: 1 }} /> View Details
                </MenuItem>
            </Menu>
            <ViewUserModal open={isSetViewDetail} onClose={handleCloseViewDetail} user={isUser} />
        </div>
    );
};

export default function DataGridDemo() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [editData, setEditData] = useState();
    const [search, setSearch] = useState('');
    const [rows, setRows] = useState([
        { id: 1, name: 'Snow', email: "Jon@gmail.com", address: 'Jon', phoneNumber: 141651213},
        { id: 2, name: 'Lannister', email: 'Cersei@gmail.com', address: 'Cersei', phoneNumber: 3513213211},
        { id: 3, name: 'Lannister', email: 'Jaime@gmail.com', address: 'Jaime', phoneNumber: 365651511},
        { id: 4, name: 'Stark', email: 'Arya@gmail.com', address: 'Arya', phoneNumber: 18845461},
        { id: 5, name: 'Targaryen', email: 'Daenerys@gmail.com', address: 'Daenerys', phoneNumber: null},
        { id: 6, name: 'Melisandre', email: 'Melisandre@gmail.com', address: null, phoneNumber: 169868450},
        { id: 7, name: 'Clifford', email: 'Ferrara@gmail.com', address: 'Ferrara', phoneNumber: 4684684654},
        { id: 8, name: 'Frances', email: 'Rossini@gmail.com', address: 'Rossini', phoneNumber: 3654524224 },
        { id: 9, name: 'Roxie', email: 'Harvey@gmail.com', address: 'Harvey', phoneNumber: 65654654},
    ]);

    const filteredRows = rows.filter(row => {
        const lowerCaseQuery = search.toLowerCase();
        return (
            row.name.toLowerCase().includes(lowerCaseQuery) ||
            (row.email && row.email.toLowerCase().includes(lowerCaseQuery)) ||
            (row.phoneNumber && row.phoneNumber.toString().includes(lowerCaseQuery))
        );
    });

    const handleDeleteRow = (id) => {
        setRows(rows.filter((row) => row.id !== id));
    };

    const handleClickOpen = (toEditData) => {
        setEditData(toEditData);
        setModalOpen(true);
    };

    const handleModalClose = (data) => {
        setModalOpen(data);
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const userData = (data) => {
        if (data) {
            if (editData) {
                const updatedRows = rows.map((row) =>
                    row.id === editData.id ? { ...row, ...data } : row
                );
                setRows(updatedRows);
            } else {
                const lastElement = rows[rows.length - 1];
                const newRow = {
                    id: lastElement.id + 1,
                    name: data.name,
                    email: data.email,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    role: data.role
                };
                setRows([...rows, newRow]);
            }
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'Name', width: 150, editable: false },
        { field: 'email', headerName: 'Email', width: 200, editable: false },
        { field: 'address', headerName: 'Address', width: 120, editable: false },
        { field: 'phoneNumber', headerName: 'Phone Number', width: 150 },
        { field: 'role', headerName: 'Role', width: 200 },

        {
            field: 'action',
            headerName: 'Action',
            renderCell: (params) => (
                <ActionMenu params={params} onDelete={handleDeleteRow} openEditModal={handleClickOpen} />
            )
        },
    ];

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <div className="dashboard">
                    <Stack direction="row" spacing={2} sx={{ marginLeft: "auto" }}>
                        <CustomBtn
                            name={'Add User'}
                            IconComponent={Add}
                            onClick={() => handleClickOpen()}
                        />
                    </Stack>
                    <Stack direction="row" spacing={2} sx={{ padding: 2 }}>
                        <TextField
                            variant="outlined"
                            placeholder="Search..."
                            InputProps={{
                                startAdornment: (
                                    <SearchIcon position="start" sx={{ color: 'text.secondary' }} />
                                ),
                            }}
                            sx={{ flex: 1, maxWidth: 270 }}
                            value={search}
                            onChange={handleSearchChange}
                        />
                        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                            <IconButton aria-label="user profile">
                                <FilterListIcon />
                            </IconButton>
                        </div>
                    </Stack>
                    <Box sx={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={filteredRows}
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
                <AddUserModal open={isModalOpen} close={handleModalClose} inputData={userData} editData={editData} />
            </Container>
        </ThemeProvider>
    );
}
