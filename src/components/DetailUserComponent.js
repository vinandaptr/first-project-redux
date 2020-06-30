import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';

const mapStateToProps = (state) => {
    return {
        getUserDetail: state.users.getUserDetail,
        errorUserDetail: state.users.errorUserDetail
    }
}

const DetailUserComponent = (props) => {
    return (
        <Table striped>
            <tbody>
                <tr>
                    <td width="200">Name</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.name}</td>
                </tr>
                <tr>
                    <td width="200">Address</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.address}</td>
                </tr>
                <tr>
                    <td width="200">Age</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.age}</td>
                </tr>
                <tr>
                    <td width="200">Phone Number</td>
                    <td width="10">:</td>
                    <td>{props.getUserDetail.phone}</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default connect(mapStateToProps)(DetailUserComponent);
