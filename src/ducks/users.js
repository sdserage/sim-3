import axios from 'axios'

//STATE
const initalState = {
    user: {}
}


const GET_USER_INFO = 'GET_USER_INFO';

//REDUCER
export default function reducer(state = initalState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        default:
            return state;
    }
}

//ACTION
export function getUserInfo() {
    const userData = axios.get('/auth/me').then(res => {
        return res.data
    });
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}