import React, { Component } from 'react';
class view_newcustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentDidMount() {
        console.log("componentDidMount method called...")
        var url = "http://127.0.0.1:5000/newcustomer";
        fetch(url).then(res => res.json()).then((response) => {
            console.log("Response is : ", response)
            this.setState({
                data: response

            });

        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <h4>View customer</h4>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>name</th>
                                                <th>Mobileno</th>
                                                <th>emailid</th>
                                                <th>operation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                                this.state.data.map((data) => {
                                                    return (<tr>
                                                        <td>{data.id}</td>
                                                        <td>{data.name}</td>
                                                        <td>{data.mobileno}</td>
                                                        <td>{data.email}</td> 
                                                        <td><a href='View_customer' type="submit" className="btn btn-primary btn-block mt-3 " value='view measurement'>
                                            view measurement
                                                
                                                </a></td> 
                                                    </tr>);

                                                })}
                                        </tbody>
                                        
                                    </table>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default view_newcustomer;