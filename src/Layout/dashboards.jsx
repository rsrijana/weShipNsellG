import * as React from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import theme from '../Assets/theme';
import { Container, Paper, Box, Grid, Typography } from '@mui/material';
import { BarChart, LineChart, PieChart } from '@mui/x-charts';

const Dashboard = () => {
    const Item = styled(Paper)(({ theme }) => ({
        padding: '16px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <div className="dashboard">
                    <Box>
                        <h1>Hi, Welcome back 👋</h1>
                        <Grid container spacing={2}>
                            {/* Statistics Cards */}
                            <Grid item xs={12} sm={6} md={3}>
                                <Item>
                                    <Typography variant="h5">714k</Typography>
                                    <Typography variant="body2">Weekly Sales</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Item>
                                    <Typography variant="h5">1.35m</Typography>
                                    <Typography variant="body2">New Users</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Item>
                                    <Typography variant="h5">1.72m</Typography>
                                    <Typography variant="body2">Item Orders</Typography>
                                </Item>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3}>
                                <Item>
                                    <Typography variant="h5">234</Typography>
                                    <Typography variant="body2">Bug Reports</Typography>
                                </Item>
                            </Grid>

                            {/* Line Chart */}
                            <Grid item xs={12} md={8}>
                                <Item>
                                    <Typography variant="h6">Website Visits</Typography>
                                    <LineChart
                                        xAxis={[{data: [1, 2, 3, 5, 8, 10]}]}
                                        series={[
                                            {
                                                data: [2, 5.5, 2, 8.5, 1.5, 5],
                                            },
                                        ]}
                                        margin={{top: 5, bottom: 30, left: 40, right: 10}}
                                        height={300}
                                    />
                                </Item>
                            </Grid>

                            {/* Pie Chart */}
                            <Grid item xs={12} md={4}>
                                <Item>
                                    <Typography variant="h6">Current Visits</Typography>
                                    <PieChart
                                        series={[
                                            {
                                                data: [
                                                    {id: 0, value: 10, label: 'Series A'},
                                                    {id: 1, value: 15, label: 'Series B'},
                                                    {id: 2, value: 20, label: 'Series C'},
                                                ],
                                            },
                                        ]}
                                        height={200}
                                    />
                                </Item>
                            </Grid>

                            {/* Bar Chart */}
                            <Grid item xs={12} md={8}>
                                <Item>
                                    <Typography variant="h6">Conversion Rates</Typography>
                                    <BarChart
                                        series={[
                                            {data: [35, 44, 24, 34]},
                                            {data: [51, 6, 49, 30]},
                                            {data: [15, 25, 30, 50]},
                                            {data: [60, 50, 15, 25]},
                                        ]}
                                        height={300}
                                        xAxis={[{data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band'}]}
                                        margin={{top: 10, bottom: 30, left: 40, right: 20}}
                                    />
                                </Item>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </Container>
        </ThemeProvider>
    );
};

export default Dashboard;
