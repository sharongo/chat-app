import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Segment, Comment } from 'semantic-ui-react'
import MessagesHeader from './MessagesHeader'
import MessagesForm from './MessagesForm'
import Message from './Message'
import { connect } from 'react-redux'
import { addMessagesListener } from '../../actions/message'


const Messages = ({ currentChannel, currentUser, addMessagesListener, message: { messages } }) => {

    const [user, setUser] = useState(currentUser)
    const [messagesLoading, setMessagesLoading] = useState(true)

    useEffect(() => {
        if (currentChannel && user) {
            addListeners(currentChannel.id)
        }
    }, [])

    const addListeners = channelId => {
        addMessagesListener(channelId)
    }

    return (
        <Fragment>
            <MessagesHeader />
            <Segment>
                <Comment.Group className="messages">
                    {messages && messages.length > 0 && messages.map(message => (
                        <Message
                            key={message.timestamp}
                            message={message}
                            user={user}
                        />
                    ))}
                </Comment.Group>
            </Segment>
            <MessagesForm
                currentChannel={currentChannel}
                currentUser={user} />
        </Fragment>
    )
}

Messages.propTypes = {
    message: PropTypes.object
}

const mapStateToProps = state => ({
    message: state.message
})

export default connect(mapStateToProps, { addMessagesListener })(Messages)
