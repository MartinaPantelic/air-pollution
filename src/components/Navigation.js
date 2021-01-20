import React, { useState } from "react"
import { Button, Navbar } from "react-bootstrap"

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

    <Navbar expand="lg mb-5">
      <Navbar.Brand> <Link exact="true" to="/current-air">Air App</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Link className="nav-link" exact="true" to="/current-air">Current Air</Link>
        <Link className="nav-link" exact="true" to="/forecast-air">Forecast Air</Link>
        <Link className="nav-link" exact="true" to="/posts">Posts</Link>
        <Link className="nav-link" exact="true" to="/">Dashboard</Link>
        <Link className="nav-link" exact="true" to="/location"> Location</Link>
        <Link className="nav-link" exact="true" to="/update-profile">Update Profile</Link>
        <Link className="nav-link" exact="true" onClick={handleLogout}>  Log Out</Link>
       

      </Navbar.Collapse>
    </Navbar>

  );
};





export default Navigation;
