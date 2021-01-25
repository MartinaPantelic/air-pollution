import React from "react"
import Navigation from "./Navigation"
import UpdateProfile from "./AuthComponents/UpdateProfile"
import ForgotPassword from "./AuthComponents/ForgotPassword"
import SignUp from "./AuthComponents/SignUp"
import Login from "./AuthComponents/Login"
import Post from './Post'
import PrivateRoute from "./PrivateRoute"

import { AuthProvider } from "../context/AuthContext"

import DisplayForecast from "./AirComponents/DisplayForecast"


import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom"
import DisaplayMyLocations from "./AirComponents/DisplayMyLocations"


export default function App() {

  return (
    <BrowserRouter>
      <Router>
        <AuthProvider>
          <div className="App">
            <Navigation />

          </div>

          <Switch>

            
            <PrivateRoute exact path="/" component={DisplayForecast} />
            <PrivateRoute exact path="/my-locations" component={DisaplayMyLocations} />

            <PrivateRoute path='/posts' component={Post} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route exact path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgot-password" component={ForgotPassword} />

         
          </Switch>

        </AuthProvider>
      </Router>
    </BrowserRouter>

  )
}



