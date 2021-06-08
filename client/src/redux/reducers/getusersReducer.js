import {
    GET_ALL_USERS,
    GET_ALL_USERS_FAIL,
    GET_ALL_USERS_SUCCESS
} from "../constants/actions-types";

const initialState = {
    loading: false,
    users: null,
    errors: null,
};
const getuserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_USERS:
            return {
                ...state,
                loading: true,
            };
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: payload,
            };
        case GET_ALL_USERS_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload,
            };
        default:
            return state;
    }
};
export default getuserReducer;