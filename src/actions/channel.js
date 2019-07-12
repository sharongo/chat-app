import * as actionTypes from './types'
import axios from 'axios'
import { async } from 'q';


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

export const addChannel = channel => async dispatch =>{
    const body = {
        name: channel.name,
        details: channel.details,
        createdBy: channel.createdBy
    }
    try {
        const res = await axios.post('http://localhost:5000/api/channels/addchannel', body)
        console.log(res.data)
        dispatch({
            type: actionTypes.ADD_CHANNEL_SUCCESS,
            payload: {
                channel: res.data
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const addListeners = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:5000/api/channels/getchannels')
        console.log(res.data)
        dispatch({
            type: actionTypes.SET_CHANNELS,
            payload:{
                channels: res.data
            }
        })
    } catch (error) {
        console.log(error)
    }
}