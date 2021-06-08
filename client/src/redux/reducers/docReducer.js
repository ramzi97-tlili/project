import { ADD_COMMENT, ADD_COMMENT_FAIL, ADD_COMMENT_SUCCESS, DELETE_COMMENT, GET_ALL_COMMENTS, GET_ALL_COMMENTS_FAIL, GET_ALL_COMMENTS_SUCCESS } from "../constants/actions-types";


const initialState = {
    loading: false,
    comments: null,
    errors: null,
    comment: [],
};

const docReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_COMMENT:
            return {
                ...state,
                loading: true,
            };
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: payload,
            };
        case ADD_COMMENT_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload,
            };
        case GET_ALL_COMMENTS:
            return {
                loading: true,
                comments: []
            };
        case GET_ALL_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuth: payload,
                comments: payload.comments,
            };
        case GET_ALL_COMMENTS_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload,
            };
        case DELETE_COMMENT:
            return {
                ...state,
                comment: state.comments.filter((comment) => comment._id !== payload),
            };
        default:
            return state;
    }
};
export default docReducer;