import React from 'react'
import {Route, Routes} from "react-router-dom";
import Dashboard from '../Layout/dashboards';
import User from '../pages/user';
import Calender from '../pages/Calender';
import CustomerOrders from '../pages/CustomerOrders';
import FulfillmentCenter from '../pages/FulfillmentCenter';
import Inventory from '../pages/Inventory';
import Issues from '../pages/Issues';
import Shipping from '../pages/Shipping';
import Login from '../auth/login';
import Organization  from "../pages/organization/Organization";

const router = () => {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/organization" element={<Organization/>}/>
                <Route path="/calender" element={<Calender/>}/>
                <Route path="/orders" element={<CustomerOrders/>}/>
                <Route path="/fulfillment-center" element={<FulfillmentCenter/>}/>
                <Route path="/inventory" element={<Inventory/>}/>
                <Route path="/issues" element={<Issues/>}/>
                <Route path="/shipping" element={<Shipping/>}/>
                <Route path="/user" element={<User/>}/>
            </Routes>
        </div>
    )
}

export default router