import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Segment, Button, Input } from 'semantic-ui-react'
import firebase from '../../firebase'

const MessagesForm = ({ messagesRef, currentChannel, currentUser }) => {
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(null)
    const [errors, setErrors] = useState([])
    console.log(currentChannel)
    const [channel, setChannel] = useState(currentChannel)
    const [user, setUser] = useState(currentUser)

    const handleChange = e => {
        setMessage( e.target.value)
    }

    const sendMessage = () => {
        if (message) {
            setLoading(true)
            messagesRef
                .child(currentChannel.id)
                .push()
                .set(createMessage())
                .then(() => {
                    setLoading(false)
                    setMessage('')
                })
                .catch(err => {
                    console.error(err)
                    setLoading(false)
                    setErrors([
                        ...errors,
                        err
                    ])
                })
        }else{
            setErrors([
                ...errors,
                {
                    message: 'add a message'
                }
            ])
        }
    }

    const createMessage = () => {
        const messageForCreation = {
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            user: {
                id: user.uid,
                name: user.email,
                avatar: 'gavatar.com'
            },
            content: message
        }
        return messageForCreation
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

}

export default MessagesForm
