import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate("/signup");
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isRequiredError, setIsRequiredError] = useState(false);
  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFirstName(value);
    }
    if (name === "lastName") {
      setLastName(value);
    }
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setIsRequiredError(true);
      return;
    }

    setIsRequiredError(false);

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    // Store user details in localStorage
    localStorage.setItem("userDetails", JSON.stringify([...users, newUser]));

    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    // Clear the form inputs
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    // Navigate to the desired route
    handleClick();
  };

  return (
    <div className="container">
      <div className="row">
        <div
          className="col-md-6 offset-md-3 col-sm-12"
          style={{ paddingTop: "121px" }}
        >
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Registration Form</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className={`form-control ${
                      isRequiredError && firstName === "" ? "is-invalid" : ""
                    }`}
                    name="firstName"
                    value={firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                  />
                  {isRequiredError && firstName === "" && (
                    <div className="invalid-feedback" style={{ color: "red" }}>
                      First Name is required.
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    className={`form-control ${
                      isRequiredError && lastName === "" ? "is-invalid" : ""
                    }`}
                    name="lastName"
                    value={lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                  />
                  {isRequiredError && lastName === "" && (
                    <div className="invalid-feedback" style={{ color: "red" }}>
                      Last Name is required.
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className={`form-control ${
                      isRequiredError && email === "" ? "is-invalid" : ""
                    }`}
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Email"
                  />
                  {isRequiredError && email === "" && (
                    <div className="invalid-feedback" style={{ color: "red" }}>
                      Email is required.
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className={`form-control ${
                      isRequiredError && password === "" ? "is-invalid" : ""
                    }`}
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Password"
                  />
                  {isRequiredError && password === "" && (
                    <div className="invalid-feedback" style={{ color: "red" }}>
                      Password is required.
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className={`form-control ${
                      isRequiredError && confirmPassword === ""
                        ? "is-invalid"
                        : ""
                    }`}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                  />
                  {isRequiredError && confirmPassword === "" && (
                    <div className="invalid-feedback" style={{ color: "red" }}>
                      Confirm Password is required.
                    </div>
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
}

export default Register;
