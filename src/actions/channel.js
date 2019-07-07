import * as actionTypes from './types'

export const setCurrentChannel = channel => async dispatch => {
    try {
        dispatch({
            type: actionTypes.SET_CURRENT_CHANNEL,
            payload: {
                currentChannel: channel
            }
        })
    } catch (error) {
        console.log(error)
    }
}