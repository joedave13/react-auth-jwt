import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  // Token
  const token = localStorage.getItem('token');

  const fetchData = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    await axios
      .get('http://auth-jwt-laravel.test/api/auth/me')
      .then((response) => {
        setUser(response.data);
      });
  };

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }

    fetchData();
  });

  const logoutHandler = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    await axios
      .post('http://auth-jwt-laravel.test/api/auth/logout')
      .then(() => {
        localStorage.removeItem('token');
        navigate('/login');
      });
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center" style={{ height: '100vh' }}>
        <div style={{ width: '100%' }}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Home Page</div>
                <div className="card-body">
                  <h5>Hello, {user.name}</h5>
                  <h6 className="text-secondary">{user.email}</h6>
                  <p>Welcome to Simple React Auth App.</p>
                  <button onClick={logoutHandler} className="btn btn-danger">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
