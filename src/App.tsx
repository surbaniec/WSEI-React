import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/pages/Home';
import TopBar from './components/layout/TopBar/TopBar';
import SideBar from './components/layout/SideBar/SideBar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import TestPage from './components/pages/TestPage';

function App() {
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      const data = response.data;
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Router>
      <TopBar />
      <SideBar />
      <Switch>
        <Route exact path='/'>
          <Home user={user} />
        </Route>
        <Route path='/testpage'>
          <TestPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
