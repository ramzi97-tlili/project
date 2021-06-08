import {
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN_FAIL, LOGIN_SUCCESS,
  LOGIN_USER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
  LOGOUT,
  UPDATE_USER_SUCCESS,
  UPDATE_USER,
  UPDATE_USER_FAIL,
  GET_ALL_USERS,
  DELETE_USER,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  ADD_COMMENT,
  GET_ALL_COMMENTS,
  GET_ALL_COMMENTS_SUCCESS,
  GET_ALL_COMMENTS_FAIL,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  GET_ONE_USER,
  GET_ONE_USER_SUCCESS,
  GET_ONE_USER_FAIL,
  DELETE_COMMENT,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAIL,
} from "../constants/actions-types"
import axios from "axios"


//register

export const register = newUser => async (dispatch) => {
  dispatch({
    type: REGISTER_USER
  })
  try {
    const addRes = await axios.post('/user/register', newUser)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: addRes
    })
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data
    })
  }
}
//login 

export const login = (cred) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  try {
    const loginRes = await axios.post('/user/login', cred);
    localStorage.setItem('token', loginRes.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginRes.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};
//add comment
export const addComm = newComment => async (dispatch) => {
  dispatch({
    type: ADD_COMMENT
  })
  try {
    const addRes = await axios.post('/user/addComment', newComment)
    dispatch({
      type: ADD_COMMENT_SUCCESS,
      payload: addRes
    })
  } catch (error) {
    dispatch({
      type: ADD_COMMENT_FAIL,
      payload: error.response.data
    })
  }
}

//get all users

export const getusers = () => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS });
  try {
    const { data } = await axios.get('/user/users');
    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USERS_FAIL,
      payload: error.response.data,
    });
  }
};
//get all users
export const getusersadmin = () => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS });
  try {
    const { data } = await axios.get('/user/Admin');
    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USERS_FAIL,
      payload: error.response.data,
    });
  }
};

//get all comments
export const getcomments = () => async (dispatch) => {
  dispatch({ type: GET_ALL_COMMENTS });
  try {
    const { data } = await axios.get('/user/comments');
    dispatch({
      type: GET_ALL_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_COMMENTS_FAIL,
      payload: error.response.data,
    });
  }
};

//logout

export const logout = (cred) => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({
    type: LOGOUT,
  });
};

//get profile

export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GET_PROFILE,
  });
  try {
    const isAuth = await axios.get('/user/current', config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: isAuth.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};
//update user details
export const updateProfile = (id, updatedProfile) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER,
    });

    const { data } = await axios.put(`/user/profile/${id}`, updatedProfile);
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {

    dispatch({
      type: UPDATE_USER_FAIL,
      payload: error.response.data,
    });
  }
};

//delete one  user
export const deleteUser = (id) => (dispatch) => {
  try {
    dispatch({
      type: DELETE_USER,
    });
    axios.delete(`user/delete/${id}`).then((res) =>
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: id,
      })
    );
  }
  catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data,
    });
  }
};



export const deleteccomment = id => async dispatch => {
  dispatch({ type: DELETE_COMMENT });
  try {
    const { data } = await axios.delete(`user/deletecom/${id}`);
    dispatch({
      type: DELETE_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: DELETE_COMMENT_FAIL,
      payload: error.response.data.message,
    });
  }
};





export const getOneUser = (id) => async (dispatch) => {
  dispatch({ type: GET_ONE_USER });
  try {
    const { data } = await axios.get(`/user/user/${id}`);
    dispatch({
      type: GET_ONE_USER_SUCCESS,
      payload: data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_ONE_USER_FAIL,
      payload: error.response.data,
    });
  }
};