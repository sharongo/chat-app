import React from 'react'
import PropTypes from 'prop-types'
import {Comment} from 'semantic-ui-react'
import moment from 'moment'



const Message = ({message, user}) => {
  
    
    const timeFromNow = timestamp => {
        return moment(timestamp).fromNow()
    }

    return (
        <Comment>
            <Comment.Avatar src={message && message.user && message.user}/>
            <Comment.Content>
                <Comment.Author as="a">
                    {message && message.user && message.user}
                </Comment.Author>
                <Comment.Metadata>{timeFromNow(message.time)}</Comment.Metadata>
                <Comment.Text>{message.content}</Comment.Text>
            </Comment.Content>
        </Comment>
    )
}

Message.propTypes = {

}

export default Message
