import React from 'react';


export const OrderTable = props => <>
    <div className="container pb-3">
    <h3>Total Orders <span className="custom-review-counter">({})</span></h3>
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
        {
            !props.order && <tbody><div className="m-2">Be the first to make a Donation!</div></tbody>
        }
        {
            props.orders.map((x, i) =>
                    <tbody>
                        <tr key={i}>
                            <th scope="row">{x.foodDonationID}</th>
                            <td>{x.soupKitchen}</td>
                            <td>{x.driverID}</td>
                            <td>{x.foodName}</td>
                            <td>{x.timeMade}</td>
                        </tr>
                    </tbody>)
                    
                // <li className="list-group-item border-0 p-0 pb-3" key={i}>
                //     <div className="card">
                //     <div className="custom-review-header">
                //         <div className="card-header">
                //             <Rating value={x.rating}/>
                //             </div>
                //         </div>
                //         <div className="card-body custom-review-body">
                //             <div className="row">
                //             <p className="card-title col-8 col-sm-10 text-muted">{x.userName}</p>
                //             <p className="card-title col-4 col-sm-2 text-muted text-end">{[x.date.substr(4,12).slice(0, 6),',',x.date.substr(4,12).slice(6)].join('')}</p>
                //             <p className="card-text">"{x.comment}"</p>
                //             </div>
                //         </div>
                //     </div>
                // </li>)
        }
    </table>
    </div>
</>