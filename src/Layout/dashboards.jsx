import * as React from 'react'
import '../App.css';

const Dashboard = () => {

    return (
        <div className="dashboard">
            <div className="hero-text">
                <h2>Welcome, Wikket 👋</h2>
            </div>
            <div className="dashboard-row">
                <div className="dashboardContent">
                    <h1>First Content</h1>
                    <p>This is the first content area.</p>
                </div>
                <div className="dashboardContent">
                    <h1>Second Content</h1>
                    <p>This is the second content area.</p>
                </div>
                <div className="dashboardContent">
                    <h1>Third Content</h1>
                    <p>This is the third content area.</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard