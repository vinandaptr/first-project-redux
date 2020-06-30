import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { BackComponent } from '../components/BackComponent';
import { connect } from 'react-redux';
import FormComponent from '../components/FormComponent';
import { getUserDetail, putUserEdit } from '../actions/userAction';
import swal from 'sweetalert';

const mapStateToProps = (state) => {
    return {
        getResponseDataUser: state.users.getResponseDataUser,
        errorResponseDataUser: state.users.errorResponseDataUser
    }
}

class EditUserContainer extends Component {
    componentDidMount() {
        this.props.dispatch(getUserDetail(this.props.match.params.id));
    }

    handleSubmit(data) {
        this.props.dispatch(putUserEdit(data, this.props.match.params.id));
    }

    render() {
        if (this.props.getResponseDataUser || this.props.errorResponseDataUser) {
            if (this.props.errorResponseDataUser) {
                swal("Failed!",
                    this.props.errorResponseDataUser, "error");
            } else {
                swal("Updated Successfully!",
                    "Name: " + this.props.getResponseDataUser.name +
                    " , Age: " + this.props.getResponseDataUser.age, "success");
            }
        }
        return (
            <div>
                <Container>
                    <BackComponent />
                    <h1>Edit User</h1>
                    <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
                </Container>
            </div>
        )
    }
}

export default connect(mapStateToProps, null)(EditUserContainer);
