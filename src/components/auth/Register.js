import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
    Grid,
    Form,
    Segment,
    Button,
    Header,
    Message,
    Icon,
    GridColumn
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import firebase from '../../../src/firebase'

const Register = props => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });

    const [errors, setErrors] = useState([]);

    const { username, email, password, passwordConfirmation } = formData;




    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const isFormValid = () => {
        let error;

        if (isFormEmpty(formData)) {
            error = { message: 'Fill in all fields' }
            setErrors([
                ...errors,
                error
            ]);
            console.log(errors)
            return false;
        } else if (!isPasswordValid(formData)) {
            error = { message: "Password is invalid" };
            setErrors([
                ...errors,
                error
            ]);
            console.log(errors)
            return false;
        } else {
            // form is valid
            return true;
        }

    }

    const displayErrors = errors => {
        errors.map((error, i) => { return <p key={i}>{error.message}</p> });
    }

    const isPasswordValid = ({ password, passwordConfirmation }) => {
        if (password.length < 6 || passwordConfirmation.length < 6) {
            return false;
        } else if (password !== passwordConfirmation) {
            return false;
        } else {
            return true;
        }
    }

    const isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
        if (username.length === 0) {
            return true;
        }
        else if (email.length === 0) {
            return true;
        }
        else if (password.length === 0) {
            return true;
        }
        else if (passwordConfirmation.length === 0) {
            return true;
        }


    }



    const handleSubmit = e => {
        if (isFormValid()) {
            e.preventDefault();
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(createdUser => {
                    console.log(createdUser)
                })
                .catch(err => {
                    console.error(err)
                });
        }

    }

    return (
        <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" icon color="orange" textAlign="center">
                    <Icon name="puzzle piece" color="orange" />
                    Register For Chat App
                </Header>
                <Form onSubmit={(e) => handleSubmit(e)} size="large">
                    <Segment stacked>
                        <Form.Input fluid
                            name="username"
                            icon="user"
                            iconPosition="left"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => handleChange(e)}
                            type="text" />
                        <Form.Input fluid
                            name="email"
                            icon="mail"
                            iconPosition="left"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => handleChange(e)}
                            type="email" />
                        <Form.Input fluid
                            name="password"
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => handleChange(e)}
                            type="password" />
                        <Form.Input fluid
                            name="passwordConfirmation"
                            icon="repeat"
                            iconPosition="left"
                            placeholder="Password Confirmation"
                            value={passwordConfirmation}
                            onChange={(e) => handleChange(e)}
                            type="password" />
                        <Button color="orange" fluid size="large">
                            Submit
                        </Button>
                    </Segment>
                </Form>
                {errors && errors.length > 0 ? (
                    <Message error>
                        <h3>Errors:</h3>
                        {(errors) => displayErrors(errors)}
                    </Message>
                ) : null}
                <Message>
                    Already a user?{" "}
                    <Link to="/login">
                        Login
                    </Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

Register.propTypes = {

}

export default Register
