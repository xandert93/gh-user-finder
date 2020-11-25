const { default: ACTIONS } = require('../ACTIONS');

const alertReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_ALERT:
      return {
        alert: { msg: action.payload.msg, style: action.payload.style },
      };
    case ACTIONS.REMOVE_ALERT:
      return { alert: null };
    default:
      return state;
  }
};

export { alertReducer };
