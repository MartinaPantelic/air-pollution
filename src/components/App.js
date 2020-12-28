import React, { useState, useEffect } from "react"
import axios from "axios"
import LocationPicker from "./LocationPicker"
import { CurrentAir } from "./CurrentAir"
import Navigation from "./Navigation"
import SignUp from "./SignUp"
import { AuthProvider } from "../context/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"




export default function App() {
  const [airData, setAirData] = useState(null)

  useEffect(() => {
    async function getData() {
     
      const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
      try {
        const response = await axios.get(url)
        setAirData(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])

  console.log(airData)

  if (!airData) {
    return <div>Loading indicator</div>
  }

  return (
    <Router>
          <AuthProvider>
      <div>
      
        <Switch>
          <Route path='/location' component={LocationPicker} />
         
            {/* <Route exact path="/" component={Dashboard} /> */}
              {/* <PrivateRoute path="/update-profile" component={UpdateProfile} /> */}
              <Route path="/signup" component={SignUp} />
              <Route path="/current_air" component={CurrentAir} />
              {/* <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} /> */}
        </Switch>
         

      </div>

    <div className="App">
      {/* <CurrentAir api={airData} /> */}
      <CurrentAir api={airData} />
    
      <Navigation />
     
    </div>
    </AuthProvider>
        </Router>

  )
}
