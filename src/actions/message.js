import * as actionTypes from './types'
import axios from 'axios'


export const addMessagesListener = (channelId) => async dispatch => {
    
    try {
        const res = await axios.get(`http://localhost:5000/api/messages/getmessages/${channelId}`)
        console.log(res.data)
        dispatch({
            type: actionTypes.SET_MESSAGES,
            payload: {
                messages: res.data
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export const createMessage = (messageForCreation) => async dispatch => {
    const body = {
        channelId: messageForCreation.channelId,
        user: messageForCreation.email,
        content: messageForCreation.content
    }
    try {
        const res = await axios.post(`http://localhost:5000/api/messages/addmessage`, body)
        console.log(res.data)
        dispatch({
            type: actionTypes.ADD_MESSAGE_SUCCES,
            payload: {
                message: res.data
            }
        })
    } catch (error) {
        
    }
}