import React, { Component } from 'react';
class Add_suit extends Component {
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
    SaveSuitdetail = (e) => {
        {
            var url = "http://127.0.0.1:5000/suit/2/" + this.state.bust + "/" + this.state.waist + "/" + this.state.bottomhem + "/" + this.state.frontlengh + "/" + this.state.shoulder + "/" + this.state.backlength + "/" + this.state.sleevlength + "/" + this.state.measurement_date + "/" + this.state.remarks + "/" + this.state.delivery_date;
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
                                <h4>Add suit</h4>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <td>
                                <form onSubmit={(event) => this.SaveSuitdetail(event)} method="get" encType='multipart/form-data'>
              
            <div className="row mb-1">
                <label className="col-2">
                bust
                </label>
                <div className="col-sm-2">
                    <input type="number" name='bust' className="form-control form-control-sm" value={this.state.bust} onChange={this.ChangeValue} />
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
                bottomhem
                </label>
                <div className="col-sm-2">
                    <input type="number" name='bottomhem' className="form-control form-control-sm" value={this.state.bottomhem} onChange={this.ChangeValue} />
                </div>
            </div>
            <div className="row mb-1">
                <label className="col-2">
                frontlengh
                </label>
                <div className="col-sm-2">
                    <input type="number" name='frontlengh' className="form-control form-control-sm" value={this.state.frontlengh} onChange={this.ChangeValue} />
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
                backlength
                </label>
                <div className="col-sm-2">
                    <input type="number" name='backlength' className="form-control form-control-sm" value={this.state.backlength} onChange={this.ChangeValue} />
                </div>
            </div>
            <div className="row mb-1">
                <label className="col-2">
                sleevlength
                </label>
                <div className="col-sm-2">
                    <input type="number" name='sleevlength' className="form-control form-control-sm" value={this.state.sleevlength} onChange={this.ChangeValue} />
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
            <input type="submit" className="btn btn-primary btn-block mb-3" value='save' onClick={(event)=>this.SaveSuitdetail(event)} />
                                            
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

export default Add_suit;