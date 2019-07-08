import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Segment, Comment } from 'semantic-ui-react'
import MessagesHeader from './MessagesHeader'
import MessagesForm from './MessagesForm'
import firebase from '../../firebase'

const Messages = ({ currentChannel, currentUser }) => {

    const [messagesRef, setMessagesRef] = useState(firebase.database().ref('messages'))
    const [channel, setchannel]   = useState(currentChannel)
    const [user, setUser] = useState(currentUser)
    return (
        <Fragment>
            <MessagesHeader />
            <Segment>
                <Comment.Group className="messages">

                </Comment.Group>
            </Segment>
            <MessagesForm
                currentChannel={channel} 
                messagesRef={messagesRef}
                currentUser={user} />
        </Fragment>
    )
}

Messages.propTypes = {

}

export default Messages
