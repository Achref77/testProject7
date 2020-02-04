import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAIL
} from "../constants/action-types";
import jwt from "jsonwebtoken";
import setAuthToken from "../setAuthToken";
//USER LOADER
export const loadUser = token => async dispatch => {
  // console.log(token);
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  // setusersToken(localStorage.token);
  const config = {
    headers: {
      Authorization: token
    }
  };
  try {
    const res = await axios.get("/users/me", config);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: LOGIN_FAIL
    });
  }
};
export const register = ({ name, email, password, role }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ name, email, password, role });
  const res = await axios.post("/users/register", body, config);
  console.log(res);
  try {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    // console.error('this error from auth.js', err.message);
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => console.error(error.msg, "danger"));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};
export const loginUser = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post("/users/login", body, config);
    console.log("body", res);
    const role = jwt.decode(res.data.token).user.role[0];
    console.log("role", role[0]);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    loadUser(res.data.token);
  } catch (err) {
    console.error("this error from auth.js", err.message);
  }
  // LOGOUT / clear profile
};
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
///////////////////////////////////////////////////
//get
export const getUser = () => async dispatch => {
  axios
    .get("/users/you")
    .then(res => dispatch({ type: "GET-liste", payload: res.data }))
    .catch(err => console.log(err));
};
//add
export const postUser = newliste => async dispatch => {
  try {
    axios
      .post("/users/log", newliste)
      .then(res => dispatch(getUser()))
      .catch(err => console.log(err));
  } catch (err) {
    console.error("", err.message);
  }
};
//delete
export const deleteUser = id => async dispatch => {
  try {
    const res = await axios.delete(`/users/${id}`);
    console.log("body", res);
    dispatch(getUser());
    // .catch(err => console.log(err));
  } catch (err) {
    console.error("", err.message);
  }
};
//update
export const putUser = updatedUser => async dispatch => {
  try {
    const res = await axios.put(`/users/${updatedUser.id}`, updatedUser);

    dispatch({ type: "UPDATE", payload: res.data });
  } catch (err) {
    console.error("", err.message);
  }
};
