import React from 'react';
import Spinner from '../layout/Spinner';
import User from './User';
import PropTypes from 'prop-types';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
};

const Users = ({ users, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
