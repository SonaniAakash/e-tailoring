import React, { Component } from 'react';
class View_customer extends Component {
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
                        <h1 className="border-bottom pb-3 text-center">view measurements</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card text-bg-danger mb-3 shadow">
                            <div className="card-body">
                                <h1 className="border-bottom text-center pb-2">Shirts</h1>
                                <div className="card-body text-center">
                                <a href="Add_shirts" type="button" className="btn btn-outline-dark ml-5"><b>Add</b></a>
                                    <a href="view_shirts "type="button" className="btn btn-outline-dark m-3"><b>View</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card text-bg-warning mb-3 shadow">
                            <div className="card-body">
                                <h1 className="border-bottom text-center pb-2">Pants</h1>
                                <div className="card-body text-center">
                                <a href="Add_pants" type="button" className="btn btn-outline-dark"><b>Add</b></a>
                                    <a href="view_pants "type="button" className="btn btn-outline-dark m-3"><b>View</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card text-bg-success mb-3 shadow">
                            <div className="card-body">
                                <h1 className="border-bottom text-center pb-2">Suits</h1>
                                <div className="card-body text-center">
                                <a href="Add_suit" type="button" className="btn btn-outline-dark"><b>Add</b></a>
                                    <a href="view_suit "type="button" className="btn btn-outline-dark m-3"><b>View</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card text-bg-primary mb-3 shadow">
                            <div className="card-body">
                                <h1 className="border-bottom text-center pb-2">Kafni</h1>
                                <div className="card-body text-center">
                                <a href="Add_kafni" type="button" className="btn btn-outline-dark"><b>Add</b></a>
                                    <a href="view_kafni "type="button" className="btn btn-outline-dark m-3"><b>View</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card text-bg-secondary mb-3 shadow">
                            <div className="card-body">
                                <h1 className="border-bottom text-center pb-2">Langho</h1>
                                <div className="card-body text-center">
                                    <a href="Add_langho" type="button" className="btn btn-outline-dark"><b>Add</b></a>
                                    <a href="view_langho "type="button" className="btn btn-outline-dark m-3"><b>View</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card text-bg-info mb-3 shadow">
                            <div className="card-body">
                                <h1 className="border-bottom text-center pb-2">Jodhpuri</h1>
                                <div className="card-body text-center">
                                <a href="Add_jodhpuri" type="button" className="btn btn-outline-dark"><b>Add</b></a>
                                    <a href="view_jodhpuri "type="button" className="btn btn-outline-dark m-3"><b>View</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                        <div className="card text-bg-light mb-3 shadow">
                            <div className="card-body">
                                <h1 className="border-bottom text-center pb-2">Shervani</h1>
                                <div className="card-body text-center">
                                <a href="Add_shervani" type="button" className="btn btn-outline-dark"><b>Add</b></a>
                                    <a href="view_shervani "type="button" className="btn btn-outline-dark m-3   "><b>View</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default View_customer;