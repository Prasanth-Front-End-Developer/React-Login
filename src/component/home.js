import React, { useState } from "react";
import Navbar from "./navbar";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      setEmailError("");
    }
    if (name === "password") {
      setPassword(value);
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate email and password
    if (!email) {
      setEmailError("Email is required");
    }
    if (!password) {
      setPasswordError("Password is required");
    }

    // Perform further actions if the form is valid
    if (email && password) {
      console.log("Email:", email);
      console.log("Password:", password);

      // Store details in local storage
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      // Clear form inputs
      setEmail("");
      setPassword("");

      // Optionally, you can perform the navigation here
    }
  };

  return (
    <div>
      <Navbar />
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ marginTop: "5%", marginLeft: "95%" }}
      >
        Add
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
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
                  {emailError && (
                    <div className="error-message">{emailError}</div>
                  )}
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
                  {passwordError && (
                    <div className="error-message">{passwordError}</div>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{ marginTop: "17px" }}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
