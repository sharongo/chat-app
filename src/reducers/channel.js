import * as actionTypes from '../actions/types'

const initialState = {
    currentChannel: null,
    channels: []
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: payload.currentChannel
            }
        case actionTypes.SET_CHANNELS:
            return {
                ...state,
                channels: payload.channels,
                currentChannel: payload.channels[0]
            }

        case actionTypes.ADD_CHANNEL_SUCCESS:
            return {
                ...state,
                channels: state.channels.concat(payload.channel)
            }
        default:
            return state;
    }
}