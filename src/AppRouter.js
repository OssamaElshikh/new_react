import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile'; // Import your Profile component
import PostProfile from './components/postprofile'; // Import your PostProfile component
import Nav from './components/navbar'; // Import your Navbar component
import ProfileDetails from './components/viewprofile';
import Login from './components/login';
import Profile3 from './components/profile3';
import Profiletry from './components/profiletry';
import Login2 from './components/login2';

function AppRouter() {
  return (
    <> 
    <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    {/* </Router> */}
    {/* <Router> */}
      <Nav />
      {/* <Profile/> */}
      <Routes>
        <Route exact path="/" element={<Profiletry/>} />
        <Route exact path="/profile" element={<Profiletry/>} />

        {/* <Route exact path="/profile" element={<Profile/>} /> */}
        <Route path="/addprofile" element={ <PostProfile/>} />
        <Route path='/viewprofile' element={<ProfileDetails/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default AppRouter;
