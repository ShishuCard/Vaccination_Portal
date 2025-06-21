// SearchUser.jsx
import React, { useState, useEffect } from 'react';
import { getChildByChildId } from '../utils/findUser';
import { useNavigate } from 'react-router-dom';

function SearchUser() {
  const [input, setInput] = useState('');
  const [userData, setUserData] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const navigate = useNavigate();
  // Debounce Logic
  useEffect(() => {
    const handler = setTimeout(() => {
      if (input.trim()) {
        searchUser(input.trim());
      } else {
        setUserData(null);
      }
    }, 500); // 500ms debounce

    return () => clearTimeout(handler);
  }, [input]);

  const searchUser = async (id) => {
    setIsSearching(true);
    try {
      const result = await getChildByChildId(id);
      setUserData(result);
    } catch (err) {
      setUserData(null);
    }
    setIsSearching(false);
  };

  console.log(JSON.stringify(userData))
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <input
        type="text"
        placeholder="Enter user ID..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      {isSearching && <p>Searching...</p>}
      {userData ? (
            navigate(`/child/${input}`)
      ) : input.trim() && !isSearching ? (
        <p>No user found.</p>
      ) : null}
    </div>
  );
}

export default SearchUser;
