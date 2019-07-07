import React from 'react'
import PropTypes from 'prop-types'
import { Sidebar, Menu, Divider, Button } from 'semantic-ui-react'

const ColorPanel = props => {
    return (
        <Sidebar 
            as={Menu}
            icon="labaled"
            inverted
            vertical
            visible
            width="very thin"
        >
            <Divider/>
            <Button icon="add" size="small" color="blue">

            </Button>
        </Sidebar>
    )
}

ColorPanel.propTypes = {

}

export default ColorPanel
