import React, { useState, useEffect } from "react";

const Details = () => {
    const [userDetails, setUserDetails] = useState([]);
  
    useEffect(() => {
      const storedUserDetails = JSON.parse(localStorage.getItem("userDetails")) || [];
      setUserDetails(storedUserDetails);
    }, []);
  
    return (
      <div>
        <h1>Details</h1>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Details;
