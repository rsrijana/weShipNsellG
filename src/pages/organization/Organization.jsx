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

const Organization = () => {
    const [isOrganizationalModal, setOrganizationalModal] = useState(false);
    const [menuAnchor, setMenuAnchor] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const [organizationlist, setOrganizationList] = useState([]);

    // Function to fetch organization list from the server
    const fetchOrganizations = async () => {
        const token = localStorage.getItem('authToken');
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}api/admin/organization`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            );
            setOrganizationList(response.data);
        } catch (error) {
            console.error("Error fetching organizations:", error);
            // Optionally, set an error state if you want to display errors
        }
    };

    // Fetch organizations when the component mounts
    useEffect(() => {
        fetchOrganizations();
    }, []);  // Empty dependency array ensures it's only called once after the component mounts

    // Function to handle adding a new organization
    const addOrganization = async (newOrg) => {
        const token = localStorage.getItem('authToken');
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
            // After successfully adding, fetch the updated list of organizations
            fetchOrganizations();
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

    // Open the menu for a specific row
    const handleOpenMenu = (event, row) => {
        setMenuAnchor(event.currentTarget);
        setSelectedRow(row);
    };

    // Close the menu
    const handleCloseMenu = () => {
        setMenuAnchor(null);
        setSelectedRow(null);
    };

    // Handle menu actions (e.g., edit or delete)
    const handleMenuAction = (action) => {
        console.log(`${action} action on`, selectedRow);
        handleCloseMenu();
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
                                                <MenuItem onClick={() => handleMenuAction("Delete")}>Delete</MenuItem>
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
                addOrganization={addOrganization} // Pass the function to AddOrganizational
            />
        </Container>
    );
};

export default Organization;
