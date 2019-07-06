import * as actionTypes from './types'
import { async } from 'q';


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

export const clearUser = () => async dispatch => {
    try {
        dispatch({
            type: actionTypes.CLEAR_USER
        })
    } catch (error) {
        
    }
}