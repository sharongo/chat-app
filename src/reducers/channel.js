import * as actionTypes from '../actions/types'

const initialState = {
    currentChannel: null,
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: payload.currentChannel
            }
        default:
            return state;
    }
}