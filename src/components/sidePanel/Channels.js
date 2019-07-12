import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Modal, Form, Input, Button } from 'semantic-ui-react'
import firebase from '../../firebase'
import { setCurrentChannel } from '../../actions/channel'
import { connect } from 'react-redux'
import {addChannel, addListeners} from '../../actions/channel'


const Channels = ({ currentUser, setCurrentChannel, addChannel, addListeners, channels }) => {

    const [modal, setModal] = useState(false)

    const [channelData, setChannelData] = useState({
        channelName: '',
        channelDetails: ''
    })

    const [firstLoad, setFirstLoad] = useState(true)

    const [activeChannelId, setActiveChannelId] = useState(channels && channels.length > 0 && channels[0].id)
    //const [activeChannelId, setActiveChannelId] = useState('')
    const { channelName, channelDetails } = channelData
    console.log(channels)
    useEffect(() => {
        addListeners();
 
        return () => {
            removeListeners();
        }
    }, [])

    const removeListeners = () => {
        firebase.database().ref('channels').off()
    }

    

    const setFirstChannel = () => {
        const firstChannel = channels[0]
        if (firstLoad && channels.length > 0) {
            setCurrentChannel(firstChannel)
            setActiveChannel(firstChannel)
        }
        setFirstLoad(false)
    }

    const setActiveChannel = (channel) => {
        setActiveChannelId(channel.id)
        
    }

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

    const isFormValid = ({ channelName, channelDetails }) => {
        return channelName && channelDetails
    }

    

    const handleSubmit = e => {
        e.preventDefault()
        if (isFormValid(channelData)) {
            const newChannel = {
                name: channelName,
                details: channelDetails,
                createdBy: currentUser.email
            }
            setModal(false)
            addChannel(newChannel);
        } else {

        }
    }

    const changeChannel = (channel) => {
        setActiveChannel(channel)
        setCurrentChannel(channel)
    }



    return (
        <Fragment>
            <Menu.Menu style={{ paddingBottom: '2em' }}>
                <Menu.Item>
                    <span>
                        <Icon name="exchange" /> CHANNELS
                    </span>{' '}
                    ({channels.length}) <Icon name="add" onClick={() => openModal()} />
                </Menu.Item>
                {channels.length > 0 && channels.map(channel => (
                    <Menu.Item
                        key={channel.id}
                        onClick={() => changeChannel(channel)}
                        name={channel.name}
                        style={{ opacity: 0.7 }}
                        active={channel.id === activeChannelId}
                    >
                        #{channel.name}
                    </Menu.Item>
                ))}
            </Menu.Menu>
            <Modal basic open={modal} onClose={closeModal}>
                <Modal.Header>Add A Channel</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={(e) => handleSubmit(e)}>
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
                    <Button color="green" inverted onClick={(e) => handleSubmit(e)}>
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
    setCurrentChannel: PropTypes.func
}

const mapStateToProps = state => ({
    channels: state.channel.channels
})

export default connect(mapStateToProps, { setCurrentChannel, addChannel, addListeners })(Channels)
