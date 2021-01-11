import React from "react"
import LocationPicker from "./LocationPicker"
import CurrentAir from "./CurrentAir"
import Navigation from "./Navigation"
import UpdateProfile from "./UpdateProfile"
import PrivateRoute from "./PrivateRoute"
import SignUp from "./SignUp"
import { AuthProvider } from "../context/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import BookList from './BookList';
// import BookContextProvider from '../context/BookContext';
import LocationList from './LocationList';
import LocationContextProvider from '../context/LocationContext';


export default function App() {

  return (
    <Router>
      <AuthProvider>
        <div className="App">
          {/* <CurrentAir api={airData} /> */}


          <Navigation />

        </div>

        <Switch>
          <Route path='/location' component={LocationPicker} />


          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          {/* <BookContextProvider>
            <BookList />
          </BookContextProvider> */}

          <LocationContextProvider>
            <LocationList />
          </LocationContextProvider>

          <Route path="/current_air" component={CurrentAir} />
          {/* <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} /> */}
        </Switch>

      </AuthProvider>
    </Router>

  )
}



