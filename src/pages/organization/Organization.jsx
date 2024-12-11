import React, { useState, useEffect } from "react";
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    IconButton,
    Menu,
    MenuItem,
    Button,
    Stack,
    Paper,
    Box
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddOrganizational from "./addOrganizational";
import axios from "axios";
import {useSnackbar} from "notistack";

const Organization = () => {
    const [isOrganizationalModal, setOrganizationalModal] = useState(false);
    const [menuAnchor, setMenuAnchor] = useState(null);
    const [selectedRow, setSelectedRow] = useState();
    const [organizationlist, setOrganizationlist] = useState([]);
    const [isEditMode, setEditMode] = useState(false);

    const token = localStorage.getItem('authToken');
    const { enqueueSnackbar } = useSnackbar();

    // Function to fetch organization list from the server
    const fetchOrganizations = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}api/admin/organization`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            setOrganizationlist(response.data);

        } catch (error) {
            console.error("Error fetching organizations:", error);
            enqueueSnackbar("Failed to fetch organizations. Please try again.", { variant: "error" });
        }
    };

    const handleEditOrganization = async () =>{
        try {
             await axios.put(
                `${process.env.REACT_APP_API_URL}api/admin/organization/${selectedRow.id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            enqueueSnackbar(`Organization with ID: ${selectedRow.id} edit successfully!`, { variant: "success" });
            console.log("Token:", token);

        }
        catch (error){

        }
    }

    const handleDeleteOrganization = async ()=>{
        try {
             const response = await axios.delete(
                `${process.env.REACT_APP_API_URL}api/admin/organization/${selectedRow.id}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );

             if(response.status === 200 ){
                 await fetchOrganizations();
             }

        } catch (error) {
            console.error("Error deleting organization:", error);
        }
    }

    // Fetch organizations when the component mounts
    useEffect(() => {
        fetchOrganizations();
    }, []); // The empty array ensures this runs only once after the component mounts

    // Function to handle adding a new organization
    const addOrganization = async (newOrg) => {
        try {
            await axios.post(
                `${process.env.REACT_APP_API_URL}api/admin/organization`,
                newOrg,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
        } catch (error) {
            console.error("Error adding organization:", error);
        }
    };

    // Handle modal open and close
    const handleOpenModal = () => {
        setTimeout(() => {
            setOrganizationalModal(true);
        }, 500);
    };

    const handleCloseModal = () => {
        setOrganizationalModal(false);
    };


    const handleOpenMenu = (event, org) => {
        setMenuAnchor(event.currentTarget);
        setSelectedRow(org);
    };

    // Close the menu
    const handleCloseMenu = () => {
        setMenuAnchor(null);
        setSelectedRow(null);
    };
    const handleMenuAction = (action) => {
        if (action === "Edit") {
            setOrganizationalModal(true);
            setEditMode(true);
        }
    };

    return (
        <Container>
            <div className="dashboard">
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{ alignItems: "center", justifyContent: "space-between", mb: 3 }}
                >
                    <h1 style={{ margin: 0 }}>Organization Management</h1>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleOpenModal}
                    >
                        Add Organization
                    </Button>
                </Stack>

                {/* Organization Table */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                        marginTop: 2,
                        paddingX: 0,
                    }}
                >
                    <Paper sx={{ padding: 2, borderRadius: 2, boxShadow: 3 }}>
                        <Table sx={{ width: "100%" }}>
                            <TableHead sx={{ backgroundColor: "#fff", color: "#808080" }}>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: "bold", color: "#808080" }}>ID</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color: "#808080" }}>Name</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color: "#808080" }}>Address</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color: "#808080" }}>Country</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color: "#808080" }}>State</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color: "#808080" }}>City</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color: "#808080" }}>Zip</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color: "#808080" }}>Contact</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color: "#808080" }}>Representative Name</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color: "#808080" }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {organizationlist.map((org) => (
                                    <TableRow
                                        key={org.id}
                                        sx={{
                                            "&:hover": {
                                                backgroundColor: "#f5f5f5",
                                            },
                                        }}
                                    >
                                        <TableCell>{org.id}</TableCell>
                                        <TableCell>{org.name}</TableCell>
                                        <TableCell>{org.address}</TableCell>
                                        <TableCell>{org.country}</TableCell>
                                        <TableCell>{org.state}</TableCell>
                                        <TableCell>{org.city}</TableCell>
                                        <TableCell>{org.zip}</TableCell>
                                        <TableCell>{org.contact_number}</TableCell>
                                        <TableCell>{org.representative_name}</TableCell>
                                        <TableCell>
                                            <IconButton onClick={(e) => handleOpenMenu(e, org)}>
                                                <MoreVertIcon />
                                            </IconButton>
                                            <Menu
                                                anchorEl={menuAnchor}
                                                open={Boolean(menuAnchor)}
                                                onClose={handleCloseMenu}
                                            >
                                                <MenuItem onClick={() => handleMenuAction("Edit")}>Edit</MenuItem>
                                                <MenuItem onClick={() => handleDeleteOrganization(org.id)}>Delete</MenuItem>
                                            </Menu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Box>
            </div>
            <AddOrganizational
                open={isOrganizationalModal}
                onClose={handleCloseModal}
                addOrganization={fetchOrganizations} // Pass the function to AddOrganizational
                orgData={selectedRow} // Pass selected row for editing
                isEditEnabled={isEditMode} // Pass edit mode state
            />
        </Container>
    );
};

export default Organization;
