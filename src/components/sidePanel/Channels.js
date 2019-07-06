import React, { useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Modal, Form, Input, Button } from 'semantic-ui-react'

const Channels = props => {
    const [channels, setChannels] = useState([])
    const [modal, setModal] = useState(false)
    const [channelData, setChannelData] = useState({
        channelName: '',
        channelDetails: ''
    })
    const closeModal = () => {
        setModal(false)
    }

    const handleChange = e => {
        setChannelData({
            ...channelData,
            [e.target.name]: e.target.value
        })
    }

    const openModal = () => {
        setModal(true)
    }

    return (
        <Fragment>
            <Menu.Menu style={{ paddingBottom: '2em' }}>
                <Menu.Item>
                    <span>
                        <Icon name="exchange" /> CHANNELS
                </span>{' '}
                    ({channels.length}) <Icon name="add" onClick={() => openModal()}/>
                </Menu.Item>
            </Menu.Menu>
            <Modal basic open={modal} onClose={closeModal}>
                <Modal.Header>Add A Channel</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Field>
                            <Input
                                fluid
                                label="Name Of Channel"
                                name="channelName"
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Field>
                        <Form.Field>
                            <Input
                                fluid
                                label="Channel Details"
                                name="channelDetails"
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button color="green" inverted>
                        <Icon name="checkmark" /> Add
                </Button>
                    <Button color="red" inverted onClick={() => closeModal()}>
                        <Icon name="remove" /> Cancel
                </Button>
                </Modal.Actions>
            </Modal>
        </Fragment>
    )
}

Channels.propTypes = {

}

export default Channels
