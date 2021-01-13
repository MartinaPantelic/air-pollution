import React, { useState } from "react"
import { Button } from "react-bootstrap"

import { useAuth } from "../context/AuthContext"
import { Link, useHistory } from "react-router-dom"




const Navigation = props => {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  return (

    <div className="menu-items">
      <ul>
      <li><Link className="menu-link" exact="true" to="/">Dashboard</Link></li>
        <li><Link className="menu-link" exact="true" to="/location">Location</Link></li>
        <li><Link className="menu-link" exact="true" to="/current-air">Current Air</Link></li>
        <li><Link className="menu-link" exact="true" to="/update-profile">Update Profile</Link></li>
        <li><Link className="menu-link" exact="true" to="/login">Log In</Link></li>
        <li><Link className="menu-link" exact="true" to="/signup">Sign Up</Link></li>
        <li><Link className="menu-link" exact="true" to="/forgot-password">Forgot Pass</Link></li>
        <li>  <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
</li>
      </ul>
    </div>

  );
};





export default Navigation;
