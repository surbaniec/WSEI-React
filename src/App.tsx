import { useState, useEffect, createContext } from 'react';
import './App.css';
import Home from './components/pages/Home';
import TopBar from './components/layout/TopBar/TopBar';
import SideBar from './components/layout/SideBar/SideBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import TestPage from './components/pages/TestPage';
import Entities from './components/pages/Entities';
import Workspace from './components/pages/Workspace';
import Profile from './components/pages/Profile';

export const CurrentUserContext = createContext({});
export const PostsDataContext = createContext({});
export const ResumeDataContext = createContext({});

function App() {
  const [users, setUsers] = useState({});
  const [photos, setPhotos] = useState({});
  const [posts, setPosts] = useState({});
  const [comments, setComments] = useState({});

  const getUsers = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = response.data;
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPhotos = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50`
      );
      const data = response.data;
      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const data = response.data;
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getComments = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments`
      );
      const data = response.data;
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
    getPhotos();
    getPosts();
    getComments();
  }, []);

  const currentUserID = 1;

  const currentUser: object = {
    ...users[currentUserID],
    ...photos[currentUserID],
  };

  const postsData: object = {
    users,
    photos,
    posts,
  };

  const resumeData: object = {
    users,
    photos,
    comments,
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <PostsDataContext.Provider value={postsData}>
        <ResumeDataContext.Provider value={resumeData}>
          <Router>
            <TopBar />
            <SideBar />
            <Switch>
              <Route exact path='/'>
                {Object.keys(posts).length !== 0 &&
                  Object.keys(photos).length !== 0 &&
                  Object.keys(users).length !== 0 &&
                  Object.keys(comments).length !== 0 && <Home />}
              </Route>
              <Route path='/testpage'>
                <TestPage />
              </Route>
              <Route path='/entities'>
                <Entities />
              </Route>
              <Route path='/workspace'>
                <Workspace />
              </Route>
              <Route path='/profile'>
                <Profile />
              </Route>
            </Switch>
          </Router>
        </ResumeDataContext.Provider>
      </PostsDataContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
