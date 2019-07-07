import React, { useState, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Menu, Icon, Modal, Form, Input, Button } from 'semantic-ui-react'
import firebase from '../../firebase'


const Channels = ({ currentUser }) => {
    const [channels, setChannels] = useState([])

    const [modal, setModal] = useState(false)

    const [channelsRef, setChannelsRef] = useState(firebase.database().ref('channels'))

    const [channelData, setChannelData] = useState({
        channelName: '',
        channelDetails: ''
    })

    const { channelName, channelDetails } = channelData

    useEffect(() => {
        addListeners()
       
    }, [])

    const loadedChannels = []

    const addListeners = () => {
    
        //let loadedChannels = [];
        channelsRef.on('child_added', snap => {
            loadedChannels.push(snap.val());
            setChannels([
                ...channels,
                channels.push(snap.val())
            ])
            console.log(loadedChannels);
        })
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

    const displayChannels = (channels) => {

    }

    const openModal = () => {
        setModal(true)
    }

    const isFormValid = ({ channelName, channelDetails }) => {
        return channelName && channelDetails
    }

    const addChannel = () => {
        const key = channelsRef.push().key;

        const newChannel = {
            id: key,
            name: channelName,
            details: channelDetails,
            createdBy: {
                name: currentUser ? currentUser.email : 'defaultName',
                avatar: 'avatar.com'
            }

        }
        channelsRef
            .child(key)
            .update(newChannel)
            .then(() => {
                setChannelData({
                    channelName: '',
                    channelDetails: ''
                })
                closeModal();
                console.log('channel added')
            })
            .catch(err => {
                console.error(err)
            })

    }

    const handleSubmit = e => {
        e.preventDefault()
        if (isFormValid(channelData)) {
            addChannel();
        } else {

        }
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
                        onClick={() => console.log(channel)}
                        name={channel.name}
                        style={{opacity: 0.7}}
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

}

export default Channels
