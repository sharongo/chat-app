import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Grid, Header, Icon, Dropdown } from 'semantic-ui-react'
import firebase from '../../firebase'


const UserPanel = ({ currentUser }) => {
    
    const dropdownOptions =
        [
            {
                key: 'user',
                text: <span>Signed in as <strong>{currentUser && currentUser.email}</strong></span>,
                disabled: true
            },
            {
                key: 'avatar',
                text: <span>Change Avatr</span>,
            },
            {
                key: 'signout',
                text: <span onClick={() => handleSignout()}>Sign Out</span>,
            }
        ]

    const handleSignout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => console.log("signed out!"));
    }


    return (
        <Grid style={{ backgroundColor: '#4c3c4c' }}>
            <Grid.Column>
                <Grid.Row style={{ padding: '1.2em', margin: 0 }} >
                    <Header inverted floated="left" as="h2">
                        <Icon name="code" />
                        <Header.Content>
                            ChatApp
                        </Header.Content>
                    </Header>
                </Grid.Row>
                {/* User Dropdown */}
                <Header
                    style={{ padding: '0.25em' }}
                    as="h4"
                    inverted
                >
                    <Dropdown trigger={
                        <span>{currentUser && currentUser.email}</span>
                    }
                        options={dropdownOptions} />
                </Header>
            </Grid.Column>
        </Grid>
    )
}

UserPanel.propTypes = {
    currentUser: PropTypes.object
}



export default UserPanel
