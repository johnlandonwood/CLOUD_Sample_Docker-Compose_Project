import React from 'react';

export class Neworder extends React.Component {
    state = {
        foodName: '',
        details: '',
        location: '',
        date: Date().toString()
    }
    render(){
        return <form className="container">
            <h1>New Order</h1>

            <div className="row g-3">
                <div className="col-sm-7">
                    <div className="form-group">
                        <label htmlFor="foodName">Food</label>
                        <input type="text"
                            id = "foodName"
                            name="foodName"
                            className="form-control"
                            value={this.state.foodName}
                            onChange={ event => this.setState({ foodName: event.target.value })} />
                    </div>
                </div>
                <div className="col-sm">

                </div>
                <div className="col-sm">

                </div>
            </div>


            <div className="form-group">
                <label htmlFor="details">Details</label>
                <input type="text"
                    id="details"
                    name="details"
                    className="form-control"
                    value={this.state.details}
                    onChange={ event => this.setState({ details: event.target.value })} />
            </div>
        </form>;
    }
}