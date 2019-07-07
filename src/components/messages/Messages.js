import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Segment, Comment } from 'semantic-ui-react'
import MessagesHeader from './MessagesHeader'
import MessagesForm from './MessagesForm'

const Messages = props => {
    return (
        <Fragment>
            <MessagesHeader/>
            <Segment>
                <Comment.Group className="messages">

                </Comment.Group>
            </Segment>
            <MessagesForm/>
        </Fragment>
    )
}

Messages.propTypes = {

}

export default Messages
