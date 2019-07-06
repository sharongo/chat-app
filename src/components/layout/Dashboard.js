import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import firebase from '../../firebase'
import { Redirect } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'

import ColorPanel from '../colorPanel/ColorPanel'
import SidePanel from '../sidePanel/SidePanel'
import Messages from '../messages/Messages'
import MetaPanel from '../metaPanel/MetaPanel'

import { setUser, clearUser } from '../../actions/user'

import { connect } from 'react-redux'

const Dashboard = ({ history, user: { isLoading, currentUser }, setUser, clearUser }) => {

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
        history.push("/")
      }
      else {
        history.push("/login")
        clearUser()
      }
    });
  }, [])


  return (
    <Grid columns="equal" className="app" style={{ background: '#eee' }}>
      <ColorPanel />
      <SidePanel currentUser={currentUser} />
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
  setUser: PropTypes.func,
  clearUser: PropTypes.func
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, { setUser, clearUser })(Dashboard)
