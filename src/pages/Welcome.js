import React from 'react';

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
                  <h5>Joe Dave</h5>
                  <p>Welcome to Simple React Auth App.</p>
                  <button className="btn btn-primary me-2">Login</button>
                  <button className="btn btn-info">Register</button>
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
