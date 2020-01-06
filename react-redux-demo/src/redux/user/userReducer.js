import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userType'

const initial_state = {
    loading: false,
    users: [],
    error: ''
}

const reducer = (state = initial_state, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST: 
        return { 
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: 
        return {
            loading: false,
            users: action.payload,
            error: ''
        }
        case FETCH_USERS_FAILURE: 
        return {
            loading: false,
            users: [],
            error: action.payload
        }
        default: return state
    }
}

export default reducer

