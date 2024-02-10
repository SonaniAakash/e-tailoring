import React, { Component } from 'react';
class View_shervani extends Component {
    constructor(props) {
        super(props);
         this.state = {
            data: [],
            data2:[]
        }
    };
    componentDidMount() {
        console.log("componentDidMount method called...")
        var url = "http://127.0.0.1:5000/shervani";
        fetch(url).then(res => res.json()).then((response) => {
            console.log("Response is : ", response)
            this.setState({
                data2: response

            });

        })
        var url2 = "http://127.0.0.1:5000/customer";
        fetch(url2).then(res => res.json()).then((response) => {
          console.log("Response is : ", response)
          this.setState({
            data: response
    
          });
    
        })
    }

    Deleteshervani(categoryid)
    {
        console.log("this is category ");
      var url = "http://127.0.0.1:5000/shervani/" + categoryid;
      console.log(url);
      fetch(url).then((res) => res.json()).then((response) =>{
          console.log(response);
          if(response[0]['error']!='no')
          {
            alert(response[0]['error'])
          }
          else 
          {
            var updatedCategories = this.state.categories.filter(category => {
              return category.id !== categoryid;
            });
            this.setState({
              categories : updatedCategories
            });
          }
      });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <h4 className='text-center'>View shervani</h4>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                                <th>id</th>
                                                <th>name</th>
                                                <th>Mobile no</th>
                                                <th>email</th>
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
                          </tr>);

                        })}
                                        </tbody>
                                    </table>
                                </div>
                                <h4 >shervani details</h4>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>customer_id</th> 
                                                <th>length</th>
                                                <th>chest</th>
                                                <th>bust</th>
                                                <th>hipsize</th>
                                                <th>shoulder</th>
                                                <th>armhole</th>
                                                <th>sleeve</th>
                                                <th>around</th>
                                                <th>neck</th>
                                                <th>back</th>
                                                <th>flare</th>
                                                <th>chudidar</th>
                                                <th>thigh</th>
                                                <th>knee</th>
                                                <th>ankle</th>
                                                <th>looseankle</th>
                                                <th>measurement_date</th>
                                                <th>remarks</th>
                                                <th>delivery_date</th>   
                                                <th>operation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.data2.map((data) => {
                                                    return (<tr>
                                                        <td>{data.id}</td>
                                                        <td>{data.customerid}</td>
                                                        <td>{data.length}</td>
                                                        <td>{data.chest}</td>
                                                        <td>{data.bust}</td>
                                                        <td>{data.hipsize}</td>
                                                        <td>{data.shoulder}</td>
                                                        <td>{data.armhole}</td>
                                                        <td>{data.sleeve}</td>
                                                        <td>{data.around}</td>
                                                        <td>{data.neck}</td>
                                                        <td>{data.back}</td>
                                                        <td>{data.flare}</td>
                                                        <td>{data.chudidar}</td>
                                                        <td>{data.thigh}</td>
                                                        <td>{data.knee}</td>
                                                        <td>{data.ankle}</td>
                                                        <td>{data.looseankle}</td>
                                                        <td>{data.measurement_date}</td>
                                                        <td>{data.remarks}</td>
                                                        <td>{data.delivery_date}</td>
                                                        <td> <button className='btn btn-danger' onClick={() => this.Deleteshervani(data.id)} >Delete</button> </td>
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

export default View_shervani;