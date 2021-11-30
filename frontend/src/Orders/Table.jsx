import React, { useState, useEffect } from 'react';
import { AccountsRepository } from "../api/AccountsRepository";
import { OrderList } from "./OrderList";
// import { NavigationBar } from "../frontend/src/Navigation/NavigationBar";

export const Table = props => {
    const [ orders, setOrders ] = useState(undefined);
    const accountsRepository = new AccountsRepository();
    accountsRepository.foodDonations().then(x => setOrders(x));

    return <div className="container w-50 my-2">
        {/* <NavigationBar /> */}
        <h1>Donations</h1>
        <OrderList orders={orders} />
    </div>

};