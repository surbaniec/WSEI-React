import React, { useReducer } from 'react';
import ApiContext from './apiContext';
import ApiReducer from './apiReducer';
import axios from 'axios';
import { GET_USERS, SET_LOADING, GET_PHOTOS, GET_POSTS } from './types';

const ApiState = (props) => {
  const initialState = {
    users: [],
    photos: [],
    posts: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(ApiReducer, initialState);

  //Get users
  const getUsers = async () => {
    setLoading();
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);

    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  };

  //Get photos
  const getPhotos = async () => {
    setLoading();
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50`
    );

    dispatch({
      type: GET_PHOTOS,
      payload: res.data,
    });
  };

  //Get posts
  const getPosts = async () => {
    setLoading();
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  };

  //Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ApiContext.Provider
      value={{
        users: state.users,
        photos: state.photos,
        posts: state.posts,
        loading: state.loading,
        getUsers,
        getPhotos,
        getPosts,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiState;
