import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  // Validation
  const [validation, setvalidation] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/home');
    }
  });

  const registerHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', passwordConfirmation);

    await axios
      .post('http://auth-jwt-laravel.test/api/auth/register', formData)
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        setvalidation(error.response.data);
      });
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center" style={{ height: '100vh' }}>
        <div style={{ width: '100%' }}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Register Page</div>
                <div className="card-body">
                  {validation.error && (
                    <div className="alert alert-danger" role="alert">
                      {validation.error}
                    </div>
                  )}

                  <form onSubmit={registerHandler} autoComplete="off">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Full Name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {validation.name && (
                        <small className="text-danger">
                          {validation.name[0]}
                        </small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {validation.email && (
                        <small className="text-danger">
                          {validation.email[0]}
                        </small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {validation.password && (
                        <small className="text-danger">
                          {validation.password[0]}
                        </small>
                      )}
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="password_confirmation"
                        className="form-label"
                      >
                        Password Confirmation
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password_confirmation"
                        placeholder="Password Confirmation..."
                        value={passwordConfirmation}
                        onChange={(e) =>
                          setPasswordConfirmation(e.target.value)
                        }
                      />
                    </div>
                    <button type="submit" className="btn btn-primary float-end">
                      Register
                    </button>
                  </form>

                  <p>
                    Already have an account? <Link to="/login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
