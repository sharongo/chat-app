import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Segment, Button, Input } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { createMessage } from '../../actions/message'

const MessagesForm = ({ currentChannel, currentUser, createMessage }) => {
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(null)
    const [errors, setErrors] = useState([])
    const [channel, setChannel] = useState(currentChannel)
    const [user, setUser] = useState(currentUser)

    const handleChange = e => {
        setMessage(e.target.value)
    }

    const sendMessage = () => {
        if (message) {
           // setLoading(true)
            const messageForCreation = {
                channelId: currentChannel.id,
                user: user.email,
                content: message

            }
            createMessage(messageForCreation);
            setMessage('')
        } else {
            setErrors([
                ...errors,
                {
                    message: 'add a message'
                }
            ])
        }
    }

    return (
        <Segment className="message__form">
            <Input
                fluid
                name="message"
                onChange={(e) => handleChange(e)}
                value={message}
                style={{ marginBottom: '0.7em' }}
                label={<Button icon={'add'} />}
                labelPosition="left"
                className={
                    errors.some(error => {
                        error.message.includes('message')
                    }) ? 'error' : ''
                }
                placeholder="Write Yout Message"
            />
            <Button.Group icon widths="2">
                <Button
                    onClick={() => sendMessage()}
                    disabled={loading}
                    color="orange"
                    content="Add Replay"
                    labelPosition="left"
                    icon="edit"
                />
                <Button
                    color="teal"
                    content="Upload Media"
                    labelPosition="right"
                    icon="cloud upload"
                />
            </Button.Group>

        </Segment>

    )
}

MessagesForm.propTypes = {
    createMessage: PropTypes.func
}

export default connect(null, { createMessage })(MessagesForm)
