import React, { useState, useEffect } from 'react';
import { AccountsRepository } from "../api/AccountsRepository";

export const Donation = props => {
    const [ order, setOrder ] = useState(undefined);
    const accountsRepository  = new AccountsRepository();
    accountsRepository.foodDonation(props.order.foodDonationID).then(x => setOrder(x));

    return <div className="container w-50 my-2">
        <h3>Donation Details</h3>
        <h5>Food type: {order.foodName}</h5>
        <h5></h5>
    </div>
}