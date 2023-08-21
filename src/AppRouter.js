import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import PostProfile from './components/postprofile'; // Import your PostProfile component
import ProfileTable from './components/profilestable';
import Login2 from './components/login2';
// import 'bootstrap/dist/css/bootstrap.min.css'

function AppRouter() {
  return (
    <> 
    <BrowserRouter>
     
     <Routes>
       
        <Route path="/login" element={<Login2 />} />

        <Route path="/" element={<ProfileTable />} />
        <Route path="/profile" element={<ProfileTable />} />
        <Route path="/addprofile" element={<PostProfile />} />
  
        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default AppRouter;
