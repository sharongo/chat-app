import React from 'react'
import PropTypes from 'prop-types'
import {Comment} from 'semantic-ui-react'
import moment from 'moment'



const Message = ({message, user}) => {
    console.log(message)
    console.log(user)

    // const isOwnMessage = (message, user) => {
    //     return message.user.id === user.uid ? 'message__self' : '';
    // }
    
    const timeFromNow = timestamp => {
        return moment(timestamp).fromNow()
    }

    return (
        <Comment>
            <Comment.Avatar src={message && message.user && message.user.avatar}/>
            <Comment.Content>
                <Comment.Author as="a">
                    {message && message.user && message.user.name}
                </Comment.Author>
                <Comment.Metadata>{timeFromNow(message.timestamp)}</Comment.Metadata>
                <Comment.Text>{message.content}</Comment.Text>
            </Comment.Content>
        </Comment>
    )
}

Message.propTypes = {

}

export default Message
