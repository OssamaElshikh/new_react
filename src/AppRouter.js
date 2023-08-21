import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Profile from './components/Profile'; // Import your Profile component
import PostProfile from './components/postprofile'; // Import your PostProfile component
import Nav from './components/navbar'; // Import your Navbar component
import ProfileDetails from './components/viewprofile';
import Login from './components/login';
import Profile3 from './components/profile3';
import Profiletry from './components/profiletry';
import Login2 from './components/login2';
// import 'bootstrap/dist/css/bootstrap.min.css'

function AppRouter() {
  return (
    <> 
    <BrowserRouter>
     
     <Routes>
       
        <Route path="/login" element={<Login2 />} />

        <Route path="/" element={<Profiletry />} />
        <Route path="/profile" element={<Profiletry />} />
        <Route path="/addprofile" element={<PostProfile />} />
        <Route path="/viewprofile" element={<ProfileDetails />} />
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default AppRouter;
