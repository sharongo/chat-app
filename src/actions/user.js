import * as actionTypes from './types'


export const setUser = user => async dispatch => {
    try {
        dispatch({
            type: actionTypes.SET_USER,
            payload: {
                currentUser: user
            }
        })
    } catch (error) {
        console.log(error)
    }
}