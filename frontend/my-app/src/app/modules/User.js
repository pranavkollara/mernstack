"use client";

import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [jersey, setJersey] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchJersey = async () => {
      try {
        const response = await fetch('http://localhost:4000/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJersey(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJersey();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {jersey.map(jerseys => (
          <li key={jerseys._id}>
            {jerseys.name} - {jerseys.des}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
