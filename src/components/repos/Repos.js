import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import gitHubContext from '../../context/github/gitHubContext';

const Repos = () => {
  const { repos } = useContext(gitHubContext);

  return repos.map((repo) => <RepoItem key={repo.id} repo={repo} />);
};

export default Repos;
