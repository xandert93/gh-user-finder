import { get } from 'axios';
import { useReducer } from 'react';
import ACTIONS from '../ACTIONS';
import gitHubContext from './gitHubContext';
import gitHubReducer from './gitHubReducer';

let initialState = {
  loading: false,
  users: [],
  user: {},
  repos: [],
  alert: null,
};

const GitHubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gitHubReducer, initialState);

  const searchUsers = async (text) => {
    dispatch({ type: ACTIONS.SET_LOADING });
    let response = await get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: ACTIONS.SEARCH_USERS, payload: response.data.items });
  };

  const clearUsers = () => dispatch({ type: ACTIONS.CLEAR_USERS });

  const getUser = async (username) => {
    dispatch({ type: ACTIONS.SET_LOADING });
    let response = await get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: ACTIONS.GET_USER, payload: response.data });
  };

  const getUserRepos = async (username) => {
    dispatch({ type: ACTIONS.SET_LOADING });
    let response = await get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: ACTIONS.GET_REPOS, payload: response.data });
  };

  return (
    <gitHubContext.Provider
      value={{ ...state, searchUsers, clearUsers, getUser, getUserRepos }}
    >
      {children}
    </gitHubContext.Provider>
  );
};

export default GitHubProvider;
