import React, { useState, useEffect } from 'react';
import { AccountsRepository } from "../api/AccountsRepository";
import { OrderList } from "./OrderList";

export const Table = props => {
    const [ orders, setOrders ] = useState(undefined);
    const accountsRepository = new AccountsRepository();
    accountsRepository.getOrders().then(x => setOrders(x));

    return <div className="container w-50 my-2">
        <h1>Orders</h1>
        <OrderList orders={orders} />
    </div>

};