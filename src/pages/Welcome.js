import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="container">
      <div className="d-flex align-items-center" style={{ height: '100vh' }}>
        <div style={{ width: '100%' }}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Welcome Page</div>
                <div className="card-body">
                  <h5>Simple React Auth with JWT</h5>
                  <p>Welcome to Simple React Auth App.</p>
                  <Link to="/login" className="btn btn-primary me-2">
                    Login
                  </Link>
                  <Link to="/register" className="btn btn-info">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
