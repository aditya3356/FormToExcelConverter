import React, { Component } from 'react';
import classes from './Table.css';
import ReactToExcel from 'react-html-table-to-excel';

class Table extends Component {
    
    render(){
        const fileName = this.props.location.state.firstName + " " + this.props.location.state.lastName + " data";

        return(
            <div className={classes.Container}>
                <p className={classes.Heading}>Your Table</p>
                <table id="user-data">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Date of Birth</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Experience</th>
                            <th>Skills</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.location.state.firstName}</td>
                            <td>{this.props.location.state.lastName}</td>
                            <td>{this.props.location.state.email}</td>
                            <td>+91{this.props.location.state.phone}</td>
                            <td>{this.props.location.state.dob}</td>
                            <td>{this.props.location.state.address}</td>
                            <td>{this.props.location.state.city}</td>
                            <td>{this.props.location.state.state}</td>
                            <td>{this.props.location.state.experience}</td>
                            <td>{this.props.location.state.skills}</td>
                            <td>{this.props.location.state.gender}</td>
                        </tr>
                    </tbody>
                </table>
                <ReactToExcel 
                    className={classes.Button}
                    table="user-data"
                    filename={fileName}
                    sheet="Sheet 1"
                    buttonText="Download as Excel"
                />
            </div>
        );
    }
};

export default Table;