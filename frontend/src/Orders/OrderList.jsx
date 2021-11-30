import { Link, Redirect } from 'react-router-dom';
import { Donation } from '../Orders/Donation';

export const OrderList = props => {
    if (!props.orders) {
        return <div className="container">
            <div>Loading...</div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">foodDonationID</th>
                        <th scope="col">Soup Kitchen</th>
                        <th scope="col">driverID</th>
                        <th scope="col">foodName</th>
                        <th scope="col">timeMade</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>North Texas Food Bank</td>
                                <td>25</td>
                                <td>Mac n Cheese</td>
                                <td>11/9/2021 2:16 PM</td>
                            </tr>
                        </tbody>
                </table>
            </div>
    }
       return <div className="container">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Donation#</th>
                        <th scope="col">RDH</th>
                        <th scope="col">Soup Kitchen</th>
                        <th scope="col">Driver</th>
                        <th scope="col">Food</th>
                        <th scope="col">Order Placed</th>
                        <th scope="col">Expiration</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Claimed</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>RDH_ID</td>
                                <td>North Texas Food Bank</td>
                                <td>25</td>
                                <td>Mac n Cheese</td>
                                <td>11/9/2021 2:16 PM</td>
                                <td>11/9/2021 8:00 PM</td>
                                <td>3</td>
                                <td>yes</td>
                            </tr>
                            {
                                props.orders.map(order => <tr key={order.foodDonationID}>
                                    {/* <th scope="row">{order.foodDonationID}</th> */}
                                    <th scope="row"><p><Link to={`/details/`+order.foodDonationID} >{order.foodDonationID}</Link></p></th>
                                    <td>{order.RDH_ID}</td>
                                    <td>{order.soupKitchenID}</td> {/*add "<a href" for all columns of row to redirect to order details */}
                                    <td>{order.driverID}</td>
                                    <td>{order.foodName}</td>
                                    <td>{order.timeMade}</td>
                                    <td>{order.expirationDate}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.claimed}</td>
                                    {/* <td>
                                        <Link to={`edit/${order.food}`}>{account.name}</Link>
                                    </td>
                                    <td>{account.email}</td>
                                    <td>{account.isEmployee ? 'YES' : 'NO'}</td>
                                    <td>
                                        <button type="button"
                                            className="btn btn-sm btn-danger"
                                            onClick={() => props.onAccountDelete(account.id)}>
                                            X</button>
                                    </td> */}
                                </tr>)
                            }
                        </tbody>
                </table>
            </div>
            };