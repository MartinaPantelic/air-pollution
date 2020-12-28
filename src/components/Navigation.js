import React from 'react';
import { Link } from 'react-router-dom';

// import SignOutButton from '../SignOut';
import * as ROUTES from '../constants/routes';

// import { AuthUserContext } from '../Session';

// import './index.css';

// const Navigation = () => (
//   <div className ="nav">
//     <AuthUserContext.Consumer>
//       {authUser =>
//         authUser ? <NavigationAuth /> : <NavigationNonAuth />
//       }
//     </AuthUserContext.Consumer>
//   </div>
// );

const Navigation = () => (
  <div className="space-between">
  <ul>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.LOCATIONPICKER}>Map</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
  </ul>
  </div>
);

// const NavigationNonAuth = () => (
//   <ul>
//     <li>
//       <Link to={ROUTES.SIGN_IN}>Sign In</Link>
//     </li>
//   </ul>
// );

export default Navigation;