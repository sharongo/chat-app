import * as actionTypes from '../actions/types'

const initialState = {
    currentUser: null,
    isLoading: null,
    isAuthenticated: null,
    errorMessage: ''
    
};

export default function (state = initialState, action) {
    const { type, payload } = action;
    

    switch (type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                currentUser: payload.currentUser,
                isLoading: false,
                isAuthenticated: true
            }
        case actionTypes.CLEAR_USER:
            return {
                ...state,
                currentUser: null,
                isLoading: false,
                isAuthenticated: false
            }
        case actionTypes.LOGIN_FAIL:
            return{
                ...state,
                isLoading: false,
                isAuthenticated: false,
                errorMessage: payload
            }
        default:
            return state;
    }
}