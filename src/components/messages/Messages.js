import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Segment, Comment } from 'semantic-ui-react'
import MessagesHeader from './MessagesHeader'
import MessagesForm from './MessagesForm'
import Message from './Message'
import firebase from '../../firebase'


const Messages = ({ currentChannel, currentUser }) => {

    const [messagesRef, setMessagesRef] = useState(firebase.database().ref('messages'))
    //const [channel, setchannel]   = useState(currentChannel)
    const [user, setUser] = useState(currentUser)
    const [messages, setMessages] = useState([])
    const [messagesLoading, setMessagesLoading] = useState(true)

    useEffect(() => {
        if(currentChannel && user){
            addListeners(currentChannel.id)
        }
    }, [])

    const addListeners = channelId => {
        addMessageListener(channelId)
    }

    const addMessageListener = channelId => {
        let loadedMessages = [];
        messagesRef.child(channelId).on('child_added', snap => {
           // loadedMessages.push(snap.val())
            // setMessages([
            //     ...messages,
            //     snap.val()
            //    // messages.push(snap.val())
            // ])
            setMessages(messages => messages.concat(snap.val()))
            setMessagesLoading(false)

            
        })
        console.log(messages)
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
                messagesRef={messagesRef}
                currentUser={user} />
        </Fragment>
    )
}

Messages.propTypes = {

}

export default Messages
