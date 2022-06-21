import React from 'react';

function Register() {
  return (
    <div className="container">
      <div className="d-flex align-items-center" style={{ height: '100vh' }}>
        <div style={{ width: '100%' }}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Register Page</div>
                <div className="card-body">
                  <form autoComplete="off">
                    <div class="mb-3">
                      <label for="name" class="form-label">
                        Full Name
                      </label>
                      <input type="text" class="form-control" id="name" />
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">
                        Email Address
                      </label>
                      <input type="email" class="form-control" id="email" />
                    </div>
                    <div class="mb-3">
                      <label for="password" class="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="password_confirmation" class="form-label">
                        Password Confirmation
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="password_confirmation"
                      />
                    </div>
                    <button type="submit" class="btn btn-primary float-end">
                      Register
                    </button>
                  </form>
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
