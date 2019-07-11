import * as actionTypes from './types'
import axios from 'axios'
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
        console.log(error)
    }
}

export const register = ({username, email, password}, history) => async dispatch => {
    const body = {username, email, password}
    try {
        const res = await axios.post('http://localhost:5000/api/users/register', body)
        console.log(res.data)
        dispatch({
            type: actionTypes.SET_USER,
            payload: {
                currentUser: res.data
            }
        })
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const login = ({email, password}, history) => async dispatch =>{
    const body = {email, password}
    try {
        const res = await axios.post('http://localhost:5000/api/users/login', body)
        console.log(res.data)
        dispatch({
            type: actionTypes.SET_USER,
            payload: {
                currentUser: res.data
            }
        })
        history.push('/')
    } catch (error) {
        
    }
}