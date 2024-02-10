import React, { Component } from 'react';
class Add_pants extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    ChangeValue = (e) => {
        console.log(e.target.name + " " + e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    Savepantsdetail = (e) => {
        {
            var url = "http://127.0.0.1:5000/pants/2/" + this.state.waist + "/" + this.state.hip + "/" + this.state.thigh + "/" + this.state.rise + "/" + this.state.leg + "/" + this.state.outseam + "/" + this.state.inseam + "/" + this.state.measurement_date + "/" + this.state.remarks + "/" + this.state.delivery_date;
            console.log(url);
                fetch(url,{method:'get'}).then((res) => res.json()).then((response) => {
                    console.log(response);
                }
            );
           e.preventDefault(); 
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <h4>Add pants</h4>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <td>
                                <form onSubmit={(event) => this.Savepantsdetail(event)} method="get" encType='multipart/form-data'>
              
            <div className="row mb-1">
                <label className="col-2">
                waist
                </label>
                <div className="col-sm-2">
                    <input type="number" name='waist' className="form-control form-control-sm" value={this.state.waist} onChange={this.ChangeValue} />
                </div>
            </div>
            <div className="row mb-1">
                <label className="col-2">
                hip
                </label>
                <div className="col-sm-2">
                    <input type="number" name='hip' className="form-control form-control-sm" value={this.state.hip} onChange={this.ChangeValue} />
                </div>
            </div>
            <div className="row mb-1">
                <label className="col-2">
                thigh
                </label>
                <div className="col-sm-2">
                    <input type="number" name='thigh' className="form-control form-control-sm" value={this.state.thigh} onChange={this.ChangeValue} />
                </div>
            </div>
            <div className="row mb-1">
                <label className="col-2">
                rise
                </label>
                <div className="col-sm-2">
                    <input type="number" name='rise' className="form-control form-control-sm" value={this.state.rise} onChange={this.ChangeValue} />
                </div>
            </div>
            <div className="row mb-1">
                <label className="col-2">
                leg
                </label>
                <div className="col-sm-2">
                    <input type="number" name='leg' className="form-control form-control-sm" value={this.state.leg} onChange={this.ChangeValue} />
                </div>
            </div>
            <div className="row mb-1">
                <label className="col-2">
                outseam
                </label>
                <div className="col-sm-2">
                    <input type="number" name='outseam' className="form-control form-control-sm" value={this.state.outseam} onChange={this.ChangeValue} />
                </div>
            </div>
            <div className="row mb-1">
                <label className="col-2">
                inseam
                </label>
                <div className="col-sm-2">
                    <input type="number" name='inseam' className="form-control form-control-sm" value={this.state.inseam} onChange={this.ChangeValue} />
                </div>
            </div>
            <div className="row mb-1">
                <label className="col-2">
                    measurement_date
                </label>
                <div className="col-sm-2">
                    <input type="date" name='measurement_date' className="form-control form-control-sm" value={this.state.measurement_date} onChange={this.ChangeValue} />
                </div>
            </div>
            <div className="row mb-1">
                <label className="col-2">
                    remarks
                </label>
                <div className="col-sm-2">
                    <input type="text" name='remarks' className="form-control form-control-sm" value={this.state.remarks} onChange={this.ChangeValue} />
                </div>
            </div>
            <div className="row mb-1">
                <label className="col-2">
                    delivery_date
                </label>
                <div className="col-sm-2">
                    <input type="date" name='delivery_date' className="form-control form-control-sm" value={this.state.delivery_date} onChange={this.ChangeValue} />
                </div>
            </div>
            <input type="submit" className="btn btn-primary btn-block mb-3" value='save' onClick={(event)=>this.Savepantsdetail(event)} />
                                            
                                                    </form>
                                                </td>
                                            </tr>
                                        </thead>

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

export default Add_pants;