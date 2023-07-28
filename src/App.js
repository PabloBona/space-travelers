import React from 'react';
import {
  Route, Routes, NavLink,
} from 'react-router-dom';
import Dragons from './components/Dragons';
import Missions from './components/Missions/Missions';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import planet from './assets/images/planet.png';

function App() {
  return (
    <>
      <nav className="bg-light border-bottom border-success navbar navbar-expand-md navbar-light">
        <div className="container">
          <div>
            <img src={planet} alt="planet" className="planet" />
          </div>
          <div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mr-auto gap-3">
                <li className="nav-item">
                  <NavLink to="/" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>Rockets</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/missions" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>Missions</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/dragons" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>Dragons</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/myprofile" className={(navData) => (navData.isActive ? 'active-style' : 'none')}>My Profile</NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* Menu burger */}
          <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon" />
          </button>
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
