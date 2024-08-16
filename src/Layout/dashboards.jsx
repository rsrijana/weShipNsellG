import * as React from 'react'
import '../App.css';
import { BarChart , LineChart, PieChart} from '@mui/x-charts';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from '@mui/material';
const Dashboard = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        color: theme.palette.text.secondary,
        paddingLeft: 20
      }));
      
    return (
        <Container>
        <div className="dashboard">
            <Box >
                <h1>Hi, Welcome back 👋</h1>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <h1>714k</h1>
                            <p>Weekly Sales</p>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <h1>1.35m</h1>
                            <p>New Users</p>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <h1>1.72m</h1>
                            <p>Item Orders</p>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <h1>234</h1>
                            <p>Bug Reports</p>
                        </Item>
                    </Grid>

                    <Grid item xs={6} md={8}>
                        <Item><h2>Website Visits</h2>
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
                    <Grid item xs={6} md={4}>
                        <Item><h2>Current Visits</h2>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            {id: 0, value: 10, label: 'series A'},
                                            {id: 1, value: 15, label: 'series B'},
                                            {id: 2, value: 20, label: 'series C'},
                                        ],
                                    },
                                ]}

                                height={200}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Item><h2>Conversion Rates</h2>
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
    )
}

export default Dashboard