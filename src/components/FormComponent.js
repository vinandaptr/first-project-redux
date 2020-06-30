import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Row, Col, Label, Input, FormGroup, Button } from 'reactstrap';
import UserValidation from '../validations/UserValidation';

const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    meta: { touched, error, warning }
}) => (
        <Row>
            <Col md="12">
                <Label htmlFor="{input}" className="col-form-label">
                    {label}
                </Label>
            </Col>
            <Col md="12">
                <Input
                    {...input}
                    type={type}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readOnly}
                ></Input>
                {touched &&
                    ((error && <p style={{ color: "red" }}>{error}</p>) ||
                        (warning && <p style={{ color: "brown" }}>{warning}</p>))}
            </Col>
        </Row>
    );

const mapStateToProps = (state) => {
    return {
        initialValues: {
            name: state.users.getUserDetail.name,
            address: state.users.getUserDetail.address,
            age: state.users.getUserDetail.age,
            phone: state.users.getUserDetail.phone,
        }
    }
}

class FormComponent extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Col md="6">
                        <FormGroup>
                            <Field
                                type="text"
                                name="name"
                                component={renderField}
                                label="Name:"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Field
                                type="text"
                                name="address"
                                component={renderField}
                                label="Address:"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Field
                                type="text"
                                name="age"
                                component={renderField}
                                label="Age:"
                            />
                        </FormGroup>
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Field
                                type="text"
                                name="phone"
                                component={renderField}
                                label="Phone Number:"
                            />
                        </FormGroup>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col md="12">
                        <FormGroup>
                            <Button
                                color="dark"
                                type="submit"
                                disabled={this.props.submitting}
                            >
                                Submit
                            </Button>
                        </FormGroup>
                    </Col>
                </FormGroup>
            </form>
        )
    }
}

FormComponent = reduxForm({
    form: "formCreateUser",
    validate: UserValidation,
    enableReinitialize: true
})(FormComponent);

export default connect(mapStateToProps, null)(FormComponent);
