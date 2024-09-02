import React, {useEffect} from 'react';
import Paper from "@mui/material/Paper";
import {Container, Divider, IconButton, Stack} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {ArrowBack, ShareOutlined} from "@mui/icons-material";
import {useNavigate, useLocation } from "react-router-dom";


const UserDetails = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [data,setData] = React.useState('');

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const userData = query.get('userData');
        if (userData) {
            try {
                const parsedData = JSON.parse(decodeURIComponent(userData));
                setData(parsedData);
            } catch (e) {
                console.error('Failed to parse userData from URL:', e);
            }
        }
        }, [location.search]);

    const onBackButton = ()=>{
        navigate('/user');
    };

    return (
        <Container>
            <div className='dashboard' style={{  backgroundColor: '#e8e3e0', borderRadius: '10px'}}>
                <Paper elevation={3}>
                    <Stack direction="row" spacing={2} sx={{ padding: 2, justifyContent: 'space-between' }}>
                        <IconButton onClick={onBackButton}><ArrowBack/></IconButton>
                        <Box display="flex" gap={2}>
                            <Button variant="contained" sx={{ textTransform: 'none' }}>Download PDF</Button>
                            <Button variant="outlined" sx={{ textTransform: 'none' }}>Download as Excel</Button>
                            <IconButton> <ShareOutlined/></IconButton>
                        </Box>
                    </Stack>
                    <Divider />
                        <div style={{flex: '1 1 80%', width: '70%'}}>
                            <div>
                                <h3>Person Detail</h3>
                                <p>Id: {data.id}</p>
                                <p>First Name: {data.firstName}</p>
                                <p>Last Name: {data.lastName}</p>
                                <p>Age: {data.age}</p>
                            </div>
                            {/*<Divider/>*/}
                            {/*<div>*/}
                            {/*    <h3>Ship Agent Detail</h3>*/}
                            {/*</div>*/}
                        </div>
                    <Divider/>
                    <Stack direction="row" sx={{padding: 2}}>
                        <Button variant="contained" sx={{textTransform: 'none'}}>Download PDF</Button>
                        <Button variant="text" sx={{textTransform: 'none'}} onClick={onBackButton}>Close</Button>
                    </Stack>
                </Paper>
            </div>
        </Container>
    )
        ;
};

export default UserDetails;