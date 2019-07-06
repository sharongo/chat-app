import * as actionTypes from '../actions/types'

const initialState = {
    currentUser: null,
    isLoading: null
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                currentUser: payload,
                isLoading: false
            }
        default:
            return state;
    }
}