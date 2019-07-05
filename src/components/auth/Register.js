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

    const { username, email, password, passwordConfirmation } = formData;


    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
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
