import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'

import ColorPanel from '../colorPanel/ColorPanel'
import SidePanel from '../sidePanel/SidePanel'
import Messages from '../messages/Messages'
import MetaPanel from '../metaPanel/MetaPanel'

const Dashboard = props => {
    return (
        <Grid columns="equal" className="app" style={{ background: '#eee' }}>
            <ColorPanel />
            <SidePanel />
            <Grid.Column style={{ marginLeft: 320 }}>
                <Messages />
            </Grid.Column>
            <Grid.Column width={4}>
                <MetaPanel />
            </Grid.Column>
        </Grid>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
