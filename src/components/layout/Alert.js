import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert && (
      <div className={`alert alert-${alert.style}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
