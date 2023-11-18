import { useEffect, useState } from 'react';
import { api } from '../api/axios';

interface User {
  name: string;
  city: string;
  country: string;
  favorite_sport: string;
}

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/api/users');
        setUsers(response.data as User[]); // Define o tipo de dados esperado como User[]
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>Name: {user.name}</p>
            <p>City: {user.city}</p>
            <p>Country: {user.country}</p>
            <p>Favorite Sport: {user.favorite_sport}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
