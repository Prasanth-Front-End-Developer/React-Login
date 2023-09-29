import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
      setEmailError('');
    }
    if (name === 'password') {
      setPassword(value);
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate email and password
    if (!email) {
      setEmailError('Email is required');
    }
    if (!password) {
      setPasswordError('Password is required');
    }

    // Perform further actions if the form is valid
    if (email && password) {
      console.log('Email:', email);
      console.log('Password:', password);

      // Clear form inputs
      setEmail('');
      setPassword('');

      // Navigate to the desired route
      navigate("/home");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-sm-12" style={{ paddingTop: '195px' }}>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Sign up</h3>
              <form onSubmit={handleSubmit}> {/* Added onSubmit event handler */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Email"
                  />
                  {emailError && <div className="error-message">{emailError}</div>}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Password"
                  />
                  {passwordError && <div className="error-message">{passwordError}</div>}
                </div>
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{ marginTop: '17px' }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
