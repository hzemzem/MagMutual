import React, { useState } from 'react';
import UserProfileCard from '../components/UserProfileCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";

function SearchByText() {
  const [input, setInput] = useState('');
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/user/${input}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <a href='/'><FontAwesomeIcon icon={faHome} /></a>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className='results'>
        {data ? (data.map((user, i) => <UserProfileCard user={user} key={user.id} />)) : null}
      </div>
    </div>
  );
}

export default SearchByText;
