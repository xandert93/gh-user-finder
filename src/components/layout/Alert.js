import React, { useContext } from 'react';
import alertContext from '../../context/alert/alertContext';

const Alert = () => {
  const { alert } = useContext(alertContext);
  return (
    alert && (
      <div className={`alert alert-${alert.style}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
