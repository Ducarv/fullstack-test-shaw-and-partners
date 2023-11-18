import { useEffect, useState } from 'react';
import { fetchUsers } from '../providers/fetchUsers';
import './UserList.css'

interface User {
  name: string;
  city: string;
  country: string;
  favorite_sport: string;
}

export const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      (async () => {
        try {
          setIsLoading(true);
          const fetchedUsers = await fetchUsers();
          setUsers(fetchedUsers);
          setIsLoading(false);
        } catch (error) {
          console.error('Error to get users:', error);
          setIsLoading(false);
        }
      })();
    }, []);
  
    return (
      <div>
        <h2>User List</h2>
        {isLoading ? <p>Loading users...</p> : (
          <ul>
            {users.map((user, index) => (
              <li 
                key={index}
                className='user-card'
              >
                <p className="user-name">Name: {user.name}</p>
                <p className="user-city">City: {user.city}</p>
                <p className="user-country">Country: {user.country}</p>
                <p className="user-favorite-sport">Favorite Sport: {user.favorite_sport}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
};