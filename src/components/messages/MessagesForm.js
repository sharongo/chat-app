import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Button, Input } from 'semantic-ui-react'

const MessagesForm = props => {
    return (
        <Segment className="message__form">
            <Input
                fluid
                name="message"
                style={{marginBottom: '0.7em'}}
                label={<Button icon={'add'}/>}
                labelPosition="left"
                placeholder="Write Yout Message"
            />
            <Button.Group icon widths="2">
                <Button
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
