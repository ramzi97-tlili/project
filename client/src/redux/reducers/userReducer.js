import {
  DELETE_USER,
  GET_ALL_USERS,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGIN_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  GET_ONE_USER,
  GET_ONE_USER_FAIL,
  GET_ONE_USER_SUCCESS,
} from '../constants/actions-types';

const initialState = {
  loading: false,
  user: null,
  errors: null,
  users: [],
};
const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
      };
    case GET_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: payload,
        user: payload,
      };
      
    case UPDATE_USER:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
      };
    case UPDATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case GET_ALL_USERS:
      return {
        loading: true,
        users: []
      };
    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: payload,
        users: payload.users,
      };
    case GET_ALL_USERS_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== payload),
      };
    case GET_ONE_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_ONE_USER_SUCCESS:
      return {
        loading: false,
        users: payload
      };
    case GET_ONE_USER_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
export default userReducer;