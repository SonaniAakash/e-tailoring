import React, { Component } from 'react';
class Home extends Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        return (
            <div>
                <div className="container">
                </div>
                <div className="row my-3">
                    <div className="col-12">
                        <h1 className="border-bottom pb-3">Home</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card text-bg-danger mb-3 shadow">
                            <div className="card-body">
                                <h4 className="border-bottom text-center pb-2">Total Customer</h4>
                                <div className="card-body text-center"> 2500 </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card text-bg-warning mb-3 shadow">
                            <div className="card-body">
                                <h4 className="border-bottom text-center pb-2">Total Shirts</h4>
                                <div className="card-body text-center"> 1200 </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card text-bg-success mb-3 shadow">
                            <div className="card-body">
                                <h4 className="border-bottom text-center pb-2">Total Paints</h4>
                                <div className="card-body text-center"> 1200 </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card text-bg-primary mb-3 shadow">
                            <div className="card-body">
                                <h4 className="border-bottom text-center pb-2">Total Suits</h4>
                                <div className="card-body text-center"> 750 </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card text-bg-danger mb-3 shadow">
                            <div className="card-body">
                                <h4 className="border-bottom text-center pb-2">Total Kafni</h4>
                                <div className="card-body text-center"> 450 </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card text-bg-warning mb-3 shadow">
                            <div className="card-body">
                                <h4 className="border-bottom text-center pb-2">Total Langho</h4>
                                <div className="card-body text-center"> 450 </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card text-bg-success mb-3 shadow">
                            <div className="card-body">
                                <h4 className="border-bottom text-center pb-2">Total Jodhpuri</h4>
                                <div className="card-body text-center"> 300 </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card text-bg-primary mb-3 shadow">
                            <div className="card-body">
                                <h4 className="border-bottom text-center pb-2">Total Shervani</h4>
                                <div className="card-body text-center"> 200 </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                );
                }
            }

export default Home;