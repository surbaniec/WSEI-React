import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

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
      <Switch>
        <Route exact path='/'>
          <Home user={user} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
