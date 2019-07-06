import React from 'react'
import PropTypes from 'prop-types'
import { Loader, Dimmer } from 'semantic-ui-react'

const Spinner = props => {
    return (
        <div>
            <Dimmer active>
                <Loader size="huge" content={"Preparing chat..."} />
            </Dimmer>
        </div>
    )
}

Spinner.propTypes = {

}

export default Spinner
