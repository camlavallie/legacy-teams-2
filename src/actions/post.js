import axios from 'axios';
import { setAlert } from './alert';
import { GET_POSTS, GET_POST, POST_ERROR, DELETE_POST, ADD_POST, UPDATE_POST } from './types';

const baseUrl = process.env.REACT_APP_BASE_URL;
// get posts 

export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get(`${baseUrl}/posts`);
    dispatch({
      type: GET_POSTS,
      payload: res.data
    })
  } catch(err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
  }
};

// delete post

export const deletePost = id => async dispatch => {
  try {
    const res = await axios.delete(`${baseUrl}/posts/${id}`);
    dispatch({
      type: DELETE_POST,
      payload: id
    })

    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
};

// add post

export const addPost = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post(`${baseUrl}/posts`, formData, config);
    dispatch({
      type: ADD_POST,
      payload: res.data
    })

    dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: err.response.statusText,
        status: err.response.status
      }
    });
  }
}



export const getPost = _id => async dispatch => {
  const res = await axios.get(`${baseUrl}/posts/${_id}`);
  dispatch({
    type: GET_POST,
    payload: res.data
  });
};



export const updatePost = (post, _id) => async dispatch => {
  const res = await axios.put(`${baseUrl}/posts/${_id}`, post);
  dispatch({
    type: UPDATE_POST,
    payload: res.data
  });
};