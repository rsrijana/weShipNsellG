import React, {useEffect, useState} from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Box,
} from "@mui/material";
import axios from "axios";
import { useSnackbar } from "notistack";  // Import useSnackbar

const AddOrganizational = ({ open, onClose, addOrganization, orgData, isEditEnabled }) => {
    const [formData, setFormData] = useState({
        name: "",
        representative_name: "",
        contact_number: "",
        address: "",
        city: "",
        state: "",
        country: "",
        zip: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    console.log("this is console log for selected user", orgData);
    useEffect(() => {
        if (isEditEnabled === true && orgData) {
            setFormData({ ...orgData });
        }
        else {
            setFormData({
                name: "",
                representative_name: "",
                contact_number: "",
                address: "",
                city: "",
                state: "",
                country: "",
                zip: "",
            });
        }
    }, [isEditEnabled, orgData]);


    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setIsLoading(true); // Show loading state

        const url = isEditEnabled === true
            ? `${process.env.REACT_APP_API_URL}api/admin/organization/${orgData.id}`
            : `${process.env.REACT_APP_API_URL}api/admin/organization`;

        const method = isEditEnabled === true  ? 'put' : 'post';
        const token = localStorage.getItem('authToken');

        try {
            const response = await axios({
                method,
                url,
                data: formData,
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if(response.status === 200){
                enqueueSnackbar("Organization updated successfully!", {variant: "success"})
            }
            else {
                enqueueSnackbar("Organization added successfully!", {variant: "success"});
            }
            addOrganization();
            setFormData(false); // Reset form data
            onClose(); // Close the modal
        } catch (error) {
            enqueueSnackbar("Failed to add organization. Please try again.", { variant: "error", autoHideDuration: 2000, }); // Show error message
            onClose(); // Close the modal on error
        } finally {
            setIsLoading(true); // Hide loading state (corrected typo)
        }
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>{isEditEnabled === true ? "Edit Organization" : "Add New Organization"}</DialogTitle>
            <DialogContent>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        mt: 2,
                    }}
                >
                    <TextField
                        label="Organization Name"
                        variant="outlined"
                        fullWidth
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        required
                        name="representative_name"
                        value={formData.representative_name}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Contact Number"
                        variant="outlined"
                        fullWidth
                        name="contact_number"
                        value={formData.contact_number}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Address"
                        variant="outlined"
                        multiline
                        rows={3}
                        fullWidth
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="City"
                        variant="outlined"
                        fullWidth
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="State"
                        variant="outlined"
                        fullWidth
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Country"
                        variant="outlined"
                        fullWidth
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                    />
                    <TextField
                        label="Zip Code"
                        variant="outlined"
                        fullWidth
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" onClick={onClose}>Cancel</Button>
                <Button
                    variant="contained"
                    type="submit"
                    onClick={handleSubmit}
                >
                    {isEditEnabled === true ? 'Update' : 'Add'}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddOrganizational;
