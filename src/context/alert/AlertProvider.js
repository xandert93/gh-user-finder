import { useReducer } from 'react';
import ACTIONS from '../ACTIONS';
import alertContext from './alertContext';
import { alertReducer } from './alertReducer';

const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { alert: null });

  const showAlert = (msg, style) => {
    !msg
      ? dispatch({ type: ACTIONS.REMOVE_ALERT })
      : dispatch({ type: ACTIONS.SET_ALERT, payload: { msg, style } });
  };

  return (
    <alertContext.Provider value={{ ...state, showAlert }}>
      {children}
    </alertContext.Provider>
  );
};

export default AlertProvider;
