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

export const UserContext = createContext({});

function App() {
  const [users, setUsers] = useState({});
  const [photos, setPhotos] = useState({});
  const currentUserID = 0;

  const getUser = async () => {
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
        `https://jsonplaceholder.typicode.com/photos`
      );
      const data = response.data;
      setPhotos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    getPhotos();
  }, []);

  const currentUser: object = {
    ...users[currentUserID],
    ...photos[currentUserID],
  };

  return (
    <UserContext.Provider value={currentUser}>
      <Router>
        <TopBar />
        <SideBar />
        <Switch>
          <Route exact path='/'>
            <Home />
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
    </UserContext.Provider>
  );
}

export default App;
