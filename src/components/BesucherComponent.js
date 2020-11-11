import React from "react";
import BesucherService from "../services/BesucherService";

class BesucherComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            besucher: []
        };
    }

    componentDidMount(){
        BesucherService.getBesucher().then((response) => {
            this.setState({besucher: response.data});
        })
    }

    render(){
        return (<div className="container">
                <h1 className="text-center font-weight-bold">Besucher</h1>
                <table className="table table-striped">
                   <thead className="thead-dark">
                     <tr>
                            <th>Besucher ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.besucher.map(
                                besucher =>
                                <tr key = {besucher.id}>
                                    <td>{besucher.id}</td>
                                    <td>{besucher.name}</td>
                                    <td>{besucher.email}</td>
                                    <td>{besucher.gender}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>    
            </div>)
    }
}

export default BesucherComponent