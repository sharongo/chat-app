import * as actionTypes from '../actions/types'

const initialState = {

    messages: []
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SET_MESSAGES:
            return {
                ...state,
                messages: payload.messages
            }
            case actionTypes.ADD_MESSAGE_SUCCES:
                return {
                    ...state,
                    messages: state.messages.concat(payload.message)
                }
        default:
            return state;
    }

}