import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Dragons from './components/Dragons';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import planet from './assets/images/planet.png';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <div>
            <img src={planet} alt="planet" className="planet" />
          </div>
          <div>
            <ul className="navbar-nav mr-auto gap-3">
              <li className="nav-item">
                <NavLink to="/" activeClassName="active-style">Rockets</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/missions" activeClassName="active-style">Missions</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/dragons" activeClassName="active-style">Dragons</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/myprofile" activeClassName="active-style">My Profile</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
