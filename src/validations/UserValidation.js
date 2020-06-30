const UserValidation = (values) => {
    const errors = {};

    if (!values.name || values.name === "") {
        errors.name = "Name cannot be empty";
    }
    
    if (!values.address || values.address === "") {
        errors.address = "Address cannot be empty";
    }

    if (!values.age || values.age === "") {
        errors.age = "Age cannot be empty";
    }

    if (!values.phone || values.phone === "") {
        errors.phone = "Phone number cannot be empty";
    }

    return errors;
};

export default UserValidation;
