import React from 'react';

export class Table extends React.Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="Home" href="#">Home</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Donations</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">New Order</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sign out</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            <div className="container w-50 my-2">
                <h1>Orders</h1>
                
            </div>
            <div className="container">
                <table className="table-striped">
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
            </div>
        );
    }
}