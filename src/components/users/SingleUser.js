import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import gitHubContext from '../../context/github/gitHubContext';

const SingleUser = ({ match }) => {
  const { loading, user, repos, getUser, getUserRepos } = useContext(
    gitHubContext
  );

  let {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      Hireable:{' '}
      <i
        className={
          hireable
            ? 'fas fa-check text-success'
            : 'fas fa-times-circle text-danger'
        }
      />
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt=""
            className="round-img"
            style={{ width: '150px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          )}
          <a
            href={html_url}
            className="btn my-1"
            style={{
              background: 'linear-gradient(90deg, rgb(0, 77, 192), black 60%)',
              color: 'white',
            }}
          >
            Visit GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username: </strong>
                  {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <strong>Company: </strong>
                  {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Website: </strong>
                  {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

SingleUser.propTypes = {
  match: PropTypes.object.isRequired,
};

export default SingleUser;
