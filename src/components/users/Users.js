import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import User from './User';
import gitHubContext from '../../context/github/gitHubContext';

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
};

const Users = () => {
  const { users, loading } = useContext(gitHubContext);

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

export default Users;
