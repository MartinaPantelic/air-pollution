import React from "react"
import LocationPicker from "./LocationPicker"
import Navigation from "./Navigation"
import UpdateProfile from "./UpdateProfile"
import ForgotPassword from "./ForgotPassword"
import Login from "./Login"
import Dashboard from './Dashboard'
import Post from './Post'
import PrivateRoute from "./PrivateRoute"
import SignUp from "./SignUp"
import { AuthProvider } from "../context/AuthContext"

import LinkCurrAir from "./LinkCurrAir"
import LinkForecastAir from "./LinkForecastAir"

import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom"




export default function App() {

  return (
    <BrowserRouter>
    <Router>
      <AuthProvider>
        <div className="App">
          <Navigation />

        </div>

        <Switch>
          {/* <Route path='/location' component={LocationPicker} /> */}
          <Route path='/current-air' component={LinkCurrAir} />
          <Route path='/forecast-air' component={LinkForecastAir} />
          <Route path='/posts' component={Post} />



          <PrivateRoute exact path="/" component={LocationPicker} />
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



