import { useState } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import { get } from 'axios';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

function App() {
  let initialState = { loading: false, users: [], alert: null };
  const [state, setState] = useState(initialState);

  let { loading, users, alert } = state;

  const searchUsers = async (text) => {
    setState((state) => ({ ...state, users: [], loading: true }));
    let response = await get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setState((state) => ({
      ...state,
      loading: false,
      users: response.data.items,
    }));
  };

  const clearUsers = () => setState(initialState);

  const setAlert = (msg, style) => {
    setState((state) => ({ ...state, alert: { msg, style } }));
  };

  return (
    <div className="App">
      <Navbar icon="fab fa-github">GitHub Finder</Navbar>
      <div className="container">
        <Alert alert={alert} />
        <Search
          searchUsers={searchUsers}
          clearUsers={clearUsers}
          showClear={users.length !== 0 ? true : false}
          setAlert={setAlert}
        />
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
}

export default App;
