import { useEffect, useState } from 'react';
import ListComponent from './components/ListComponent';
import 'App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h1>User List</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && (
        <ListComponent
          items={users}
          renderItem={(user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> — {user.email}
            </li>
          )}
        />
      )}
    </div>
  );
}

export default App;
