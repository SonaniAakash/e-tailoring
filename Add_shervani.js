import React, { Component } from 'react';
class Add_shervani extends Component {
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

    SaveshervaniDetail = (e) => {
        {
            var url = "http://127.0.0.1:5000/shervani/2/" + this.state.length + "/" + this.state.chest + "/" + this.state.bust + "/" + this.state.hipsize + "/" + this.state.shoulder + "/" + this.state.armhole + "/" + this.state.sleeve + "/" + this.state.around + "/" + this.state.neck + "/" + this.state.back + "/" + this.state.flare + "/" + this.state.chudidar + "/" + this.state.thigh + "/" + this.state.knee + "/" + this.state.ankle + "/" + this.state.looseankle + "/" + this.state.measurement_date + "/" + this.state.remarks + "/" + this.state.delivery_date;
            console.log(url);
            fetch(url, { method: 'get' }).then((res) => res.json()).then((response) => {
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
                                <h4>Add Shervani</h4>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <td>
                                                    <form onSubmit={(event) => this.Saveshervanidetail(event)} method="get" encType='multipart/form-data'>

                                                        <div className="row mb-1">
                                                            <label className="col-2">
                                                                length
                                                            </label>
                                                            <div className="col-sm-2">
                                                                <input type="number" name='length' className="form-control form-control-sm" value={this.state.length} onChange={this.ChangeValue} />
                                                            </div>
                                                        </div>
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
                                                                bust
                                                            </label>
                                                            <div className="col-sm-2">
                                                                <input type="number" name='bust' className="form-control form-control-sm" value={this.state.bust} onChange={this.ChangeValue} />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-1">
                                                            <label className="col-2">
                                                                hipsize
                                                            </label>
                                                            <div className="col-sm-2">
                                                                <input type="number" name='hipsize' className="form-control form-control-sm" value={this.state.hipsize} onChange={this.ChangeValue} />
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
                                                                armhole
                                                            </label>
                                                            <div className="col-sm-2">
                                                                <input type="number" name='armhole' className="form-control form-control-sm" value={this.state.armhole} onChange={this.ChangeValue} />
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
                                                                around
                                                            </label>
                                                            <div className="col-sm-2">
                                                                <input type="number" name='around' className="form-control form-control-sm" value={this.state.around} onChange={this.ChangeValue} />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-1">
                                                            <label className="col-2">
                                                                neck
                                                            </label>
                                                            <div className="col-sm-2">
                                                                <input type="number" name='neck' className="form-control form-control-sm" value={this.state.neck} onChange={this.ChangeValue} />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-1">
                                                            <label className="col-2">
                                                                back
                                                            </label>
                                                            <div className="col-sm-2">
                                                                <input type="number" name='back' className="form-control form-control-sm" value={this.state.back} onChange={this.ChangeValue} />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-1">
                                                            <label className="col-2">
                                                                flare
                                                            </label>
                                                            <div className="col-sm-2">
                                                                <input type="number" name='flare' className="form-control form-control-sm" value={this.state.flare} onChange={this.ChangeValue} />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-1">
                                                            <label className="col-2">
                                                                chudidar
                                                            </label>
                                                            <div className="col-sm-2">
                                                                <input type="number" name='chudidar' className="form-control form-control-sm" value={this.state.chudidar} onChange={this.ChangeValue} />
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
                                                                knee
                                                            </label>
                                                            <div className="col-sm-2">
                                                                <input type="number" name='knee' className="form-control form-control-sm" value={this.state.knee} onChange={this.ChangeValue} />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-1">
                                                            <label className="col-2">
                                                                ankle
                                                            </label>
                                                            <div className="col-sm-2">
                                                                <input type="number" name='ankle' className="form-control form-control-sm" value={this.state.ankle} onChange={this.ChangeValue} />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-1">
                                                            <label className="col-2">
                                                                looseankle
                                                            </label>
                                                            <div className="col-sm-2">
                                                                <input type="number" name='looseankle' className="form-control form-control-sm" value={this.state.looseankle} onChange={this.ChangeValue} />
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
                                                        <input type="submit" className="btn btn-primary btn-block mb-3" value='save' onClick={(event) => this.SaveshervaniDetail(event)} />

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

export default Add_shervani;