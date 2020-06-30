import React, { Component } from 'react'
import { Container } from 'reactstrap'
import { BackComponent } from '../components/BackComponent'
import FormComponent from '../components/FormComponent'
import { connect } from 'react-redux';
import { postUserCreate } from '../actions/userAction';
import swal from 'sweetalert';

const mapStateToProps = (state) => {
    return {
        getResponseDataUser: state.users.getResponseDataUser,
        errorResponseDataUser: state.users.errorResponseDataUser
    }
}

class CreateUserContainer extends Component {

    handleSubmit(data) {
        this.props.dispatch(postUserCreate(data));
    }
    render() {
        if (this.props.getResponseDataUser || this.props.errorResponseDataUser) {
            if (this.props.errorResponseDataUser) {
                swal("Failed!",
                    this.props.errorResponseDataUser, "error");
            } else {
                swal("Success!",
                    "Name: " + this.props.getResponseDataUser.name +
                    " , Age: " + this.props.getResponseDataUser.age, "success");
            }
        }
        return (
            <Container>
                <BackComponent />
                <h1>Create User</h1>
                <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
            </Container>
        )
    }
};

export default connect(mapStateToProps, null)(CreateUserContainer);
