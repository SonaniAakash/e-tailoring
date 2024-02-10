import React, { Component } from 'react';
import { Form } from 'react-router-dom';
class Add_jodhpuri extends Component {
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
    Savejodhpuridetail = (e) => {
        {
            var url = "http://127.0.0.1:5000/jodhpuri/2/" + this.state.chest + "/" + this.state.stomach + "/" + this.state.waist + "/" + this.state.hip + "/" + this.state.shoulder + "/" + this.state.sleeve + "/" + this.state.rise + "/" + this.state.inseamlength + "/" + this.state.bottom + "/" + this.state.fulllength + "/" + this.state.measurement_date + "/" + this.state.remarks + "/" + this.state.delivery_date;
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
                                <h4>Add jodhpuri</h4>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <td>
                                <form onSubmit={(event) => this.Savejodhpuridetail(event)} method="get" encType='multipart/form-data'>
              
            <div className="row mb-1">
                <label className="col-2">
                chest
                </label>
                <div className="col-sm-2">
                    <input type="number" name='chest' className="form-control form-control-sm" value={this.state.chest} onChange={this.ChangeValue} />
                </div>
            </div>
            <div className="row mb-1">
                <label className="col-2">
                stomach
                </label>
                <div className="col-sm-2">
                    <input type="number" name='stomach' className="form-control form-control-sm" value={this.state.stomach} onChange={this.ChangeValue} />
                </div>
            </div>
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
                shoulder
                </label>
                <div className="col-sm-2">
                    <input type="number" name='shoulder' className="form-control form-control-sm" value={this.state.shoulder} onChange={this.ChangeValue} />
                </div>
            </div>
            <div className="row mb-1">
                <label className="col-2">
                sleeve
                </label>
                <div className="col-sm-2">
                    <input type="number" name='sleeve' className="form-control form-control-sm" value={this.state.sleeve} onChange={this.ChangeValue} />
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
                inseamlength
                </label>
                <div className="col-sm-2">
                    <input type="number" name='inseamlength' className="form-control form-control-sm" value={this.state.inseamlength} onChange={this.ChangeValue} />
                </div>
            </div>
            <div className="row mb-1">
                <label className="col-2">
                bottom
                </label>
                <div className="col-sm-2">
                    <input type="number" name='bottom' className="form-control form-control-sm" value={this.state.bottom} onChange={this.ChangeValue} />
                </div>
            </div>
            <div className="row mb-1">
                <label className="col-2">
                fulllength
                </label>
                <div className="col-sm-2">
                    <input type="number" name='fulllength' className="form-control form-control-sm" value={this.state.fulllength} onChange={this.ChangeValue} />
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
            <input type="submit" className="btn btn-primary btn-block mb-3" value='save' onClick={(event)=>this.Savejodhpuridetail(event)} />
                                            
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

export default Add_jodhpuri;