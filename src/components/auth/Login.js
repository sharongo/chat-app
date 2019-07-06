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

const Login = ({ history }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState([]);

    const [loading, setLoading] = useState(false);


    const { email, password } = formData;


    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }



    const displayErrors = errors => {
        errors.map((error, i) => { return <p key={i}>{error.message}</p> });
    }

    const isFormValid = ({ email, password }) => {
        return email && password
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (isFormValid(formData)) {
            setErrors([])
            setLoading(true)
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(signedInUser => {
                    console.log(signedInUser);
                    setLoading(false);
                    history.push("/");

                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                    setErrors([
                        ...errors,
                        err
                    ]);
                });
        }

    }

    return (
        <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h2" icon color="violet" textAlign="center">
                    <Icon name="code branch" color="violet" />
                    Login To Chat App
                </Header>
                <Form onSubmit={(e) => handleSubmit(e)} size="large">
                    <Segment stacked>
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
                        <Button disabled={loading} className={loading ? 'loading' : ''} color="violet" fluid size="large">
                            Submit
                        </Button>
                    </Segment>
                </Form>
                {errors && errors.length > 0 ? (
                    <Message error>
                        <h3>Errors:</h3>
                        {errors.map((error, i) => (
                            <p key={i}>{error.message}</p>
                        ))}
                    </Message>
                ) : null}
                <Message>
                    Dont have an account?{" "}
                    <Link to="/register">
                        Register
                    </Link>
                </Message>
            </Grid.Column>
        </Grid>
    )
}

Login.propTypes = {

}

export default Login
