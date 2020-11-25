import React, { useContext, useState } from 'react';
import alertContext from '../../context/alert/alertContext';
import gitHubContext from '../../context/github/gitHubContext';

const Search = () => {
  const { users, searchUsers, clearUsers } = useContext(gitHubContext);
  const { showAlert } = useContext(alertContext);

  const [text, setText] = useState('');

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) showAlert('Please enter a search.', 'light');
    else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="text"
          onChange={handleChange}
          onFocus={() => showAlert(null)}
          value={text}
          placeholder="Search Users..."
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-block"
          style={{
            background: 'linear-gradient(90deg, rgb(0, 77, 192), black 60%)',
            color: 'white',
          }}
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
