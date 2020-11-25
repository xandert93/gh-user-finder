import ACTIONS from '../ACTIONS';

const gitHubReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return { ...state, loading: true };
    case ACTIONS.SEARCH_USERS:
      return { ...state, loading: false, users: action.payload };
    case ACTIONS.CLEAR_USERS:
      return { ...state, users: [], loading: false };
    case ACTIONS.GET_REPOS:
      return { ...state, loading: false, repos: action.payload };
    case ACTIONS.GET_USER:
      return { ...state, loading: false, user: action.payload };
    case ACTIONS.SET_ALERT:
      return {};
    case ACTIONS.REMOVE_ALERT:
      return {};
    default:
      return state;
  }
};

export default gitHubReducer;
