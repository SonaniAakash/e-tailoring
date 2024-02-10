import React, { Component } from 'react';
class View_pants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            data2: []
        };
    }
    componentDidMount() {
        console.log("componentDidMount method called...")
        var url = "http://127.0.0.1:5000/pants";
        fetch(url).then(res => res.json()).then((response) => {
            console.log("Response is : ", response)
            this.setState({
                data2: response
            });
         });
        var url2 = "http://127.0.0.1:5000/customer";
        fetch(url2).then(res => res.json()).then((response) => {
            console.log("Response is : ", response)
            this.setState({
                data: response

            });

        })
        
    }
    Deletepants(categoryid)
    {
        console.log("this is category ");
      var url = "http://127.0.0.1:5000/pants/" + categoryid;
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
                                <h4 className='text-center'>View pants</h4>
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
                                <h4 >pants details</h4>
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>customer_id</th>
                                                <th>waist</th>
                                                <th>hip</th>
                                                <th>thigh</th>
                                                <th>rise</th>
                                                <th>leg</th>
                                                <th>outseam</th>
                                                <th>inseam</th>
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
                                                        <td>{data.waist}</td>
                                                        <td>{data.hip}</td>
                                                        <td>{data.thigh}</td>
                                                        <td>{data.rise}</td>
                                                        <td>{data.leg}</td>
                                                        <td>{data.outseam}</td>
                                                        <td>{data.inseam}</td>
                                                        <td>{data.measurement_date}</td>
                                                        <td>{data.remarks}</td>
                                                        <td>{data.delivery_date}</td>
                                                        <td> <button className='btn btn-danger' onClick={() => this.Deletepants(data.id)} >Delete</button> </td>
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

export default View_pants;