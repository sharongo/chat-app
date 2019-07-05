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

const Register = props => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
    });

    const { name, email, password, passwordConfirmation } = formData;


    const handleChange = e => {

    }

    return (
        <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" icon color="orange" textAlign="center">
                    <Icon name="puzzle piece" color="orange" />
                    Register For Chat App
                </Header>
                <Form size="large">
                    <Segment stacked>
                        <Form.Input fluid
                            name="username"
                            icon="user"
                            iconPosition="left"
                            placeholder="Username"
                            onChange={() => handleChange}
                            type="text" />
                        <Form.Input fluid
                            name="email"
                            icon="mail"
                            iconPosition="left"
                            placeholder="Email"
                            onChange={() => handleChange}
                            type="email" />
                        <Form.Input fluid
                            name="password"
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            onChange={() => handleChange}
                            type="password" />
                        <Form.Input fluid
                            name="passwordConfirmation"
                            icon="repeat"
                            iconPosition="left"
                            placeholder="Password Confirmation"
                            onChange={() => handleChange}
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
